import {WatchableCoordinateSpaceTransform} from 'neuroglancer/coordinate_transform';
import {StatusMessage} from 'neuroglancer/status';
import {RefCounted} from 'neuroglancer/util/disposable';
import {removeFromParent} from 'neuroglancer/util/dom';
import {fetchOk} from 'neuroglancer/util/http_request';
import {dimensionTransform} from 'neuroglancer/util/matrix';
import {makeIcon} from 'neuroglancer/widget/icon';
import {AppSettings} from 'neuroglancer/services/service';

const rotationMatrixURL = `${AppSettings.API_ENDPOINT}/alignatlas?animal=`;
const pattern_animal = /precomputed:\/\/https:\/\/activebrainatlas.ucsd.edu\/data\/([A-Z0-9]+)\//g;
const buttonText = 'Fetch rotation matrix';
const buttonTitle = 'Please note that the rotation matrix will only be applied for the current layer. To rotate other layers, switch to that layer and click this button.';

interface remoteRotationMatrix {
  rotation: Array<Array<any>>;
  translation: Array<Array<any>>;
}

export class FetchRotationMatrixWidget extends RefCounted{
  element: HTMLElement;
  animalSelection: HTMLSelectElement;
  animalSelectionDefault: HTMLSelectElement;
  fetchButton: HTMLElement;
  animal: string|null = null;

  constructor(public transform: WatchableCoordinateSpaceTransform, private url: string) {
    super();
    this.transform = transform;
    this.url = url;
    this.animal = null;

    const animalSelectionDefault = document.createElement('select');
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Loading brains';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    animalSelectionDefault.add(defaultOption);
    this.animalSelection = animalSelectionDefault;

    this.setUpAnimalList();

    this.fetchButton = makeIcon({
      text: buttonText,
      title: buttonTitle,
      onClick: () => {this.fetchRotationMatrix()},
    });

    this.element = document.createElement('div');
    this.element.appendChild(this.animalSelection);
    this.element.appendChild(this.fetchButton)

    this.registerDisposer(() => removeFromParent(this.element));
  };

  async setUpAnimalList() {
    const url = `${AppSettings.API_ENDPOINT}/animals`;
    try {
      const response:Array<any> = await fetchOk(url, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });
      const animalNames = response.map(m => m['prep_id']);

      const animalSelectionFetched = document.createElement('select');
      const defaultOption = document.createElement('option');
      defaultOption.text = 'Select brain';
      defaultOption.disabled = true;
      defaultOption.selected = true;
      animalSelectionFetched.add(defaultOption);

      animalNames.forEach(animal => {
        const option = document.createElement('option');
        option.value = animal;
        option.text = animal;
        animalSelectionFetched.add(option);
      });

      const urlNameMatches = [...this.url.matchAll(pattern_animal)];
      const urlNames = [...new Set(urlNameMatches.map(m => m[1]))];
      if (urlNames.length === 1) {
        this.animal = urlNames[0];
        defaultOption.selected = false;
        animalSelectionFetched.value = this.animal;
      }

      const newElement = document.createElement('div');
      newElement.appendChild(animalSelectionFetched);
      newElement.appendChild(this.fetchButton)
      this.element.parentNode?.replaceChild(newElement, this.element);
      this.animalSelection = animalSelectionFetched;
    } catch (err) {
      StatusMessage.showTemporaryMessage('Failed to load the list of animals to align, please refresh.');
    }
  }

  async fetchRotationMatrix() {
    const animal = this.animalSelection.value;
    StatusMessage.showTemporaryMessage('Fetching rotation matrix for ' + animal);

    try {
      const rotationJSON:remoteRotationMatrix = await fetchOk(rotationMatrixURL + animal, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });
      const {rotation, translation} = rotationJSON;

      const rank = this.transform.value.rank;
      const newTransform = Float64Array.from([
        rotation[0][0], rotation[1][0], rotation[2][0], 0,
        rotation[0][1], rotation[1][1], rotation[2][1], 0,
        rotation[0][2], rotation[1][2], rotation[2][2], 0,
        translation[0][0], translation[1][0], translation[2][0], 1,
      ])
      this.transform.transform = dimensionTransform(newTransform, rank);
      StatusMessage.showTemporaryMessage('Fetched rotation matrix for ' + animal);
    } catch (e) {
      StatusMessage.showTemporaryMessage('Unable to get rotation matirx.');
      throw e;
    }
  }
}