import { WatchableCoordinateSpaceTransform } from "../coordinate_transform";
import { StatusMessage } from "../status";
import { RefCounted } from "../util/disposable";
import { removeFromParent } from "../util/dom";
import { fetchOk } from "../util/http_request";
import { makeIcon } from "./icon";

const rotationMatrixURL = 'https://activebrainatlas.ucsd.edu/activebrainatlas/alignatlas?animal='
const pattern_C1 = /precomputed:\/\/https:\/\/activebrainatlas.ucsd.edu\/data\/([A-Za-z0-9]+)\/neuroglancer_data\/C1/g
const atlasURL = 'precomputed://https://activebrainatlas.ucsd.edu/data/structures/atlasV7'
const buttonText = 'Fetch rotation matrix from the Active Brain Atlas server'
const buttonTitle = 'Please ensure that exactly one C1 layer is in neuroglancer as we use it to determine which animal to match.'

interface remoteRotationMatrix {
  rotation: Array<Array<any>>,
  translation: Array<Array<any>>
}

export class FetchRotationMatrixWidget extends RefCounted{
  element: HTMLElement

  constructor(public transform: WatchableCoordinateSpaceTransform, private url: string) {
    super();
    this.transform = transform;
    this.url = url;
    if (url === atlasURL) {
      this.element = makeIcon({
        text: buttonText,
        title: buttonTitle,
        onClick: () => {this.fetchRotationMatrix()}
      });
      this.registerDisposer(() => removeFromParent(this.element));
    }
  };

  isAtlas(): boolean {
    return this.url === atlasURL;
  }

  async fetchRotationMatrix() {
    const animals = [...window.document.URL.matchAll(pattern_C1)]
    const animalNames = [...new Set(animals.map(m => m[1]))]
    if (animalNames.length !== 1) {
      StatusMessage.showTemporaryMessage('Failed to determine the animal. Current animal(s): ' + animalNames.join(', '));
      return
    }
    const animal = animalNames[0]
    StatusMessage.showTemporaryMessage('Fetching rotation matrix for ' + animal);

    try {
      const rotationJSON:remoteRotationMatrix = await fetchOk(rotationMatrixURL + animal, {
        method: 'GET',
      }).then(response => {
        return response.json();
      })
      const {rotation, translation} = rotationJSON;

      this.transform.transform = Float64Array.from([
        rotation[0][0], rotation[1][0], rotation[2][0], 0,
        rotation[0][1], rotation[1][1], rotation[2][1], 0,
        rotation[0][2], rotation[1][2], rotation[2][2], 0,
        translation[0][0], translation[1][0], translation[2][0], 1
      ])
      StatusMessage.showTemporaryMessage('Fetched rotation matrix for ' + animal);
    } catch (e) {
      StatusMessage.showTemporaryMessage('Unable to get rotation matirx.');
      throw e;
    }
  }
}