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
import { AnnotationLayerView, getLandmarkList, PlaceCellTool, CellSession, CellToolMode, getCategoryList } from './annotations';
 
 import './cell_session.css';
import { LegacyTool } from './tool';
  /**
   * Cell session for annotation cells.
   */
  export class CellSessionDialog extends Overlay {
    /** Landmark for cell */
    landmarkDropdown : HTMLSelectElement|undefined = undefined;
    /** Category of cell, eg: positive/negative */
    categoryDropdown : HTMLSelectElement|undefined = undefined;
    colorInput: HTMLInputElement|undefined = undefined;
    constructor(public annotationLayerView: AnnotationLayerView) {
      super();
      
      const configTable = document.createElement('table');
      configTable.caption = configTable.createCaption();
      configTable.caption.innerHTML = "<h2>cell session</h2>";

      const cellInfoRows = this.getCellInfoRows();
      const newCellRow = this.getNewCellRow();
      const editCellRow = this.getEditCellRow();
      const closeSessionRow = this.closeSessionRow();

      cellInfoRows.forEach(cellInfoRow => {
        configTable.appendChild(cellInfoRow);
      });
      configTable.appendChild(newCellRow);
      configTable.appendChild(editCellRow);
      configTable.appendChild(closeSessionRow);
      configTable.classList.add('cell-session-table');

      this.content.appendChild(configTable);
    }
    /**
     * 
     * @returns A table row element containing option to start a new cell session.
     */
    getNewCellRow() : HTMLTableRowElement {
      const row = document.createElement('tr');
      const col = document.createElement('td');
      col.style.textAlign = 'center';
      col.colSpan = 2;
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.textContent = 'Start a new cell';
      button.addEventListener('click', () => {
        let color = (this.colorInput)? this.colorInput.value : undefined;
        let description = (this.landmarkDropdown)? this.landmarkDropdown.options[this.landmarkDropdown.selectedIndex].value : undefined;
        let category = (this.categoryDropdown)? this.categoryDropdown.options[this.categoryDropdown.selectedIndex].value : undefined;
        this.annotationLayerView.layer.tool.value = new PlaceCellTool(this.annotationLayerView.layer, {}, 
          undefined, CellToolMode.DRAW, this.annotationLayerView.cellSession, this.annotationLayerView.cellButton);
        const cellTool = <PlaceCellTool>this.annotationLayerView.layer.tool.value;
        cellTool.session.value = <CellSession>{label: description, color: color, category: category};
        this.dispose();
      });
      button.classList.add('cell-session-btn');

      col.appendChild(button);
      row.appendChild(col);
      return row;
    }
    /**
     * 
     * @returns A table row element containing landmark and category dropdown elements.
     */
    getCellInfoRows() : HTMLTableRowElement[] {
      const labelRow = document.createElement('tr');
      const labelDesc = document.createElement('td');
      labelDesc.textContent = "Description: ";
      const landmarkCol = document.createElement('td');
      const landmarkDropdown = this.getLandMarkDropDown();
      landmarkCol.appendChild(landmarkDropdown);
      labelRow.appendChild(labelDesc);
      labelRow.appendChild(landmarkCol);

      const categoryRow = document.createElement('tr');
      const categoryDesc = document.createElement('td');
      categoryDesc.textContent = "Category: ";
      const categoryCol = document.createElement('td');
      const categoryDropdown = this.getCategoryDropDown();
      categoryCol.appendChild(categoryDropdown);
      categoryRow.appendChild(categoryDesc);
      categoryRow.appendChild(categoryCol);

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
      this.categoryDropdown = categoryDropdown;
      this.colorInput = colorInput;

      return [labelRow, categoryRow, colorRow];
    }
    /**
     * 
     * @returns A table row element containing functionality to start a cell edit session.
     */
    getEditCellRow() : HTMLTableRowElement {
      const row = document.createElement('tr');
      const col = document.createElement('td');
      col.style.textAlign = 'center';
      col.colSpan = 2;
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.textContent = 'Edit cells';
      button.addEventListener('click', () => {
        this.annotationLayerView.layer.tool.value = new PlaceCellTool(this.annotationLayerView.layer, {}, 
          undefined, CellToolMode.EDIT, this.annotationLayerView.cellSession, this.annotationLayerView.cellButton);
        const cellTool = <PlaceCellTool>this.annotationLayerView.layer.tool.value;
        cellTool.session.value = <CellSession>{label: undefined, color: undefined};
        this.dispose();
      });
      button.classList.add('cell-session-btn');

      col.appendChild(button);
      row.appendChild(col);
      return row;
    }
    /**
     * 
     * @returns A table row element with functionality to close current active session.
     */
    closeSessionRow() : HTMLTableRowElement {
      const row = document.createElement('tr');
      const col = document.createElement('td');
      col.style.textAlign = 'center';
      col.colSpan = 2;
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.textContent = 'Close current active session';
      button.addEventListener('click', () => {
        const isInstance = this.annotationLayerView.layer.tool.value instanceof PlaceCellTool;
        if (isInstance) {
          if (this.annotationLayerView.layer.tool.value  instanceof LegacyTool) {
            this.annotationLayerView.layer.tool.value.layer.tool.value = undefined;
          }
          this.dispose();
        }
      });
      button.classList.add('cell-session-btn');

      col.appendChild(button);
      row.appendChild(col);
      return row;
    }
    /**
     * 
     * @returns Returns a select tag element with information about landmark of cells.
     */
    getLandMarkDropDown() : HTMLSelectElement {
      const landmarkDropdown = document.createElement('select');
      landmarkDropdown.classList.add('neuroglancer-landmarks-dropdown');
      const defaultOption = document.createElement('option');
      defaultOption.text = 'Select label';
      defaultOption.value = '';
      defaultOption.disabled = true;
      defaultOption.selected = true;
      landmarkDropdown.add(defaultOption);
      getLandmarkList(AnnotationType.CELL).then(function(result) {
        const n_landmark = result.length
        for (let i = 0; i < n_landmark; i++){
          const landmarki = result[i];
          const option = document.createElement('option');
          option.value = landmarki; 
          option.text = landmarki;
          landmarkDropdown.add(option);
        }
      });
      return landmarkDropdown;
    }
    /**
     * 
     * @returns Returns a select HTML element containing cell category information (eg: positive, negative etc)
     */
    getCategoryDropDown() : HTMLSelectElement {
      const landmarkDropdown = document.createElement('select');
      landmarkDropdown.classList.add('neuroglancer-landmarks-dropdown');
      const defaultOption = document.createElement('option');
      defaultOption.text = 'Select category';
      defaultOption.value = '';
      defaultOption.disabled = true;
      defaultOption.selected = true;
      landmarkDropdown.add(defaultOption);
      getCategoryList().then(function(result) {
        const n_landmark = result.length
        for (let i = 0; i < n_landmark; i++){
          const landmarki = result[i];
          const option = document.createElement('option');
          option.value = landmarki; 
          option.text = landmarki;
          landmarkDropdown.add(option);
        }
      });
      return landmarkDropdown;
    }
  }
  