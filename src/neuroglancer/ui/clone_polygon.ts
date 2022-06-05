/**
 * @license
 * Copyright 2018 Google Inc.
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
 * @file Support for editing Neuroglancer state as JSON directly within browser.
 */
import {Overlay} from 'neuroglancer/overlay';
import { AnnotationLayerState } from '../annotation/annotation_layer_state';
import { cloneAnnotationSequence } from '../annotation/polygon';
import { NavigationState } from '../navigation_state';
import { StatusMessage } from '../status';
import './clone_polygon.css';

export class ClonePolygonDialog extends Overlay {
  navigationState: NavigationState
  annotationId: string
  annotationLayer: AnnotationLayerState
  constructor(navigationState: NavigationState, annotationId: string, annotationLayer: AnnotationLayerState) {
    super();
    this.navigationState = navigationState;
    this.annotationId = annotationId;
    this.annotationLayer = annotationLayer;

    const offsetStartEle :HTMLInputElement = document.createElement('input');
    const polygonCntEle :HTMLInputElement = document.createElement('input');
    const stepSizeEle :HTMLInputElement = document.createElement('input');
    const button :HTMLElement = document.createElement('button');
    offsetStartEle.setAttribute('type', 'number');
    polygonCntEle.setAttribute('type', 'number');
    stepSizeEle.setAttribute('type', 'number');
    button.setAttribute('type', 'button');
    button.textContent = "Clone Polygon";
    button.addEventListener('click', () => {
      const startOffset = parseInt(offsetStartEle.value);
      const polygonCnt = parseInt(polygonCntEle.value);
      const stepSize = parseInt(stepSizeEle.value);
      if (isNaN(startOffset) || isNaN(polygonCnt) || isNaN(stepSize)) {
        const msg = new StatusMessage();
        msg.setErrorMessage("Enter valid values for cloning");
        return;
      }
      if (polygonCnt <= 0) {
        const msg = new StatusMessage();
        msg.setErrorMessage("Polygon count must be positive");
        return;
      }
      //@ts-ignore
      cloneAnnotationSequence(this.navigationState, this.annotationLayer, this.annotationId, startOffset, polygonCnt, stepSize);
      this.dispose();
    });

    const offsetStartDiv = document.createElement('div');
    offsetStartDiv.classList.add('neuroglancer-clone-polygon-input');
    offsetStartDiv.innerHTML = "Section start offset<br/>";
    offsetStartDiv.appendChild(offsetStartEle);
    const polygonCntDiv = document.createElement('div');
    polygonCntDiv.classList.add('neuroglancer-clone-polygon-input');
    polygonCntDiv.innerHTML = "Number of polygons<br/>";
    polygonCntDiv.appendChild(polygonCntEle);
    const stepSizeDiv = document.createElement('div');
    stepSizeDiv.classList.add('neuroglancer-clone-polygon-input');
    stepSizeDiv.innerHTML = "Offset between sections<br/>";
    stepSizeDiv.appendChild(stepSizeEle);
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('neuroglancer-clone-polygon-input');
    buttonDiv.appendChild(button);

    this.content.appendChild(offsetStartDiv);
    this.content.appendChild(polygonCntDiv);
    this.content.appendChild(stepSizeDiv);
    this.content.appendChild(buttonDiv);
    this.content.classList.add('neuroglancer-clone-polygon');
  }
}
 