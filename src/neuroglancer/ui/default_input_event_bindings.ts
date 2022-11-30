/**
 * @license
 * Copyright 2017 Google Inc.
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

import {EventActionMap} from 'neuroglancer/util/event_action_map';
import {InputEventBindings} from 'neuroglancer/viewer';
import { RefCounted } from '../util/disposable';

let defaultGlobalBindings: EventActionMap|undefined;

export function getDefaultGlobalBindings() {
  if (defaultGlobalBindings === undefined) {
    const map = new EventActionMap();
    map.set('keyl', 'recolor');
    map.set('keyx', 'clear-segments');
    map.set('keys', 'toggle-show-slices');
    map.set('keyb', 'toggle-scale-bar');
    map.set('keyv', 'toggle-default-annotations');
    map.set('keya', 'toggle-axis-lines');
    map.set('keyo', 'toggle-orthographic-projection');

    for (let i = 1; i <= 9; ++i) {
      map.set('digit' + i, 'toggle-layer-' + i);
      map.set('control+digit' + i, 'select-layer-' + i);
      map.set('alt+digit' + i, 'toggle-pick-layer-' + i);
    }

    for (let i = 0; i < 26; ++i) {
      const lowercase = String.fromCharCode(97 + i);
      const uppercase = String.fromCharCode(65 + i);
      map.set(`alt?+control?+shift+key${lowercase}`, `tool-${uppercase}`);
    }

    map.set('keyn', 'add-layer');
    map.set('keyh', 'help');

    map.set('space', 'toggle-layout');
    map.set('shift+space', 'toggle-layout-alternative');
    map.set('backslash', 'toggle-show-statistics');
    defaultGlobalBindings = map;
  }
  return defaultGlobalBindings;
}

let defaultSelectBindings: EventActionMap|undefined;
export function getDefaultSelectBindings() {
  if (defaultSelectBindings === undefined) {
    defaultSelectBindings = EventActionMap.fromObject({'control+mousedown2': 'select-position'});
  }
  return defaultSelectBindings;
}

let defaultAnnotationListBindings: EventActionMap|undefined;
export function getDefaultAnnotationListBindings() {
  if (defaultAnnotationListBindings === undefined) {
    defaultAnnotationListBindings = EventActionMap.fromObject(
        {
          'click0': 'pin-annotation',
          'control+mousedown0': 'move-to-annotation',
          'mousedown2': 'display-annotation-children',
        },
        {parents: [[getDefaultSelectBindings(), 0]]});
  }
  return defaultAnnotationListBindings;
}

let defaultRenderedDataPanelBindings: EventActionMap|undefined;
export function getDefaultRenderedDataPanelBindings() {
  if (defaultRenderedDataPanelBindings === undefined) {
    defaultRenderedDataPanelBindings = EventActionMap.fromObject(
        {
          'arrowleft': 'x-',
          'arrowright': 'x+',
          'arrowup': 'y-',
          'arrowdown': 'y+',
          'comma': 'z-',
          'period': 'z+',
          'alt+arrowleft': 'pan-x-',
          'alt+arrowright': 'pan-x+',
          'alt+arrowup': 'pan-y-',
          'alt+arrowdown': 'pan-y+',
          'alt+comma': 'pan-z-',
          'alt+period': 'pan-z+',
          'bracketleft': 't-',
          'bracketright': 't+',
          'keyz': 'snap',
          'control+equal': 'zoom-in',
          'alt+equal': 'depth-range-decrease',
          'control+shift+equal': 'zoom-in',
          'alt+shift+equal': 'depth-range-decrease',
          'control+minus': 'zoom-out',
          'alt+minus': 'depth-range-increase',
          'keyr': 'rotate-relative-z-',
          'keye': 'rotate-relative-z+',
          'shift+arrowdown': 'rotate-relative-x-',
          'shift+arrowup': 'rotate-relative-x+',
          'shift+arrowleft': 'rotate-relative-y-',
          'shift+arrowright': 'rotate-relative-y+',
          'control+wheel': {action: 'zoom-via-wheel', preventDefault: true},
          'alt+wheel': {action: 'adjust-depth-range-via-wheel', preventDefault: true},
          'at:wheel': {action: 'z+1-via-wheel', preventDefault: true},
          'at:shift+wheel': {action: 'z+10-via-wheel', preventDefault: true},
          'at:dblclick0': 'select',
          'at:control+mousedown0': 'annotate',
          'at:mousedown2': 'move-to-mouse-position',
          'at:alt+mousedown0': 'move-annotation',
          'at:control+alt+mousedown2': 'delete-annotation',
          'at:touchpinch': 'zoom-via-touchpinch',
          'at:touchrotate': 'rotate-in-plane-via-touchrotate',
          'at:touchtranslate2': 'translate-in-plane-via-touchtranslate',
          'at:touchhold1': 'move-to-mouse-position',
          'at:touchtap1x2': 'select',
          'at:touchtap2x3': 'snap',
          'at:control+keyz': 'switch-to-tool-draw-mode',
          'at:control+keyx': 'switch-to-tool-edit-mode',
        },
        {
          label: 'All Data Panels',
          parents: [[getDefaultSelectBindings(), 0]],
        });
  }
  return defaultRenderedDataPanelBindings;
}

let defaultPerspectivePanelBindings: EventActionMap|undefined;
export function getDefaultPerspectivePanelBindings() {
  if (defaultPerspectivePanelBindings === undefined) {
    defaultPerspectivePanelBindings = EventActionMap.fromObject(
        {
          'at:mousedown0': {action: 'rotate-via-mouse-drag', stopPropagation: true},
          'at:shift+mousedown0': {action: 'translate-via-mouse-drag', stopPropagation: true},
          'at:touchtranslate1': 'rotate-out-of-plane-via-touchtranslate',
        },
        {parents: [[getDefaultRenderedDataPanelBindings(), Number.NEGATIVE_INFINITY]]});
  }
  return defaultPerspectivePanelBindings;
}

let defaultSliceViewPanelBindings: EventActionMap|undefined;
export function getDefaultSliceViewPanelBindings() {
  if (defaultSliceViewPanelBindings === undefined) {
    defaultSliceViewPanelBindings = EventActionMap.fromObject(
        {
          'at:mousedown0': {action: 'translate-via-mouse-drag', stopPropagation: true},
          // 'at:shift+mousedown0': {action: 'rotate-via-mouse-drag', stopPropagation: true},
          'at:touchtranslate1': 'translate-z-via-touchtranslate',
        },
        {parents: [[getDefaultRenderedDataPanelBindings(), Number.NEGATIVE_INFINITY]]});
  }
  return defaultSliceViewPanelBindings;
}

export let polygonDrawModeBindings: EventActionMap|undefined;
export function getPolygonDrawModeBindings() {
  if (polygonDrawModeBindings === undefined) {
    polygonDrawModeBindings = EventActionMap.fromObject(
      {
        'at:mousedown0': 'annotate',
        'at:mousedown2': 'complete-annotation',
        'at:keyz': 'undo-annotation',
        'at:control+keyc': 'clone-polygon-annotation',
      }
    );
  }
  return polygonDrawModeBindings;
}


export let polygonEditModeBindings: EventActionMap|undefined;
export function getPolygonEditModeBindings() {
  if (polygonEditModeBindings === undefined) {
    polygonEditModeBindings = EventActionMap.fromObject(
      {
        'at:mousedown0': 'move-polygon-vertex',
        'at:control+alt+mousedown0': 'add-vertex-polygon',
        'at:control+alt+mousedown2': 'delete-vertex-polygon',
        // 'at:control+shift+mousedown0': 'delete-polygon',
        'at:shift+mousedown0': 'move-polygon-annotation',
        'at:keyr': 'rotate-polygon-z+',
        'at:keye': 'rotate-polygon-z-',
        'control+equal': 'scale-polygon-enlarge',
        'control+shift+equal': 'scale-polygon-enlarge',
        'control+minus': 'scale-polygon-shrink',
        'control+shift-minus': 'scale-polygon-shrink',
        'at:touchrotate': 'rotate-polygon-via-touchrotate',
        'at:touchpinch': 'zoom-polygon-via-touchpinch',
        'at:control+keyc': 'clone-polygon-annotation',
      }
    );
  }
  return polygonEditModeBindings;
}

export let pointDrawModeBindings: EventActionMap|undefined;
export function getPointDrawModeBindings() {
  if (pointDrawModeBindings === undefined) {
    pointDrawModeBindings = EventActionMap.fromObject(
      {
        'at:mousedown0': 'annotate',
      }
    );
  }
  return pointDrawModeBindings;
}


export let pointEditModeBindings: EventActionMap|undefined;
export function getPointEditModeBindings() {
  if (pointEditModeBindings === undefined) {
    pointEditModeBindings = EventActionMap.fromObject(
      {
        'at:mousedown0': 'move-point-annotation',
      }
    );
  }
  return pointEditModeBindings;
}

export function setDefaultInputEventBindings(inputEventBindings: InputEventBindings) {
  inputEventBindings.global.addParent(getDefaultGlobalBindings(), Number.NEGATIVE_INFINITY);
  inputEventBindings.sliceView.addParent(
      getDefaultSliceViewPanelBindings(), Number.NEGATIVE_INFINITY);
  inputEventBindings.perspectiveView.addParent(
      getDefaultPerspectivePanelBindings(), Number.NEGATIVE_INFINITY);
}

export function setPolygonDrawModeInputEventBindings<T extends RefCounted> (bindingsRef: T, 
  inputEventBindings: InputEventBindings) {
  bindingsRef.registerDisposer(inputEventBindings.sliceView.addParent(getPolygonDrawModeBindings(), Number.NEGATIVE_INFINITY+1));
  bindingsRef.registerDisposer(inputEventBindings.perspectiveView.addParent(getPolygonDrawModeBindings(), Number.NEGATIVE_INFINITY+1));
}

export function setPolygonEditModeInputEventBindings<T extends RefCounted> (bindingsRef: T,
  inputEventBindings: InputEventBindings) {
  bindingsRef.registerDisposer(inputEventBindings.sliceView.addParent(getPolygonEditModeBindings(), Number.NEGATIVE_INFINITY+1));
  bindingsRef.registerDisposer(inputEventBindings.perspectiveView.addParent(getPolygonEditModeBindings(), Number.NEGATIVE_INFINITY+1));
}

export function setPointDrawModeInputEventBindings<T extends RefCounted> (bindingsRef: T, 
  inputEventBindings: InputEventBindings) {
  bindingsRef.registerDisposer(inputEventBindings.sliceView.addParent(getPointDrawModeBindings(), Number.NEGATIVE_INFINITY+1));
  bindingsRef.registerDisposer(inputEventBindings.perspectiveView.addParent(getPointDrawModeBindings(), Number.NEGATIVE_INFINITY+1));
}

export function setPointEditModeInputEventBindings<T extends RefCounted> (bindingsRef: T,
  inputEventBindings: InputEventBindings) {
  bindingsRef.registerDisposer(inputEventBindings.sliceView.addParent(getPointEditModeBindings(), Number.NEGATIVE_INFINITY+1));
  bindingsRef.registerDisposer(inputEventBindings.perspectiveView.addParent(getPointEditModeBindings(), Number.NEGATIVE_INFINITY+1));
}