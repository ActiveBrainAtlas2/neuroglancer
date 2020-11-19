/**
 * @license
 * Copyright 2016 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './status.css';

let statusContainer: HTMLElement|null = null;

export var DEFAULT_STATUS_DELAY = 200;

export type Delay = boolean | number;

export class StatusMessage {
  element: HTMLElement;
  private timer: number|null;
  private container: HTMLElement
  constructor(delay: Delay = false) {
    if (statusContainer === null) {
      statusContainer = document.createElement('ul');
      statusContainer.id = 'statusContainer';
      const el: HTMLElement | null = document.getElementById('neuroglancer-container');
      if (el) {
        el.appendChild(statusContainer);
      } else {
        document.body.appendChild(statusContainer);
      }
    }
    let container = document.createElement('li');
    this.container = container;
    if (delay === true) {
      delay = DEFAULT_STATUS_DELAY;
    }
    if (delay !== false) {
      this.setVisible(false);
      this.timer = window.setTimeout(this.setVisible.bind(this, true), delay);
    } else {
      this.timer = null;
    }
    let element = document.createElement('div')
    element.className = 'container';
    this.element = element;
    container.appendChild(element);
    let button = document.createElement('button');
    button.className = 'close';
    button.innerHTML = '&times;';
    button.addEventListener('click', () => {
      this.dispose();
    });
    container.appendChild(button);
    statusContainer.appendChild(container);
  }
  dispose() {
    statusContainer!.removeChild(this.container);
    this.container = <any>undefined;
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
  }
  setText(text: string, makeVisible?: boolean) {
    this.element.textContent = text;
    if (makeVisible) {
      this.setVisible(true);
    }
  }
  setHTML(text: string, makeVisible?: boolean) {
    this.element.innerHTML = text;
    if (makeVisible) {
      this.setVisible(true);
    }
  }
  setVisible(value: boolean) {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.container.style.display = value ? 'block' : 'none';
  }

  static forPromise<T>(
      promise: Promise<T>,
      options: {initialMessage: string, delay?: Delay, errorPrefix: string}): Promise<T> {
    let status = new StatusMessage(options.delay);
    status.setText(options.initialMessage);
    let dispose = status.dispose.bind(status);
    promise.then(dispose, reason => {
      let msg: string;
      if (reason instanceof Error) {
        msg = reason.message;
      } else {
        msg = '' + reason;
      }
      let {errorPrefix = ''} = options;
      if (status !== undefined) {
        status.setErrorMessage(errorPrefix + msg);
        status.setVisible(true);
      }
    });
    return promise;
  }

  setErrorMessage(message: string) {
    this.element.textContent = message + ' ';
    let button = document.createElement('button');
    button.textContent = 'Dismiss';
    button.addEventListener('click', () => {
      this.dispose();
    });
    this.element.appendChild(button);
  }

  static showMessage(message: string): StatusMessage {
    const msg = new StatusMessage();
    msg.element.textContent = message;
    msg.setVisible(true);
    return msg;
  }

  static showTemporaryMessage(message: string, closeAfter: number = 2000): StatusMessage {
    const msg = this.showMessage(message);
    window.setTimeout(() => msg.dispose(), closeAfter);
    return msg;
  }
}
