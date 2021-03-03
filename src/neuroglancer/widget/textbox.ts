import './textbox.css';

export interface MakeTextOptions {
  text?: string;
  title?: string;
}

export function makeText(options: MakeTextOptions): HTMLElement {
  const {title} = options;
  const element = document.createElement('div');

  if (title !== undefined) {
    element.title = title;
  }
  element.className = 'textbox-list';
  if (options.text !== undefined) {
    element.appendChild(document.createTextNode(options.text));
  }
  return element;
}
