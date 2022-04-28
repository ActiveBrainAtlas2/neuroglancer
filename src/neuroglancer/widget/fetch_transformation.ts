import {WatchableCoordinateSpaceTransform} from 'neuroglancer/coordinate_transform';
import {StatusMessage} from 'neuroglancer/status';
import {RefCounted} from 'neuroglancer/util/disposable';
import {removeFromParent} from 'neuroglancer/util/dom';
import {fetchOk} from 'neuroglancer/util/http_request';
import {dimensionTransform} from 'neuroglancer/util/matrix';
import {makeIcon} from 'neuroglancer/widget/icon';
import {AppSettings} from 'neuroglancer/services/service';
import { updateCoordinateSpaceScaleValues } from './coordinate_transform';

const pattern_animal = /precomputed:\/\/https:\/\/activebrainatlas.ucsd.edu\/data\/([A-Z0-9]+)\//g;
const buttonText = 'Align stack to atlas';
const stackButtonText = 'Align atlas to stack';
const buttonTitle = 'The transformation will only be applied on the current layer.';

interface TransformJSON {
  rotation: Array<Array<number>>;
  translation: Array<Array<number>>;
  resolution: Array<number>; // in microns
}

interface TransformInfo {
  prep_id: string;
  input_type: string;
  owner_id: number;
  username: string;
  count?: number;
}

export class FetchTransformationWidget extends RefCounted{
  element: HTMLElement;
  private transformSelection: HTMLSelectElement;
  private transformSelectionDefault: HTMLSelectElement;
  private fetchButton: HTMLElement;
  private fetchStackButton: HTMLElement;
  private transform: WatchableCoordinateSpaceTransform;
  private url: string|null = null;

  constructor() {
    super();

    this.transformSelectionDefault = document.createElement('select');
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Loading transformations';
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    this.transformSelectionDefault.add(defaultOption);
    this.transformSelection = this.transformSelectionDefault;

    this.setUpTransformList();

    this.fetchButton = makeIcon({
      text: buttonText,
      title: buttonTitle,
      onClick: () => {this.applyTransformation()},
    });

    this.fetchStackButton = makeIcon({
      text: stackButtonText,
      title: buttonTitle,
      onClick: () => {this.applyStackTransformation()},
    });

    this.element = document.createElement('div');
    this.element.appendChild(this.transformSelection);
    this.element.appendChild(this.fetchButton)
    this.element.appendChild(this.fetchStackButton)

    this.registerDisposer(() => removeFromParent(this.element));
  }

  public display(transform: WatchableCoordinateSpaceTransform, url: string) {
    this.transform = transform;
    this.url = url;
    this.matchURL();
    this.element.style.removeProperty('display');
  }

  public hide() {
    this.element.style.display = 'none';
  }

  private matchURL() {
    if (!this.url) {
      return;
    }
    const urlNameMatches = [...this.url.matchAll(pattern_animal)];
    const urlNames = [...new Set(urlNameMatches.map(m => m[1]))];
    if (urlNames.length === 1) {
      const animal = urlNames[0];
      for(let i = 0; i < this.transformSelection.options.length; i++) {
        const optionVal = this.transformSelection.options[i].value;
        if (optionVal.indexOf(animal) == 0) {
          this.transformSelection.value = optionVal;
          break;
        }
      }
    }
  }

