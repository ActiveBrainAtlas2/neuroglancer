import { AnnotationColorWidget } from "./color";

describe('AnnotationColorWidget', () => {
  it('Test instantiation', () => {
    const widget = new AnnotationColorWidget();
    expect(widget.element.type).toEqual('color');
    expect(widget.element.classList.contains('neuroglancer-color-widget')).toEqual(true);
  });

  it('Test getColor(), setColor()', () => {
    const widget = new AnnotationColorWidget();
    widget.setColor('#000000');
    expect(widget.getColor()).toEqual('#000000');
  });
});