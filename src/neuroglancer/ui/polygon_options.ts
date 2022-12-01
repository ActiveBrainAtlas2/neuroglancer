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
 import { polygonRotateAngle, polygonSectionOffset, polygonScalePercentage } from '../annotation/polygon';
 import { StatusMessage } from '../status';
 import './polygon_options.css';

 /**
  * Interface to show the each of polygon's features: function, feature 
  * and in which mode the feature/function is available.
  */
  interface PolygonControlSheetEntry {
    function: string,
    control: string,
    mode: string,
  };

  export const polygonDocLink = "https://github.com/ActiveBrainAtlas2/neuroglancer/wiki/Neuroglancer-Contour-Annotations-Documentation";
  export const polygonControlSheet : PolygonControlSheetEntry[] = [
    {
      function: "draw polygon vertex",
      control: "left mouse click",
      mode: "draw"
    },
    {
      function: "close polygon",
      control: "right mouse click",
      mode: "draw"
    },
    {
      function: "undo last vertex",
      control: "key z",
      mode: "draw"
    },
    {
      function: "edit polygon vertex",
      control: "left mouse click",
      mode: "edit"
    },
    {
      function: "add vertex to polygon",
      control: "control+alt+left mouse click",
      mode: "edit"
    },
    {
      function: "delete vertex of polygon",
      control: "control+alt+right mouse click",
      mode: "edit"
    },
    {
      function: "select polygon",
      control: "control+right mouse click",
      mode: "draw/edit/view"
    },
    {
      function: "translate polygon",
      control: "shift+left mouse click",
      mode: "edit"
    },
    {
      function: "clone polygon",
      control: "control+c (polygon needs to be selected first)",
      mode: "draw/edit"
    },
    {
      function: "rotate polygon",
      control: "key r / key e (polygon needs to be selected first)",
      mode: "edit"
    },
    {
      function: "scale polygon",
      control: "control+'+' / control+'-' (polygon needs to be selected first)",
      mode: "edit"
    },
    {
      function: "switch edit/view -> draw mode",
      control: "control+z",
      mode: "edit/view"
    },
    {
      function: "switch draw/view -> edit mode",
      control: "control+x",
      mode: "draw/view"
    },
    {
      function: "switch draw -> view mode",
      control: "control+z",
      mode: "draw"
    },
    {
      function: "switch edit -> view mode",
      control: "control+x",
      mode: "edit"
    }
  ];
  
  /**
   * This class is used to create HTML element for displaying polygon configuration
   * and polygon controls.
   */
  export class PolygonOptionsDialog extends Overlay {
    /** sectionOffsetTextEle contains clone offset related info */
    sectionOffsetTextEle: HTMLInputElement
    /** Contains scale percentage in each scale opeartion */
    scalePolygonTextEle: HTMLInputElement
    /** Contains rotation amount in each rotate opeartion */
    rotatePolygonTextEle: HTMLInputElement
    constructor() {
      super();
      
      const configTable = document.createElement('table');
      configTable.classList.add('neuroglancer-polygon-options-config-table');
      configTable.caption = configTable.createCaption();
      configTable.caption.innerHTML = "<h2>Polygon configuration</h2>";

      // const coleGroupRow = this.getColGroupRow();
      const cloneConfigRow = this.getCloneConfigRow();
      const scaleConfigRow = this.getScaleConfigRow();
      const rotateConfigRow = this.getRotateConfigRow();

      // configTable.appendChild(coleGroupRow);
      configTable.appendChild(cloneConfigRow);
      configTable.appendChild(scaleConfigRow);
      configTable.appendChild(rotateConfigRow);

      const submitButton = document.createElement('button');
      submitButton.setAttribute('type', 'button');
      submitButton.textContent = "Save changes";
      submitButton.addEventListener('click', () => {
        const offsetVal = parseInt(this.sectionOffsetTextEle.value);
        const scaleVal = parseFloat(this.scalePolygonTextEle.value);
        const rotateVal = parseFloat(this.rotatePolygonTextEle.value);
        if (isNaN(offsetVal) || isNaN(scaleVal) || isNaN(rotateVal)) {
          StatusMessage.showTemporaryMessage("Enter valid values for polygon config");
          return;
        }
        if (scaleVal < 0 || scaleVal > 99) {
          StatusMessage.showTemporaryMessage("Enter a scale percentage between 0 and 99");
          return;
        }
        if (rotateVal < 0 || rotateVal > 360) {
          StatusMessage.showTemporaryMessage("Enter an angle between 0° and 360°");
          return;
        }
        polygonScalePercentage.value = scaleVal;
        polygonRotateAngle.value = rotateVal;
        polygonSectionOffset.value = offsetVal;

        this.dispose();
      });

      const cheatSheetTable = this.getCheatSheetTable();

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('neuroglancer-polygon-options-content');
      contentDiv.appendChild(configTable);
      contentDiv.appendChild(submitButton);
      contentDiv.appendChild(cheatSheetTable);

      const closeButton = document.createElement('button');
      closeButton.innerText = 'X';
      closeButton.classList.add('close-btn');
      closeButton.addEventListener('click', () => {
        this.dispose();
      });

      this.content.appendChild(contentDiv);
      this.content.appendChild(closeButton);
    }
    /**
     * 
     * @returns Returns the elements of this table in a column format.
     */
    getColGroupRow() : HTMLTableColElement {
      const element = document.createElement('colgroup');
      const widthVals = [180];
      for (let width of widthVals) {
        const colElement = document.createElement('col');
        colElement.setAttribute('span', '1');
        colElement.setAttribute('width', width.toString() + 'px');
        element.appendChild(colElement);
      }
      return element;
    }
    /**
     * 
     * @returns Returns a table row element containing information about
     * the clone offset.
     */
    getCloneConfigRow() : HTMLTableRowElement {
      const element = document.createElement('tr');

      const descCell = document.createElement('td');
      descCell.textContent = "Clone section offset: "

      const inputCell = document.createElement('td');
      const sectionOffsetEle :HTMLInputElement = document.createElement('input');
      sectionOffsetEle.setAttribute('type', 'number');
      this.sectionOffsetTextEle = sectionOffsetEle;
      inputCell.appendChild(sectionOffsetEle);

      const resetCell = document.createElement('td');
      const resetButton = document.createElement('button');
      resetButton.setAttribute('type', 'button');
      resetButton.textContent = 'Reset to default';
      resetButton.addEventListener('click', () => {
        polygonSectionOffset.reset();
        sectionOffsetEle.value = polygonSectionOffset.value.toString();
      });
      sectionOffsetEle.value = polygonSectionOffset.value.toString();
      resetCell.appendChild(resetButton);

      element.appendChild(descCell);
      element.appendChild(inputCell);
      element.appendChild(resetCell);

      return element;
    }
    /**
     * 
     * @returns Returns a row containing information about polygon scaling information.
     */
    getScaleConfigRow() : HTMLTableRowElement {
      const element = document.createElement('tr');

      const descCell = document.createElement('td');
      descCell.append("Scale factor: [0-99]%");
      // const scalePercentEle = document.createElement('text');
      // scalePercentEle.textContent = polygonScalePercentage.value.toString() + '%';
      // descCell.appendChild(scalePercentEle);

      const inputCell = document.createElement('td');
      const scaleFactorSlider :HTMLInputElement = document.createElement('input');
      scaleFactorSlider.setAttribute('type', 'number');
      // scaleFactorSlider.setAttribute('min', '0.0');
      // scaleFactorSlider.setAttribute('max', '99.0');
      // scaleFactorSlider.setAttribute('step', '1.0');
      // scaleFactorSlider.addEventListener('input', () => {
      //   scalePercentEle.textContent = scaleFactorSlider.value + '%';
      // });
      this.scalePolygonTextEle = scaleFactorSlider;
      inputCell.appendChild(scaleFactorSlider);

      const resetCell = document.createElement('td');
      const resetButton = document.createElement('button');
      resetButton.setAttribute('type', 'button');
      resetButton.textContent = 'Reset to default';
      resetButton.addEventListener('click', () => {
        polygonScalePercentage.reset();
        scaleFactorSlider.value = polygonScalePercentage.value.toString();
        // scalePercentEle.textContent = polygonScalePercentage.value.toString() + '%';
      });
      scaleFactorSlider.value = polygonScalePercentage.value.toString();
      // scalePercentEle.textContent = polygonScalePercentage.value.toString() + '%';
      resetCell.appendChild(resetButton);

      element.appendChild(descCell);
      element.appendChild(inputCell);
      element.appendChild(resetCell);

      return element;
    }
    /**
     * 
     * @returns Returns a row element containing information about rotation of polygon.
     */
    getRotateConfigRow() : HTMLTableRowElement {
      const element = document.createElement('tr');

      const descCell = document.createElement('td');
      descCell.append('Rotate angle: [0-360]°');
      // const rotateAngleEle = document.createElement('text');
      // rotateAngleEle.textContent = polygonRotateAngle.value.toString() + '°';
      // descCell.appendChild(rotateAngleEle);

      const inputCell = document.createElement('td');
      const rotateFactorSlider :HTMLInputElement = document.createElement('input');
      rotateFactorSlider.setAttribute('type', 'number');
      // rotateFactorSlider.setAttribute('min', '0.0');
      // rotateFactorSlider.setAttribute('max', '360.0');
      // rotateFactorSlider.setAttribute('step', '1.0');
      // rotateFactorSlider.addEventListener('input', () => {
      //   rotateAngleEle.textContent = rotateFactorSlider.value + '°';
      // });
      this.rotatePolygonTextEle = rotateFactorSlider;
      inputCell.appendChild(rotateFactorSlider);

      const resetCell = document.createElement('td');
      const resetButton = document.createElement('button');
      resetButton.setAttribute('type', 'button');
      resetButton.textContent = 'Reset to default';
      resetButton.addEventListener('click', () => {
        polygonRotateAngle.reset();
        rotateFactorSlider.value = polygonRotateAngle.value.toString();
        // rotateAngleEle.textContent = polygonRotateAngle.value.toString() + '°';
      });
      rotateFactorSlider.value = polygonRotateAngle.value.toString();
      // rotateAngleEle.textContent = polygonRotateAngle.value.toString() + '°';
      resetCell.appendChild(resetButton);

      element.appendChild(descCell);
      element.appendChild(inputCell);
      element.appendChild(resetCell);

      return element;
    }
    /**
     * 
     * @returns Returns a cheat sheet table HTML element containing the 
     * list of polygon controls
     */
    getCheatSheetTable() : HTMLTableElement {
      const table = document.createElement('table');
      table.classList.add('neuroglancer-polygon-control-sheet');
      table.caption = table.createCaption();
      const headerElement = document.createElement('h2');
      headerElement.innerHTML = `Polygon controls sheet <a href="${polygonDocLink}" target="_blank">[Wiki]</a>`;
      const printElement = document.createElement('a');
      printElement.setAttribute('target', '_blank');
      printElement.setAttribute('href', '#');
      printElement.innerText = '[Print]';
      printElement.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const printWindow = window.open();
        if (!printWindow) return;
        printWindow.document.write('<html><head><title>Polygon Controls Sheet</title>');
 
        //Print the Table CSS.
        printWindow.document.write('<style type = "text/css">');
        printWindow.document.write(
          `.neuroglancer-polygon-control-sheet td, th{
              border: 1px solid #dddddd;
              text-align: left;
              padding: 8px;
          }
          
          .neuroglancer-polygon-control-sheet {
              width: 100%;
          }`
        );
        printWindow.document.write('</style>');
        printWindow.document.write('</head>');

        //Print the Table HTML.
        printWindow.document.write('<body>');
        printWindow.document.write(table.outerHTML);
        printWindow.document.write('</body>');
 
        printWindow.document.write('</html>');
        printWindow.document.close();
        printWindow.print();
        return false;
      });
      headerElement.appendChild(printElement);
      table.caption.appendChild(headerElement);

      const headerRow = document.createElement('tr');
      const keyCell = document.createElement('th');
      keyCell.innerHTML = "function";
      const controlCell = document.createElement('th');
      controlCell.innerHTML = "key";
      const modeCell = document.createElement('th');
      modeCell.innerHTML = "mode";
      headerRow.appendChild(keyCell);
      headerRow.appendChild(controlCell);
      headerRow.appendChild(modeCell);

      table.appendChild(headerRow);

      for(let row = 0; row < polygonControlSheet.length; row++) {
        const rowEle = document.createElement('tr');
        const functionCell = document.createElement('td');
        functionCell.innerText = polygonControlSheet[row].function;
        const controlCell = document.createElement('td');
        controlCell.innerText = polygonControlSheet[row].control;
        const modeCell = document.createElement('td');
        modeCell.innerText = polygonControlSheet[row].mode;
        rowEle.appendChild(functionCell);
        rowEle.appendChild(controlCell);
        rowEle.appendChild(modeCell);
        table.appendChild(rowEle);
      }
      return table;
    }
  }
  