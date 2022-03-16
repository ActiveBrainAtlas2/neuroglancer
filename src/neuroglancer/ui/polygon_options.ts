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
 
  export class PolygonOptionsDialog extends Overlay {
    sectionOffsetTextEle: HTMLInputElement
    scalePolygonTextEle: HTMLInputElement
    rotatePolygonTextEle: HTMLInputElement
    constructor() {
      super();
      
      const configTable = document.createElement('table');
      configTable.caption = configTable.createCaption();
      configTable.caption.innerHTML = "<h2>Polygon configuration</h2>";

      const coleGroupRow = this.getColGroupRow();
      const cloneConfigRow = this.getCloneConfigRow();
      const scaleConfigRow = this.getScaleConfigRow();
      const rotateConfigRow = this.getRotateConfigRow();

      configTable.appendChild(coleGroupRow);
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
          const msg = new StatusMessage();
          msg.setErrorMessage("Enter valid values for polygon config");
          return;
        }
        if (scaleVal < 0 || scaleVal > 99) {
          const msg = new StatusMessage();
          msg.setErrorMessage("Enter a scale percentage between 0 and 99");
          return;
        }
        if (rotateVal < 0 || rotateVal > 360) {
          const msg = new StatusMessage();
          msg.setErrorMessage("Enter an angle between 0° and 360°");
          return;
        }
        polygonScalePercentage.value = scaleVal;
        polygonRotateAngle.value = rotateVal;
        polygonSectionOffset.value = offsetVal;

        this.dispose();
      });

      this.content.appendChild(configTable);
      this.content.appendChild(submitButton);
    }

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
  }
  