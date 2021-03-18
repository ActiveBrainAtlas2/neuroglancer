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
import isEqual from 'lodash/isEqual';
import { CredentialsManager } from 'neuroglancer/credentials_provider';
import { WatchableValue } from 'neuroglancer/trackable_value';
import { RefCounted } from 'neuroglancer/util/disposable';
import { verifyObject } from 'neuroglancer/util/json';
import { getCachedJson, Trackable } from 'neuroglancer/util/trackable';
import { StateAPI, State } from 'neuroglancer/services/state_loader';
// import { StatusMessage } from 'neuroglancer/status';
import { AppSettings } from "neuroglancer/services/service";
import { neuroglancerDataRef, databaseRef } from "neuroglancer/services/firebase";
import {User} from "neuroglancer/services/user";


/**
 * @file Implements a binding between a Trackable value and the URL hash state.
 */
/**
 * Encodes a fragment string robustly.
 */
/*
 function encodeFragment(fragment: string) {
  return encodeURI(fragment).replace(/[!'()*;,]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
*/

/**
 * Setup for initial firebase connection with data and user info
 * @param uid 
 * @param username 
 * @param picture 
 * @param title 
 * @param body 
 * @returns 
 */
function setupUserData(comments: string, person_id: number, 
  state_id: number, url: string, user_date: string) {
  const urlData = {
    comments: comments,
    person_id: person_id,
    state_id: state_id,
    url: url,
    user_date: user_date
  };

  // Write the new url's data simultaneously in the neuroglancer list and the user's list.
  const updates: any = {};
  updates["/neuroglancer/" + state_id] = urlData;
  return databaseRef.update(updates);
}
/**
 * Setup for initial user info
 * @param uid 
 * @returns 
 */
 function setupUser(state_id: number, user: User) {
  const updates: any = {};
  updates["/users/" + state_id + "/" + user.user_id] = user.username;
  return databaseRef.update(updates);
}
/**
 * compare two json state objects
 * @param stringified object 1
 * @param stringified object 2
 * @returns boolean
 */
 function compareState(stringObject1:any, stringObject2:any):boolean {
  try {
    JSON.parse(stringObject1);
  } catch (e) {
    return false;
  }
  try {
    JSON.parse(stringObject2);
  } catch (e) {
    return false;
  }
  return isEqual(JSON.parse(stringObject1), JSON.parse(stringObject2));

}

/**
 * An instance of this class manages a binding between a Trackable value and the URL hash state.
 * The binding is initialized in the constructor, and is removed when dispose is called.
 */
export class UrlHashBinding extends RefCounted {
  /**
   * Most recently parsed or set state string.
   */
  /**
   * Most recent error parsing URL hash.
   */
  parseError = new WatchableValue<Error | undefined>(undefined);
  private stateAPI: StateAPI;
  private stateData: State;
  private stateID: string;
  private user: User;
  private prevStateString = "";
  private multiUserMode: string; /* set to 1 if true, else 0 */
  constructor(
    public root: Trackable, public credentialsManager: CredentialsManager,
    updateDelayMilliseconds = 200) {
    super();
    this.registerEventListener(window, 'hashchange', () => this.updateFromUrlHash());
    const throttledSetUrlHash = debounce(() => this.setUrlHash(), updateDelayMilliseconds);
    this.registerDisposer(root.changed.add(throttledSetUrlHash));
    this.registerDisposer(() => throttledSetUrlHash.cancel());
    this.stateAPI = new StateAPI(
      AppSettings.API_ENDPOINT + '/session',
      AppSettings.API_ENDPOINT + '/neuroglancer'
    );

  }

  /**
   * This gets fired once when the page initally loads.
   * It the initial fetch from the REST API. It queries the database
   * from the primary key in the url: id=XXX where XXX is the primary key
   * The 2nd variable: multi is either 0 for single user mode, or 1 for multi user mode
   */
  public updateFromUrlHash() {
    const id_match = location.href.match(/(?<=(\?id=))(.*?\d*)\&multi=(\d*)/);
    if ((id_match !== null)
      && (typeof id_match[2] !== 'undefined')
      && (typeof id_match[3] !== 'undefined')) {

      this.stateID = id_match[2];
      this.multiUserMode = id_match[3];

      this.stateAPI.getUser().then(jsonUser => {
        this.user = jsonUser;
      })


      neuroglancerDataRef.child(this.stateID).once('value', (snapshot) => {
        if (snapshot.exists()) {
          console.log('child exists with ' + this.stateID);
          this.stateData = snapshot.val();
          const jsonStateUrl = this.stateData.url;
          this.root.reset();
          verifyObject(jsonStateUrl);
          this.root.restoreState(jsonStateUrl);
          setupUser(this.stateData.state_id, this.user);
        } else {
          this.stateAPI.getState(this.stateID).then(jsonState => {
            this.stateData = jsonState;
            if (this.stateData.state_id > 0) {
              let jsonStateUrl = this.stateData.url;
              jsonStateUrl = JSON.parse(jsonStateUrl);
              this.root.reset();
              verifyObject(jsonStateUrl);
              this.root.restoreState(jsonStateUrl);
              this.stateData.url = jsonStateUrl;
              setupUserData(this.stateData.comments,
                this.stateData.person_id, 
                this.stateData.state_id,
                this.stateData.url,
                this.stateData.user_date);
              setupUser(this.stateData.state_id, this.user);
            }
          });
        }
      });
      this.setStateFromFirebase();
    } /* finished if valid stateID */

  }



  /** this needs to fire when in multi-user mode and the firebase object changes 
   * This should only fire when another users updates state
   */
  private setStateFromFirebase() {
    if ((this.stateID !== undefined)
      && (this.multiUserMode !== undefined)
      && (this.multiUserMode === '1')) {

      neuroglancerDataRef.child(this.stateID)
        .on("child_changed", (snapshot) => {
          const jsonState = snapshot.val();
          const stateString = JSON.stringify(jsonState);
          const sameState = compareState(this.prevStateString, stateString);
    
          if ((snapshot.key === 'url') && (!sameState)) {
            this.prevStateString = stateString;
            this.root.reset();
            verifyObject(jsonState);
            this.root.restoreState(jsonState);
          }
        });
    }
  }

  //TODO use just one state ID !!!
  /** This gets fired in an interval defined in the constructor above
   * if a user does anything.
   * Sets the firebase state to match the current state.
   */
  setUrlHash() {
    if ((this.stateID !== undefined)
      && (this.multiUserMode !== undefined)
      && (this.multiUserMode === '1')) {
    
      const cacheState = getCachedJson(this.root);
      const stateString = JSON.stringify(cacheState.value);
      const urlData = JSON.parse(stateString);
      const layerType = urlData.layers[0].type;
      const sameState = compareState(this.prevStateString, stateString);
      if ((layerType !== 'new') && (!sameState)) {
        console.log('updating state from user browser')
        neuroglancerDataRef.child(this.stateID).update({ url: urlData });
        this.prevStateString = stateString;
      }

    }
  }


}
