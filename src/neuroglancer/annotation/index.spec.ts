import { Annotation, AnnotationType, isChildDummyAnnotation, isTypeCollection, Line, Polygon, Volume } from ".";

function getDummyPolygon(): Polygon {
  return <Polygon>{
    id: 'abc',
    type: AnnotationType.POLYGON,
    properties: [],
    childAnnotationIds: [],
    childrenVisible: false,
    source: new Float32Array(),
  };
}

function getDummyVolume(): Volume {
  return <Volume>{
    id: 'abc',
    type: AnnotationType.VOLUME,
    properties: [],
    childAnnotationIds: [],
    childrenVisible: false,
    source: new Float32Array(),
  };
}

function getDummyLine(): Line {
  return <Line>{
    id: 'abc',
    type: AnnotationType.LINE,
    properties: [],
    pointA: new Float32Array(),
    pointB: new Float32Array(),
  };
}

describe('test isTypeCollection', () => {

  it('isTypeCollection: polygon annotation', () => {
    expect(isTypeCollection(<Annotation>(getDummyPolygon()))).toEqual(true);
  });

  it('isTypeCollection: volume annotation', () => {
    expect(isTypeCollection(<Annotation>(getDummyVolume()))).toEqual(true);
  });

  it('isTypeCollection: line annotation', () => {
    expect(isTypeCollection(<Annotation>(getDummyLine()))).toEqual(false);
  });

});

describe('test isChildDummyAnnotation', () => {

  it('isChildDummyAnnotation: polygon annotation', () => {
    expect(isChildDummyAnnotation(<Annotation>(getDummyPolygon()))).toEqual(true);
  });

  it('isChildDummyAnnotation: volume annotation', () => {
    expect(isChildDummyAnnotation(<Annotation>(getDummyVolume()))).toEqual(false);
  });

  it('isChildDummyAnnotation: line annotation', () => {
    expect(isChildDummyAnnotation(<Annotation>(getDummyLine()))).toEqual(false);
  });

});