  async setUpTransformList() {
    const url = `${AppSettings.API_ENDPOINT}/rotations`;
    try {
      const response:Array<TransformInfo> = await fetchOk(url, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });

      const transformSelectionFetched = document.createElement('select');
      const defaultOption = document.createElement('option');
      defaultOption.text = 'Select transformation';
      defaultOption.value = '';
      defaultOption.disabled = true;
      defaultOption.selected = true;
      transformSelectionFetched.add(defaultOption);

      response.forEach(info => {
        const {prep_id, input_type, owner_id, username, count} = info;
        const option = document.createElement('option');
        option.value = `${prep_id}/${input_type}/${owner_id}`;
        option.text = `${prep_id} ${input_type} ${username}`;
        option.text += count? (count > 1)? ` - ${count} structures`: ` - ${count} structure`: ``;
        transformSelectionFetched.add(option);
      });

      const newElement = document.createElement('div');
      newElement.appendChild(transformSelectionFetched);
      newElement.appendChild(this.fetchButton)
      newElement.appendChild(this.fetchStackButton)
      this.element.parentNode?.replaceChild(newElement, this.element);
      this.transformSelection = transformSelectionFetched;
      this.matchURL();
    } catch (err) {
      StatusMessage.showTemporaryMessage('Failed to load the list of transformations. Please try later.');
    }
  }

  async applyTransformation() {
    const selection = this.transformSelection.value;
    if (!selection) {
      StatusMessage.showTemporaryMessage('Please select the transformation to apply.');
      return;
    }
    const selectionName = this.transformSelection.options[this.transformSelection.selectedIndex].text;
    const transformURL = `${AppSettings.API_ENDPOINT}/rotation/${selection}`;

    StatusMessage.showTemporaryMessage(`Fetching transformation: ${selectionName}`);

    try {
      const transformJSONResolution:TransformJSON = await fetchOk(transformURL, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });
      const {resolution} = transformJSONResolution;

      const transformJSON:TransformJSON = await fetchOk(`${transformURL}/${resolution}`, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });

      const {translation, rotation} = transformJSON;

      const rank = this.transform.value.rank;
      const newTransform = Float64Array.from([
        rotation[0][0], rotation[1][0], rotation[2][0], 0,
        rotation[0][1], rotation[1][1], rotation[2][1], 0,
        rotation[0][2], rotation[1][2], rotation[2][2], 0,
        translation[0][0], translation[1][0], translation[2][0], 1,
      ]);
      const scalesAndUnits : {scale: number; unit: string;}[] = resolution.map(x => {
        return {scale: x*1e-6, unit: 'm'}
      });
      const modified = new Array<boolean>(rank);
      modified[0] = true;
      modified[1] = true;
      modified[2] = true;

      this.transform.transform = dimensionTransform(newTransform, rank);
      updateCoordinateSpaceScaleValues(scalesAndUnits, modified, this.transform.inputSpace);
      StatusMessage.showTemporaryMessage(`Transformation applied: ${selectionName}`);
    } catch (e) {
      StatusMessage.showTemporaryMessage('Unable to fetch the transformation.');
      throw e;
    }
  }

  async applyStackTransformation() {
    const selection = this.transformSelection.value;
    if (!selection) {
      StatusMessage.showTemporaryMessage('Please select the transformation to apply.');
      return;
    }
    const selectionName = this.transformSelection.options[this.transformSelection.selectedIndex].text;
    const transformURL = `${AppSettings.API_ENDPOINT}/rotation/${selection}/1`;

    StatusMessage.showTemporaryMessage(`Fetching stack transformation: ${selectionName}`);

    try {
      const transformJSONResolution:TransformJSON = await fetchOk(transformURL, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });
      const {resolution} = transformJSONResolution;

      const transformJSON:TransformJSON = await fetchOk(`${transformURL}/${resolution}`, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });

      const {translation, rotation} = transformJSON;

      const rank = this.transform.value.rank;
      const newTransform = Float64Array.from([
        rotation[0][0], rotation[1][0], rotation[2][0], 0,
        rotation[0][1], rotation[1][1], rotation[2][1], 0,
        rotation[0][2], rotation[1][2], rotation[2][2], 0,
        translation[0][0], translation[1][0], translation[2][0], 1,
      ])
      const scalesAndUnits : {scale: number; unit: string;}[] = resolution.map(x => {
        return {scale: x*1e-6, unit: 'm'}
      });
      const modified = new Array<boolean>(rank);
      modified[0] = true;
      modified[1] = true;
      modified[2] = true;

      this.transform.transform = dimensionTransform(newTransform, rank);
      updateCoordinateSpaceScaleValues(scalesAndUnits, modified, this.transform.inputSpace);
      StatusMessage.showTemporaryMessage(`Stack transformation applied: ${selectionName}`);
    } catch (e) {
      StatusMessage.showTemporaryMessage('Unable to fetch the transformation.');
      throw e;
    }
  }
}