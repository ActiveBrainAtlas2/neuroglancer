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
import { AnnotationLayerView, getLandmarkList, PlaceComTool, COMSession, ComToolMode } from './annotations';
 
 import './com_session.css';
 
  export class ComSessionDialog extends Overlay {
    landmarkDropdown : HTMLSelectElement|undefined = undefined;
    colorInput: HTMLInputElement|undefined = undefined;
    constructor(public annotationLayerView: AnnotationLayerView) {
      super();
      
      const configTable = document.createElement('table');
      configTable.caption = configTable.createCaption();
      configTable.caption.innerHTML = "<h2>com session</h2>";

      const comInfoRows = this.getComInfoRows();
      const newComRow = this.getNewComRow();
      const editComRow = this.getEditComRow();
      const closeSessionRow = this.closeSessionRow();

      comInfoRows.forEach(comInfoRow => {
        configTable.appendChild(comInfoRow);
      });
      configTable.appendChild(newComRow);
      configTable.appendChild(editComRow);
      configTable.appendChild(closeSessionRow);
      configTable.classList.add('com-session-table');

      this.content.appendChild(configTable);
    }

    getNewComRow() : HTMLTableRowElement {
      const row = document.createElement('tr');
      const col = document.createElement('td');
      col.style.textAlign = 'center';
      col.colSpan = 2;
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.textContent = 'Start a new centre of mass';
      button.addEventListener('click', () => {
        let color = (this.colorInput)? this.colorInput.value : undefined;
        let description = (this.landmarkDropdown)? this.landmarkDropdown.options[this.landmarkDropdown.selectedIndex].value : undefined;
        this.annotationLayerView.layer.tool.value = new PlaceComTool(this.annotationLayerView.layer, {}, 
          undefined, ComToolMode.DRAW, this.annotationLayerView.comSession, this.annotationLayerView.comButton);
        const comTool = <PlaceComTool>this.annotationLayerView.layer.tool.value;
        comTool.session.value = <COMSession>{label: description, color: color};
        this.dispose();
      });
      button.classList.add('com-session-btn');

      col.appendChild(button);
      row.appendChild(col);
      return row;
    }

    getComInfoRows() : HTMLTableRowElement[] {
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

    getEditComRow() : HTMLTableRowElement {
      const row = document.createElement('tr');
      const col = document.createElement('td');
      col.style.textAlign = 'center';
      col.colSpan = 2;
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.textContent = 'Edit centre of mass';
      button.addEventListener('click', () => {
        this.annotationLayerView.layer.tool.value = new PlaceComTool(this.annotationLayerView.layer, {}, 
          undefined, ComToolMode.EDIT, this.annotationLayerView.comSession, this.annotationLayerView.comButton);
        const comTool = <PlaceComTool>this.annotationLayerView.layer.tool.value;
        comTool.session.value = <COMSession>{label: undefined, color: undefined};
        this.dispose();
      });
      button.classList.add('com-session-btn');

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
        const isInstance = this.annotationLayerView.layer.tool.value instanceof PlaceComTool;
        if (isInstance) {
          this.annotationLayerView.layer.tool.value!.registerDisposer(() => {
            this.dispose();
          });
          this.annotationLayerView.layer.tool.value!.registerDisposer(() => {
            const iconDiv = (<PlaceComTool>this.annotationLayerView.layer.tool.value!).icon.value;
            if (iconDiv === undefined) return;
            iconDiv.style.backgroundColor = '';
          });
          this.annotationLayerView.layer.tool.value!.dispose();
        } else {
          this.dispose();
        }
      });
      button.classList.add('com-session-btn');

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
  }
  