import { makeCoordinateSpace } from "../coordinate_transform";
import * as vector from 'neuroglancer/util/vector';
import {WatchableValue} from 'neuroglancer/trackable_value';
import { updateCoordinateSpaceScaleValues } from "./coordinate_transform";

describe('updateCoordinateSpaceScaleValues', () => {
  it('test function', () => {
    const testCoordinateSpace = new WatchableValue(makeCoordinateSpace({
      valid: false,
      names: [],
      units: [],
      scales: vector.kEmptyFloat64Vec,
      boundingBoxes: [],
    }));
    const scalesAndUnits : {scale: number; unit: string;}[] = [
      {scale: 1e-6, unit: 'm'}, 
      {scale: 1e-6, unit: 'm'}, 
      {scale: 1e-6, unit: 'm'}
    ];
    const modified = new Array<boolean>(3);
    modified[0] = true;
    modified[1] = true;
    modified[2] = true;

    const expectedNewScales = Float64Array.from(scalesAndUnits, x => x!.scale);
    const expectedNewUnits = Array.from(scalesAndUnits, x => x!.unit);
    updateCoordinateSpaceScaleValues(scalesAndUnits, modified, testCoordinateSpace);

    expect(testCoordinateSpace.value.scales).toEqual(expectedNewScales);
    expect(testCoordinateSpace.value.units).toEqual(expectedNewUnits);
  });
});