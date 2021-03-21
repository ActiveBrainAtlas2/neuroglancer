import { WatchableCoordinateSpaceTransform } from "../coordinate_transform";
import { StatusMessage } from "../status";
import { RefCounted } from "../util/disposable";
import { removeFromParent } from "../util/dom";
import { fetchOk } from "../util/http_request";
import { createIdentity } from "../util/matrix";
import { makeIcon } from "./icon";
import {AppSettings} from "neuroglancer/services/service";

const rotationMatrixURL = AppSettings.API_ENDPOINT + '/alignatlas?animal='
const pattern_animal = /precomputed:\/\/https:\/\/activebrainatlas.ucsd.edu\/data\/([A-Z0-9]+)\//g
const buttonText = 'Fetch rotation matrix for this layer'
const buttonTitle = 'Please note that the rotation matrix will only be applied for the current layer. To rotate other layers, switch to that layer and click this button.'

/**
 * Convert a transformation matrix of rank 3 to a new transformation matrix with a higher rank.
 * Only the values in the upper left corner are retained in this process
 * @param matrix: old transformation matrix
 * @param newRank: new rank, should be larger than 3
 */
 export function dimensionTransform(matrix: Float64Array, newRank: number) {
  const oldRank = 3;

  const newMatrix = createIdentity(Float64Array, (newRank + 1));
  for (let i = 0; i < oldRank; i++) {
    newMatrix[newRank * (newRank + 1) + i] = matrix[oldRank * (oldRank + 1) + i];
    for (let j = 0; j < oldRank; j++) {
      newMatrix[i * (newRank + 1) + j] = matrix[i * (oldRank + 1) + j];
    }
  }

  return newMatrix;
}


interface remoteRotationMatrix {
  rotation: Array<Array<any>>,
  translation: Array<Array<any>>
}

export class FetchRotationMatrixWidget extends RefCounted{
  element: HTMLElement
  animal: string|null

  constructor(public transform: WatchableCoordinateSpaceTransform, private url: string) {
    super();
    this.transform = transform;
    this.url = url;
    this.animal = null
  
    const animals = [...this.url.matchAll(pattern_animal)]
    const animalNames = [...new Set(animals.map(m => m[1]))]
    if (animalNames.length === 1) {
      this.animal = animalNames[0]
      this.element = makeIcon({
        text: buttonText,
        title: buttonTitle,
        onClick: () => {this.fetchRotationMatrix()}
      });
      this.registerDisposer(() => removeFromParent(this.element));
    }
  }

  isAnimal(): boolean {
    return this.animal !== null;
  }

  async fetchRotationMatrix() {
    StatusMessage.showTemporaryMessage('Fetching rotation matrix for ' + this.animal);

    try {
      const rotationJSON:remoteRotationMatrix = await fetchOk(rotationMatrixURL + this.animal, {
        method: 'GET',
      }).then(response => {
        return response.json();
      })
      const {rotation, translation} = rotationJSON;

      const rank = this.transform.value.rank
      const newTransform = Float64Array.from([
        rotation[0][0], rotation[1][0], rotation[2][0], 0,
        rotation[0][1], rotation[1][1], rotation[2][1], 0,
        rotation[0][2], rotation[1][2], rotation[2][2], 0,
        translation[0][0], translation[1][0], translation[2][0], 1
      ])
      this.transform.transform = dimensionTransform(newTransform, rank)
      // this.transform.operations = this.transform.defaultOperations;
      StatusMessage.showTemporaryMessage('Fetched rotation matrix for ' + this.animal);
    } catch (e) {
      StatusMessage.showTemporaryMessage('Unable to get rotation matirx.');
      throw e;
    }
  }
}