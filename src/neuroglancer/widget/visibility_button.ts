/**
 * @license
 * Copyright 2019 Google Inc.
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

import {makeIcon} from 'neuroglancer/widget/icon';
import svg_eye_crossed from 'ikonate/icons/eye-crossed.svg';
import svg_eye from 'ikonate/icons/eye.svg';
import { AnnotationLayerState } from '../annotation/annotation_layer_state';
 
export function makeVisibilityButton(annotationId: string, annotationLayerState: AnnotationLayerState) {
  const isVisible = annotationLayerState.source.getVisibility(annotationId) == 1.0;
  const element = document.createElement('div');
  let hideIcon: HTMLElement;
  let showIcon: HTMLElement;
  hideIcon = makeIcon({
    svg: svg_eye,
    title: 'Hide annotation',
    onClick: () => {
      const ref = annotationLayerState.source.getReference(annotationId);
      annotationLayerState.source.updateVisibility(ref, 0.0);
      hideIcon.style.display = 'none';
      showIcon.style.display = '';
      ref.dispose();
    }
  });
  showIcon = makeIcon({
    svg: svg_eye_crossed,
    title: 'Show annotation',
    onClick: () => {
      const ref = annotationLayerState.source.getReference(annotationId);
      annotationLayerState.source.updateVisibility(ref, 1.0);
      hideIcon.style.display = '';
      showIcon.style.display = 'none';
      ref.dispose();
    }
  });
  element.appendChild(showIcon);
  element.appendChild(hideIcon);
  hideIcon.style.display = isVisible ? '' : 'none';
  showIcon.style.display = !isVisible ? '' : 'none';
  return element;
}