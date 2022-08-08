import { AnnotationType, Line } from ".";
import { arraysEqual } from "../util/array";
import { getEndPointBasedOnPartIndex, getPointPartIndex, isCornerPicked } from "./line";

describe('isCornerPicked', () => {
  it('test', () => {
    expect(isCornerPicked(1)).toEqual(true);
    expect(isCornerPicked(2)).toEqual(true);
    expect(isCornerPicked(0)).toEqual(false);
  });
});

describe('getPointPartIndex', () => {
  it('test', () => {
    const line = <Line>{id: 'l1', properties: [], pointA: Float32Array.of(1, 2), 
    pointB: Float32Array.of(3, 4), type: AnnotationType.LINE};
    expect(getPointPartIndex(line, Float32Array.of(1, 2))).toEqual(1);
    expect(getPointPartIndex(line, Float32Array.of(3, 4))).toEqual(2);
    expect(getPointPartIndex(line, Float32Array.of(0, 0))).toEqual(-1);
  });
});

describe('getEndPointBasedOnPartIndex', () => {
  it('test', () => {
    const line = <Line>{id: 'l1', properties: [], pointA: Float32Array.of(1, 2), 
    pointB: Float32Array.of(3, 4), type: AnnotationType.LINE};
    //@ts-ignore
    expect(arraysEqual(getEndPointBasedOnPartIndex(line, 1), Float32Array.of(1, 2)));
    //@ts-ignore
    expect(arraysEqual(getEndPointBasedOnPartIndex(line, 2), Float32Array.of(3, 4)));
    expect(getEndPointBasedOnPartIndex(line, 0)).toEqual(undefined);
  });
});