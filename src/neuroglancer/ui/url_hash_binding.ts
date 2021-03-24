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
import {WatchableValue} from 'neuroglancer/trackable_value';
import {RefCounted} from 'neuroglancer/util/disposable';
import {verifyObject} from 'neuroglancer/util/json';
import {Trackable} from 'neuroglancer/util/trackable';
import {StateAPI, State} from 'neuroglancer/services/state_loader';
import {AppSettings} from 'neuroglancer/services/service';

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
  private prevStateString: string|undefined;

  /**
   * Most recent error parsing URL hash.
   */
  parseError = new WatchableValue<Error|undefined>(undefined);

  /**
   * ActiveBrainAtlas fork:
   * Create ActiveBrainAtlas state API endpoint.
   */
  private stateAPI: StateAPI;
  private stateData: State;
  private stateID: string;

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
   * ActiveBrainAtlas fork:
   * Do not change URL when the current state changes.
   */
  setUrlHash() {
    history.replaceState(null, '', '');
  }

  /**
   * ActiveBrainAtlas fork:
   * Fetch the state from ActiveBrainAtlas server according to the ID.
   */
  updateFromUrlHash() {
    const id_match = location.href.match(/(?<=(\?id=))(.*?)\d*/);
    if ((id_match !== null) && (typeof id_match[0] !== 'undefined')) {
      this.stateID = id_match[0];

      this.stateAPI.getState(this.stateID).then(jsonState => {
        this.stateData = jsonState;
        let state = this.stateData.url;
        state = JSON.parse(state);
        if (state === this.prevStateString) {
          console.log('State has not changed.')
          return;
        }
        this.prevStateString = state;
        this.root.reset();
        verifyObject(state);
        this.root.restoreState(state);
      });
    }
  }
}
