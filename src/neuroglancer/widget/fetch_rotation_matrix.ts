import {WatchableCoordinateSpaceTransform} from 'neuroglancer/coordinate_transform';
import {StatusMessage} from 'neuroglancer/status';
import {RefCounted} from 'neuroglancer/util/disposable';
import {removeFromParent} from 'neuroglancer/util/dom';
import {fetchOk} from 'neuroglancer/util/http_request';
import {dimensionTransform} from 'neuroglancer/util/matrix';
import {makeIcon} from 'neuroglancer/widget/icon';
import {AppSettings} from 'neuroglancer/services/service';

const pattern_animal = /precomputed:\/\/https:\/\/activebrainatlas.ucsd.edu\/data\/([A-Z0-9]+)\//g;
const buttonText = 'Fetch rotation matrix';
const buttonTitle = 'Please note that the rotation matrix will only be applied for the current layer. To rotate other layers, switch to that layer and click this button.';

interface RemoteRotationMatrix {
  rotation: Array<Array<any>>;
  translation: Array<Array<any>>;
}

interface RotationInfo {
  prep_id: string;
  input_type: string;
  person_id: number;
  username: string;
  count?: number;
}

export class FetchRotationMatrixWidget extends RefCounted{
  element: HTMLElement;
  private animalSelection: HTMLSelectElement;
  private animalSelectionDefault: HTMLSelectElement;
  private fetchButton: HTMLElement;
  private transform: WatchableCoordinateSpaceTransform;
  private url: string|null = null;

  constructor() {
    super();

    this.animalSelectionDefault = document.createElement('select');
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Loading brains';
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    this.animalSelectionDefault.add(defaultOption);
    this.animalSelection = this.animalSelectionDefault;

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
      for(var i = 0; i < this.animalSelection.options.length; i++) {
        const optionVal = this.animalSelection.options[i].value;
        if (optionVal.indexOf(animal) == 0) {
          this.animalSelection.value = optionVal;
          break;
        }
      }
    }
  }

  async setUpAnimalList() {
    const url = `${AppSettings.API_ENDPOINT}/rotations`;
    try {
      const response:Array<RotationInfo> = await fetchOk(url, {
        method: 'GET',
      }).then(response => {
        return response.json();
      });

      const animalSelectionFetched = document.createElement('select');
      const defaultOption = document.createElement('option');
      defaultOption.text = 'Select brain';
      defaultOption.value = '';
      defaultOption.disabled = true;
      defaultOption.selected = true;
      animalSelectionFetched.add(defaultOption);

      response.forEach(info => {
        const {prep_id, input_type, person_id, username, count} = info;
        var option = document.createElement('option');
        option.value = `${prep_id}/${input_type}/${person_id}`;
        option.text = `${prep_id} ${input_type} ${username}`;
        option.text += count? (count > 1)? ` - ${count} structures`: ` - ${count} structure`: ``;
        animalSelectionFetched.add(option);
      });

      const newElement = document.createElement('div');
      newElement.appendChild(animalSelectionFetched);
      newElement.appendChild(this.fetchButton)
      this.element.parentNode?.replaceChild(newElement, this.element);
      this.animalSelection = animalSelectionFetched;
      this.matchURL();
    } catch (err) {
      StatusMessage.showTemporaryMessage('Failed to load the list of brains to align. Please try later.');
    }
  }

  async fetchRotationMatrix() {
    const selection = this.animalSelection.value;
    if (!selection) {
      StatusMessage.showTemporaryMessage('Please select the name of the current brain.');
      return;
    }
    const rotationURL = `${AppSettings.API_ENDPOINT}/rotation/${selection}`;

    StatusMessage.showTemporaryMessage(`Fetching rotation matrix for ${selection}`);

    try {
      const rotationJSON:RemoteRotationMatrix = await fetchOk(rotationURL, {
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
      StatusMessage.showTemporaryMessage(`Fetched rotation matrix for ${selection}`);
    } catch (e) {
      StatusMessage.showTemporaryMessage('Unable to get rotation matirx.');
      throw e;
    }
  }
}