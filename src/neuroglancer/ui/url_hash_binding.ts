/**
 * @license
 * Copyright 2016 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import debounce from 'lodash/debounce';
import { CredentialsManager } from 'neuroglancer/credentials_provider';
import { StatusMessage } from 'neuroglancer/status';
import { WatchableValue } from 'neuroglancer/trackable_value';
import { RefCounted } from 'neuroglancer/util/disposable';
import { responseJson } from 'neuroglancer/util/http_request';
import { urlSafeParse, verifyObject } from 'neuroglancer/util/json';
import { cancellableFetchSpecialOk, parseSpecialUrl } from 'neuroglancer/util/special_protocol_request';
import { getCachedJson, Trackable } from 'neuroglancer/util/trackable';
import { urlParams, stateAPI, StateAPI, State } from 'neuroglancer/services/state_loader';
import { database } from 'neuroglancer/services/firebase';
import { child, get, onValue, ref, set, update, getDatabase } from "firebase/database";

import { User, ActiveUser } from 'neuroglancer/services/user_loader';
const dbRef = ref(getDatabase());

/**
 * @file Implements a binding between a Trackable value and the URL hash state.
 */


/**
 * An instance of this class manages a binding between a Trackable value and the URL hash state.
 * The binding is initialized in the constructor, and is removed when dispose is called.
 */
export class UrlHashBinding extends RefCounted {
    /**
     * Most recently parsed or set state string.
     */
    private prevStateString: string | undefined;

    /**
     * Most recent error parsing URL hash.
     */
    parseError = new WatchableValue<Error | undefined>(undefined);

    /**
     * ActiveBrainAtlas fork:
     * Create ActiveBrainAtlas state API endpoint.
     */
    private stateAPI: StateAPI;
    private stateData: State;
    private stateID: string | null;
    private user: User;
    private multiUserMode: boolean;

    constructor(
        public root: Trackable, public credentialsManager: CredentialsManager,
        updateDelayMilliseconds = 200) {
        super();
        this.stateAPI = stateAPI;
        stateAPI.getUser().then(jsonUser => {
            this.user = jsonUser;
            this.stateID = urlParams.stateID;
            this.multiUserMode = urlParams.multiUserMode;
            this.registerEventListener(window, 'hashchange', () => this.updateFromUrlHash());
            const throttledSetUrlHash = debounce(() => this.setUrlHash(), updateDelayMilliseconds);
            this.registerDisposer(root.changed.add(throttledSetUrlHash));
            this.registerDisposer(() => throttledSetUrlHash.cancel());
            this.updateFromUrlHash();
        });
    }

    /**
     * ActiveBrainAtlas fork:
     * Do not change URL when the current state changes.
     * Instead, when the current state change in the multi-user mode,
     * push the update to Firebase.
     */
    setUrlHash() {
        if (this.stateID && this.multiUserMode) {
            if (this.user.user_id == 0) {
                StatusMessage.showTemporaryMessage('You have not logged in yet. Changes will not be pushed to the cloud. Please log in and refresh the page to use multi-user mode.');
                return;
            }
            const cacheState = getCachedJson(this.root);
            const stateString = JSON.stringify(cacheState.value)
            const urlData = JSON.parse(stateString);
            const { prevStateString } = this;
            const sameState = prevStateString === stateString;
            if (!sameState) {
                console.log('Updating state from user browser and saving to firebase');
                setupUser(this.stateData, this.user);
                this.updateData(urlData);
                this.prevStateString = stateString;
            } else {
                console.log('setUrlHash states are the same, doing nothing.')
            }
        }
    }

    /**
     * ActiveBrainAtlas fork:
     * Fetch the state from ActiveBrainAtlas server according to the GET parameter `id`.
     * The user mode is determined by the GET parameter `multi`:
     * 0 - single user mode; 1 - multi user mode.
     * This is called upon initial load of the page.
     */

