import { vec3 } from "gl-matrix";
import { arraysEqual } from "../util/array";
import { checkIfSameZCoordinate, copyZCoordinate, findCrossProduct, findDotProduct, getNeighbouringAnnIds, getZCoordinate } from "./polygon";

describe('Polygon tool test cases', () => {

  it('getZCoordinate', () => {
    expect(getZCoordinate(Float32Array.of(1,2,3))).toEqual(3);
    expect(getZCoordinate(Float32Array.of(1,2))).toEqual(undefined);
  });

  it('checkIfSameZCoordinate', () => {
    expect(checkIfSameZCoordinate(Float32Array.of(1,2,3), Float32Array.of(2,3,3))).toEqual(true);
    expect(checkIfSameZCoordinate(Float32Array.of(1,2,3), Float32Array.of(2,3))).toEqual(false);
    expect(checkIfSameZCoordinate(Float32Array.of(1,2,3), Float32Array.of(2,3,4))).toEqual(false);
  });

  it('copyZCoordinate: test1', () => {
    const point1 = Float32Array.of(1,2,3);
    const point2 = Float32Array.of(2,3,4);
    copyZCoordinate(point1, point2);
    expect(point2[2]).toEqual(3);
  });

  it('copyZCoordinate: test2', () => {
    const point1 = Float32Array.of(1,2);
    const point2 = Float32Array.of(2,3,4);
    copyZCoordinate(point1, point2);
    expect(point2[2]).toEqual(4);
  });

  it('findCrossProduct', () => {
    expect(findCrossProduct(Float32Array.of(1, 0, 0), Float32Array.of(0, 1, 0))).toEqual([0, 0, 1]);
    expect(findCrossProduct(Float32Array.of(0, 1, 0), Float32Array.of(0, 0, 1))).toEqual([1, 0, 0]);
    expect(findCrossProduct(Float32Array.of(0, 0, 1), Float32Array.of(1, 0, 0))).toEqual([0, 1, 0]);
  });

  it('findDotProduct', () => {
    const v1 = vec3.create(); v1[0] = 0; v1[1] = 1; v1[2] = 0;
    const v2 = vec3.create(); v2[0] = 0; v2[1] = 0; v2[2] = 1;
    const v3 = vec3.create(); v3[0] = 1; v3[1] = 0; v3[2] = 0;
    expect(findDotProduct([1, 0, 0], v1)).toEqual(0);
    expect(findDotProduct([0, 0, 1], v2)).toEqual(1);
    expect(findDotProduct([5, 0, 0], v3)).toEqual(5);
  });

  it('getNeighbouringAnnIds', () => {
    const arr = ["id1", "id2", "id3"];
    //@ts-ignore
    expect(arraysEqual(getNeighbouringAnnIds(arr, "id1"), ["id3", "id2"])).toEqual(true);
    //@ts-ignore
    expect(arraysEqual(getNeighbouringAnnIds(arr, "id2"), ["id1", "id3"])).toEqual(true);
    expect(getNeighbouringAnnIds(arr, "id")).toEqual(undefined);
  });

});