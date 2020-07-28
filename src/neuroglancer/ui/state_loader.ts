import {Overlay} from 'neuroglancer/overlay';

import './state_loader.css';
import { fetchOk } from 'neuroglancer/util/http_request';

export class StateLoaderDialog extends Overlay {
  /**
   * @param keyMap Key map to list.
   */
  constructor() {
    super();

    let {content} = this;
    content.classList.add('state-loader');

    let scroll = document.createElement('div');
    scroll.classList.add('state-loader-container');

    fetchOk('https://activebrainatlas.ucsd.edu/activebrainatlas/neuroglancer/', {mode: 'no-cors'}).then(response => {
      return response.json();
    }).then(json => {
      console.log(json);
    });
  }
}