    updateFromUrlHash() {
        if (this.stateID) {
            const { stateID } = this;
            if (this.multiUserMode) {
                if (this.user.user_id === 0) {
                    StatusMessage.showTemporaryMessage('You have not logged in yet. Please log in and refresh the page to use multi-user mode.');
                    return;
                }
                console.log('updateFromUrlHash point 1');
                get(child(dbRef, `neuroglancer/${stateID}`)).then((snapshot) => {
                    console.log('updateFromUrlHash point 2');
                    if (snapshot.exists()) {
                        console.log('updateFromUrlHash point 3');
                        this.stateData = snapshot.val();
                        console.log(this.stateData);
                        const jsonStateUrl = this.stateData;
                        this.root.reset();
                        verifyObject(jsonStateUrl);
                        this.root.restoreState(jsonStateUrl);
                        this.prevStateString = JSON.stringify(jsonStateUrl);
                        setupUser(this.stateData, this.user);
                        this.setStateFromFirebase();
                    } else {
                        this.stateAPI.getState(stateID).then(jsonState => {
                            this.stateData = jsonState;
                            const jsonStateUrl = this.stateData.url;
                            this.root.reset();
                            console.log('updateFromUrlHash update from mysql database');
                            verifyObject(jsonStateUrl);
                            this.root.restoreState(jsonStateUrl);
                            this.prevStateString = JSON.stringify(jsonStateUrl);
                            this.updateData(this.stateData);
                            setupUser(this.stateData, this.user);
                            // this.setStateFromFirebase();
                        });
                    }
                }).catch((error) => {
                    console.error(error);
                });

            } else {
                this.stateAPI.getState(stateID).then(jsonState => {
                    this.stateData = jsonState;
                    const stateObject = this.stateData.url;
                    this.prevStateString = undefined;
                    this.root.reset();
                    verifyObject(stateObject);
                    this.root.restoreState(stateObject);
                    this.stateData.url = stateObject;
                });
            }
        } else {
            try {
                let s = location.href.replace(/^[^#]+/, '');
                if (s === '' || s === '#' || s === '#!') {
                    s = '#!{}';
                }
                // Handle remote JSON state
                if (s.match(/^#!([a-z][a-z\d+-.]*):\/\//)) {
                    const url = s.substring(2);
                    const { url: parsedUrl, credentialsProvider } = parseSpecialUrl(url, this.credentialsManager);
                    StatusMessage.forPromise(
                        cancellableFetchSpecialOk(credentialsProvider, parsedUrl, {}, responseJson)
                            .then(json => {
                                verifyObject(json);
                                this.root.reset();
                                this.root.restoreState(json);
                            }),
                        { initialMessage: `Loading state from ${url}`, errorPrefix: `Error loading state:` });
                } else if (s.startsWith('#!+')) {
                    s = s.slice(3);
                    // Firefox always %-encodes the URL even if it is not typed that way.
                    s = decodeURIComponent(s);
                    const state = urlSafeParse(s);
                    verifyObject(state);
                    this.root.restoreState(state);
                } else if (s.startsWith('#!')) {
                    s = s.slice(2);
                    s = decodeURIComponent(s);
                    const state = urlSafeParse(s);
                    this.root.reset();
                    verifyObject(state);
                    this.root.restoreState(state);
                } else {
                    throw new Error(`URL hash is expected to be of the form "#!{...}" or "#!+{...}".`);
                }
                this.parseError.value = undefined;
            } catch (parseError) {
                this.parseError.value = parseError;
            }
        }
    }

    /** Not used at the moment */
    resetDatabaseState() {
        if (!this.stateID) {
            StatusMessage.showTemporaryMessage("This is not saved to the database yet.");
        } else {
            this.stateAPI.getState(this.stateID).then(jsonState => {
                this.stateData = jsonState;
                const jsonStateUrl = this.stateData.url;
                this.root.reset();
                verifyObject(jsonStateUrl);
                this.root.restoreState(jsonStateUrl);
                this.setUrlHash();
            });
        }
    }

    /**
     * ActiveBrainAtlas fork:
     * Update the local state upon a firebase update.
     * This is called only in the multi user mode.
     */
    checkAndSetStateFromFirebase() {
        if (this.stateID != null && this.multiUserMode) {
            const stateRef = ref(database, `neuroglancer/${this.stateID}`);
            onValue(stateRef, (snapshot) => {
                this.stateData = snapshot.val();
                const jsonStateUrl = this.stateData;
                this.root.reset();
                verifyObject(jsonStateUrl);
                this.root.restoreState(jsonStateUrl);
                this.prevStateString = JSON.stringify(jsonStateUrl);
            });
        }
    }

    /**
     * ActiveBrainAtlas fork:
     * Update the local state upon a firebase update.
     * This is called only in the multi user mode.
     */
    private setStateFromFirebase() {
        if (this.stateID != null && this.multiUserMode) {
            get(child(dbRef, `neuroglancer/${this.stateID}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    this.stateData = snapshot.val();
                    const jsonStateUrl = this.stateData;
                    this.root.reset();
                    verifyObject(jsonStateUrl);
                    this.root.restoreState(jsonStateUrl);
                    this.prevStateString = JSON.stringify(jsonStateUrl);
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    private updateData(urlData: any) {
        const updates: any = {};
        updates['/neuroglancer/' + this.stateID] = urlData;
        update(ref(database), updates)
            .then(() => {
                console.log('updatedData was OK');
            })
            .catch((error) => {
                console.log('error in updateData');
                console.log(error);
            });
    }


}

function setupUser(state: State, user: User) {
    if (state.state_id != null && user.user_id != null) {
        const activeUser: ActiveUser = {
            name: user.username,
            date: Date.now(),
        }
        set(ref(database, `users/${state.state_id}/${user.user_id}`), { activeUser });
    }
}
