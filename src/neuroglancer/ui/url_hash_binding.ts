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
import {CredentialsManager} from 'neuroglancer/credentials_provider';
import {StatusMessage} from 'neuroglancer/status';
import {WatchableValue} from 'neuroglancer/trackable_value';
import {RefCounted} from 'neuroglancer/util/disposable';
import {responseJson} from 'neuroglancer/util/http_request';
import {urlSafeParse, verifyObject} from 'neuroglancer/util/json';
import {cancellableFetchSpecialOk, parseSpecialUrl} from 'neuroglancer/util/special_protocol_request';
import {getCachedJson, Trackable} from 'neuroglancer/util/trackable';
import {StateAPI, State} from 'neuroglancer/ui/state_loader';
import {AppSettings} from "neuroglancer/services/service";
import {neuroglancerDataRef} from "neuroglancer/services/firebase";

/**
 * @file Implements a binding between a Trackable value and the URL hash state.
 */

/**
 * Encodes a fragment string robustly.
 */
function encodeFragment(fragment: string) {
  return encodeURI(fragment).replace(/[!'()*;,]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * An instance of this class manages a binding between a Trackable value and the URL hash state.
 * The binding is initialized in the constructor, and is removed when dispose is called.
 */
export class UrlHashBinding extends RefCounted {
  /**
   * Most recently parsed or set state string.
   */
  private prevStateString: string|undefined;

  /**
   * Generation number of previous state set.
   */
  private prevStateGeneration: number|undefined;

  /**
   * Most recent error parsing URL hash.
   */
  parseError = new WatchableValue<Error|undefined>(undefined);

  /**
   * Create state api endpoint
   */
  private stateAPI: StateAPI;
  private stateData: State;
  private stateID: string;
  private multiUserMode: string; /* set to 1 if true, else undefined */

  constructor(
      public root: Trackable, public credentialsManager: CredentialsManager,
      updateDelayMilliseconds = 200) {
    super();
    // this.registerEventListener(window, 'hashchange', () => this.updateFromUrlHash());
    const throttledSetUrlHash = debounce(() => this.setUrlHash(), updateDelayMilliseconds);
    this.registerDisposer(root.changed.add(throttledSetUrlHash));
    this.registerDisposer(() => throttledSetUrlHash.cancel());
    this.stateAPI = new StateAPI(
      AppSettings.API_ENDPOINT + '/session',
      AppSettings.API_ENDPOINT + '/neuroglancer'
    );

  }


  /**
   * This is the initial fetch from the REST API. It queries the database
   * from the primary key in the url: id=XXX where XXX is the primary key
   */
  public fetchState() {
    const id_match = location.href.match(/(?<=(\?id=))(.*?\d*)\&multi=(\d*)/);
    if ((id_match !== null) 
      && (typeof id_match[2] !== 'undefined') 
      && (typeof id_match[3] !== 'undefined')) {
      this.stateID = id_match[2];
      this.multiUserMode = id_match[3];

      this.stateAPI.getState(this.stateID).then(jsonState => {
        this.stateData = jsonState;
        let state = this.stateData.url;
        state = JSON.parse(state);
        if (state === this.prevStateString) {
          console.log('State has not changed.')
          return;
        }
        this.root.reset();
        verifyObject(state);
        this.stateData.url = state;
        this.root.restoreState(state);
        const cacheState = getCachedJson(this.root);
        const stateString = encodeFragment(JSON.stringify(cacheState.value));
        this.prevStateString = stateString;
        });
    }
  }

  /* this gets fired whenever state changes. We then do a merge into the firebase */
  setUrlHash() {
    if (this.stateID !== undefined) {
      neuroglancerDataRef.child(this.stateID).set({ state: this.stateData });
      const message = this.stateID + ' was changed at ' + new Date();
      console.log(message);
    }
  }

  async setStateFromFirebase() {
    if ((this.stateID !== undefined) && (this.multiUserMode === '1')){
      const firebaseString = await this.fetchStateFromFirebase();
      const stateString = encodeFragment(JSON.stringify(firebaseString));
      this.prevStateString = stateString;
    }
  }

  /* this needs to fire when in multi-user mode and the firebase object changes */
  fetchStateFromFirebase(): Promise<any> {
      return neuroglancerDataRef.child(this.stateID).get();
  }



  /**
   * This is unused
   */
  public updateFromUrlHash() {
    const cacheState = getCachedJson(this.root);
    const {generation} = cacheState;
    if (generation !== this.prevStateGeneration) {
      console.log('generation is NOT equal to prevSateGeneration');
      this.prevStateGeneration = cacheState.generation;
      const stateString = encodeFragment(JSON.stringify(cacheState.value));
      if (stateString !== this.prevStateString) {
        this.prevStateString = stateString;
        console.log('prevStateString NOT equal to  stateString');
      } else {
        console.log('prevStateString equal to  stateString');
      }
    } else {
      console.log('generation is equal to prevSateGeneration');
    }
  }




  /**
   * Sets the URL hash to match the current state.
   * Original version, also unused
   */
  setUrlHashXXX() {
    const cacheState = getCachedJson(this.root);
    const {generation} = cacheState;
    if (generation !== this.prevStateGeneration) {
      this.prevStateGeneration = cacheState.generation;
      const stateString = encodeFragment(JSON.stringify(cacheState.value));
      if (stateString !== this.prevStateString) {
        this.prevStateString = stateString;
        if (decodeURIComponent(stateString) === '{}') {
          history.replaceState(null, '', '#');
        } else {
          history.replaceState(null, '', '#!' + stateString);
          // history.replaceState(null, '', '#!XXXXXXXXX');
        }
      }
    }
  }

  /**
   * Sets the current state to match the URL hash.  If it is desired to initialize the state based
   * on the URL hash, then this should be called immediately after construction.
   * Original version, also unused
   */
  updateFromUrlHashXXX() {
    try {
      let s = location.href.replace(/^[^#]+/, '');
      if (s === '' || s === '#' || s === '#!') {
        s = '#!{}';
      }
      // Handle remote JSON state
      if (s.match(/^#!(http|https|gs):\/\//)) {
        const url = s.substring(2);
        const {url: parsedUrl, credentialsProvider} = parseSpecialUrl(url, this.credentialsManager);
        StatusMessage.forPromise(
            cancellableFetchSpecialOk(credentialsProvider, parsedUrl, {}, responseJson)
                .then(json => {
                  verifyObject(json);
                  this.root.reset();
                  this.root.restoreState(json);
                }),
            {initialMessage: `Loading state from ${url}`, errorPrefix: `Error loading state:`});
      } else if (s.startsWith('#!+')) {
        s = s.slice(3);
        // Firefox always %-encodes the URL even if it is not typed that way.
        s = decodeURIComponent(s);
        const state = urlSafeParse(s);
        verifyObject(state);
        this.root.restoreState(state);
        this.prevStateString = undefined;
      } else if (s.startsWith('#!')) {
        s = s.slice(2);
        s = decodeURIComponent(s);
        if (s === this.prevStateString) {
          return;
        }
        this.prevStateString = s;
        this.root.reset();
        const state = urlSafeParse(s);
        verifyObject(state);
        console.log(state);
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
