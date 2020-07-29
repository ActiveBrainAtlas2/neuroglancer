
import './state_loader.css';

import {Completion} from 'neuroglancer/util/completion';
import {AutocompleteTextInput} from 'neuroglancer/widget/multiline_autocomplete';
import {CancellationToken} from 'neuroglancer/util/cancellation';
import {RefCounted} from 'neuroglancer/util/disposable';
import {fetchOk} from 'neuroglancer/util/http_request';

// const ACTIVE_BRAIN_ATLAS_URL = 'https://activebrainatlas.ucsd.edu/activebrainatlas/neuroglancer/';
const ACTIVE_BRAIN_ATLAS_URL = 'http://localhost:8000/neuroglancer/';

/**
 * Define the state completion cell
 */
export interface CompletionWithState extends Completion {
  date?: string;
  author?: string;
}

/**
 * Define how to display a state completion cell
 * @param completion
 */
export function makeCompletionElementWithState(completion: CompletionWithState) {
  let element = document.createElement('div');
  element.textContent = completion.value;
  let dateElement = document.createElement('div');
  dateElement.textContent = completion.date || '';
  element.appendChild(dateElement);
  let authorElement = document.createElement('div');
  authorElement.textContent = completion.author || '';
  element.appendChild(authorElement);
  return element;
}

export class StateLoader extends RefCounted {
  element = document.createElement('div');
  private input: AutocompleteTextInput;
  private results = [];

  constructor() {
    super();
    this.element.classList.add('state-loader');

    this.get_data().then(results => {
      this.results = results;
    });

    const dataCompleter = (value: string, cancellationToken: CancellationToken) => {
      console.log(value, cancellationToken);

      let completions: CompletionWithState[] = [];
      for(let result of this.results) {
        completions.push({
          value: result['url'], date: '03/31/1997 07:32 PM', author: 'Litao Qiao'
        });
      }

      return Promise.resolve({
        completions: completions,
        offset: 0,
        showSingleResult: true,
        selectSingleResult: true,
        makeElement: makeCompletionElementWithState,
      });
    };
    this.input = new AutocompleteTextInput({completer: dataCompleter, delay: 0});
    this.input.placeholder = 'Search saved state';

    this.element.appendChild(this.input.element);
  }

  private get_data(): Promise<any> {
    return fetchOk(ACTIVE_BRAIN_ATLAS_URL, {
      method: 'GET',
    }).then(response => {
      return response.json();
    }).then(json => {
      return json['results'];
    });
  }

  /*
  private post(data) {
    const ACTIVE_BRAIN_ATLAS_POST_INIT = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: '{"url":"junk url test 1"}',
    };

    fetchOk(ACTIVE_BRAIN_ATLAS_URL, ACTIVE_BRAIN_ATLAS_POST_INIT).then(response => {
      return response.json();
    }).then(json => {
      console.log(json);
    });
  }
   */
}

