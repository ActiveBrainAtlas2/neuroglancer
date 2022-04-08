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
 import { Overlay } from 'neuroglancer/overlay';
import { AnnotationType } from '../annotation';
import { AnnotationLayerState } from '../annotation/annotation_layer_state';
import { makeLayer, PersistentViewerSelectionState } from '../layer';
import { Segmentation } from '../services/state';
import { StateLoader } from '../services/state_loader';
import { StatusMessage } from '../status';
import { AnnotationLayerView, getLandmarkList, PlaceVolumeTool, UserLayerWithAnnotations, VolumeSession, VolumeToolMode } from './annotations';
 
 import './volume_session.css';
 
  export class VolumeSessionDialog extends Overlay {
    landmarkDropdown : HTMLSelectElement|undefined = undefined;
    colorInput: HTMLInputElement|undefined = undefined;
    constructor(public annotationLayerView: AnnotationLayerView) {
      super();
      
      const configTable = document.createElement('table');
      configTable.caption = configTable.createCaption();
      configTable.caption.innerHTML = "<h2>Volume session</h2>";

      const volumeInfoRows = this.getVolumeInfoRows();
      const newVolumeRow = this.getNewVolumeRow();
      const editVolumeRow = this.getEditVolumeRow();
      const closeSessionRow = this.closeSessionRow();
      const segmentationRow = this.getSegmentationRow();

      volumeInfoRows.forEach(volumeInfoRow => {
        configTable.appendChild(volumeInfoRow);
      });
      configTable.appendChild(newVolumeRow);
      configTable.appendChild(editVolumeRow);
      configTable.appendChild(closeSessionRow);
      configTable.appendChild(segmentationRow);
      configTable.classList.add('volume-session-table');

      this.content.appendChild(configTable);
    }

    getNewVolumeRow() : HTMLTableRowElement {
      const row = document.createElement('tr');
      const col = document.createElement('td');
      col.style.textAlign = 'center';
      col.colSpan = 2;
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.textContent = 'Start a new volume';
      button.addEventListener('click', () => {
        this.annotationLayerView.layer.tool.value = new PlaceVolumeTool(this.annotationLayerView.layer, {}, 
          undefined, VolumeToolMode.DRAW, this.annotationLayerView.volumeSession, this.annotationLayerView.volumeButton);
        const volumeTool = <PlaceVolumeTool>this.annotationLayerView.layer.tool.value;
        let color = (this.colorInput)? this.colorInput.value : undefined;
        let description = (this.landmarkDropdown)? this.landmarkDropdown.options[this.landmarkDropdown.selectedIndex].value : undefined;
        const ref = volumeTool.createNewVolumeAnn(description, color);
        if (ref === undefined || !ref.value) {
          StatusMessage.showTemporaryMessage("Failed to create new volume");
          this.annotationLayerView.layer.tool.value = undefined;
          if (ref) ref.dispose();
        } else {
          volumeTool.session.value = <VolumeSession>{reference: ref};
        }
        this.dispose();
      });
      button.classList.add('volume-session-btn');

      col.appendChild(button);
      row.appendChild(col);
      return row;
    }

    getVolumeInfoRows() : HTMLTableRowElement[] {
      const labelRow = document.createElement('tr');
      const labelDesc = document.createElement('td');
      labelDesc.textContent = "Description: ";
      const landmarkCol = document.createElement('td');
      const landmarkDropdown = this.getLandMarkDropDown();
      landmarkCol.appendChild(landmarkDropdown);
      labelRow.appendChild(labelDesc);
      labelRow.appendChild(landmarkCol);

      const colorRow = document.createElement('tr');
      const colorDesc = document.createElement('td');
      colorDesc.textContent = "Color: ";
      const colorInput = document.createElement('input');
      colorInput.setAttribute('type', 'color');
      colorInput.style.backgroundColor = 'black';
      colorInput.value = 'yellow';
      if (this.annotationLayerView.layer.annotationColorPicker) {
        colorInput.value = this.annotationLayerView.layer.annotationColorPicker.getColor();
      }
      colorRow.appendChild(colorDesc);
      colorRow.appendChild(colorInput);

      this.landmarkDropdown = landmarkDropdown;
      this.colorInput = colorInput;

      return [labelRow, colorRow];
    }

    getEditVolumeRow() : HTMLTableRowElement {
      const row = document.createElement('tr');
      const col = document.createElement('td');
      col.style.textAlign = 'center';
      col.colSpan = 2;
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.textContent = 'Edit selected volume';
      button.addEventListener('click', () => {
        const selectionState : PersistentViewerSelectionState|undefined = 
        this.annotationLayerView.layer.manager.root.selectionState.value;

        if (!this.annotationLayerView.layer.manager.root.selectionState.pin.value || selectionState === undefined) {
          StatusMessage.showTemporaryMessage("Please select and pin a volume annotation in current layer to start editing");
          return;
        }
        let selectedAnnotationId = undefined;
        let selectedAnnotationLayer = undefined;

        for (let layer of selectionState.layers) {
          if (layer.state.annotationId === undefined) continue;
          const userLayerWithAnnotations = <UserLayerWithAnnotations>layer.layer;
          const annotationLayer = userLayerWithAnnotations.annotationStates.states.find(
            x => x.sourceIndex === layer.state.annotationSourceIndex &&
                (layer.state.annotationSubsource === undefined ||
                x.subsourceId === layer.state.annotationSubsource) && !x.source.readonly);
          if (annotationLayer === undefined) continue;
          selectedAnnotationLayer = this.annotationLayerView.layer.annotationStates.states.find(
            x => x === annotationLayer 
          );
          if (selectedAnnotationLayer === undefined) continue;
          
          selectedAnnotationId = layer.state.annotationId;
          selectedAnnotationLayer = annotationLayer;
          break;
        }
        if (selectedAnnotationId === undefined || selectedAnnotationLayer === undefined) {
          StatusMessage.showTemporaryMessage("Please select and pin a volume annotation in current layer to start editing");
          return;
        }

        const ref = selectedAnnotationLayer.source.getReference(selectedAnnotationId);
        if (!ref.value || ref.value.type !== AnnotationType.VOLUME) {
          StatusMessage.showTemporaryMessage("Please select and pin a volume annotation in current layer to start editing");
          if (ref) ref.dispose();
          return;
        }

        this.annotationLayerView.layer.tool.value = new PlaceVolumeTool(this.annotationLayerView.layer, {}, 
          undefined, VolumeToolMode.EDIT, this.annotationLayerView.volumeSession, this.annotationLayerView.volumeButton);
        const volumeTool = <PlaceVolumeTool>this.annotationLayerView.layer.tool.value;
        volumeTool.session.value = <VolumeSession>{reference: ref};

        this.dispose();
      });
      button.classList.add('volume-session-btn');

      col.appendChild(button);
      row.appendChild(col);
      return row;
    }

    closeSessionRow() : HTMLTableRowElement {
      const row = document.createElement('tr');
      const col = document.createElement('td');
      col.style.textAlign = 'center';
      col.colSpan = 2;
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.textContent = 'Close current active session';
      button.addEventListener('click', () => {
        const isInstance = this.annotationLayerView.layer.tool.value instanceof PlaceVolumeTool;
        if (isInstance) {
          this.annotationLayerView.layer.tool.value!.registerDisposer(() => {
            this.dispose();
          });
          this.annotationLayerView.layer.tool.value!.registerDisposer(() => {
            const iconDiv = (<PlaceVolumeTool>this.annotationLayerView.layer.tool.value!).icon.value;
            if (iconDiv === undefined) return;
            iconDiv.style.backgroundColor = '';
          });
          this.annotationLayerView.layer.tool.value!.dispose();
        } else {
          this.dispose();
        }
      });
      button.classList.add('volume-session-btn');

      col.appendChild(button);
      row.appendChild(col);
      return row;
    }

    getLandMarkDropDown() : HTMLSelectElement {
      const landmarkDropdown = document.createElement('select');
      landmarkDropdown.classList.add('neuroglancer-landmarks-dropdown');
      const defaultOption = document.createElement('option');
      defaultOption.text = 'Select landmark';
      defaultOption.value = '';
      defaultOption.disabled = true;
      defaultOption.selected = true;
      landmarkDropdown.add(defaultOption);
      getLandmarkList().then(function(result) {
        const n_landmark = result.length
        for (let i = 0; i < n_landmark; i++){
          const landmarki = result[i];
          const option = document.createElement('option');
          option.value = landmarki; 
          option.text = landmarki;
          landmarkDropdown.add(option)
        }
      });

      return landmarkDropdown;
    }

    getSegmentationRow() : HTMLTableRowElement {
      const row = document.createElement('tr');
      const col = document.createElement('td');
      col.style.textAlign = 'center';
      col.colSpan = 2;
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.textContent = 'Segment selected volume';
      button.addEventListener('click', () => {
        const selectionState : PersistentViewerSelectionState|undefined = 
        this.annotationLayerView.layer.manager.root.selectionState.value;

        if (!this.annotationLayerView.layer.manager.root.selectionState.pin.value || selectionState === undefined) {
          StatusMessage.showTemporaryMessage("Please select and pin a volume annotation in current layer to segment");
          return;
        }
        let selectedAnnotationId :string|undefined = undefined;
        let selectedAnnotationLayer :AnnotationLayerState|undefined = undefined;
        let selectedUserLayer :UserLayerWithAnnotations|undefined = undefined;

        for (let layer of selectionState.layers) {
          if (layer.state.annotationId === undefined) continue;
          const userLayerWithAnnotations = <UserLayerWithAnnotations>layer.layer;
          const annotationLayer = userLayerWithAnnotations.annotationStates.states.find(
            x => x.sourceIndex === layer.state.annotationSourceIndex &&
                (layer.state.annotationSubsource === undefined ||
                x.subsourceId === layer.state.annotationSubsource) && !x.source.readonly);
          if (annotationLayer === undefined) continue;
          selectedAnnotationLayer = this.annotationLayerView.layer.annotationStates.states.find(
            x => x === annotationLayer 
          );
          if (selectedAnnotationLayer === undefined) continue;
          
          selectedAnnotationId = layer.state.annotationId;
          selectedAnnotationLayer = annotationLayer;
          selectedUserLayer = userLayerWithAnnotations;
          break;
        }
        if (selectedAnnotationId === undefined || selectedAnnotationLayer === undefined || selectedUserLayer === undefined) {
          StatusMessage.showTemporaryMessage("Please select and pin a volume annotation in current layer to segment");
          return;
        }

        const ref = selectedAnnotationLayer.source.getReference(selectedAnnotationId);
        if (!ref.value || ref.value.type !== AnnotationType.VOLUME) {
          StatusMessage.showTemporaryMessage("Please select and pin a volume annotation in current layer to segment");
          if (ref) ref.dispose();
          return;
        }

        const stateLoader = <StateLoader>(window['viewer'].stateLoader);
        const successCallback = (res: Segmentation) => {
          const manager = selectedUserLayer!.manager;
          const segmentationLayer = makeLayer(manager, res.name, {type: 'segmentation', 
          'source': res.url, 'tab': 'segments', 'segments': ["1"]});
          manager.add(segmentationLayer);
        }
        stateLoader.segmentVolume(ref.id, successCallback);

        // const resTemp : Segmentation = {
        //   url: 'testURL',
        //   name: 'testName'
        // };
        // successCallback(resTemp);

        this.dispose();
      });
      button.classList.add('volume-session-btn');

      col.appendChild(button);
      row.appendChild(col);
      return row;
    }
  }
  