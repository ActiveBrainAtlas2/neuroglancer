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

/**
 * @file Main entry point for default neuroglancer viewer.
 */
import {setupDefaultViewer} from 'neuroglancer/ui/default_viewer_setup';

window.addEventListener('DOMContentLoaded', () => {
  window['viewer'] = setupDefaultViewer();
});

//remove when moved to master
window.addEventListener('load', () => {
  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  setTimeout(async () => {
    const dummyEle = document.getElementsByClassName('neuroglancer-multiline-autocomplete-input')[0];
    dummyEle.innerHTML = "precomputed://https://activebrainatlas.ucsd.edu/data/DK39/neuroglancer_data/C1";
    dummyEle.dispatchEvent(new KeyboardEvent('keydown', {code:'Enter', key: 'Enter', keyCode: 13} ));
    await sleep(100);
    dummyEle.dispatchEvent(new KeyboardEvent('keydown', {code:'Enter', key: 'Enter', keyCode: 13} ));
    }, 100);
  }
);
