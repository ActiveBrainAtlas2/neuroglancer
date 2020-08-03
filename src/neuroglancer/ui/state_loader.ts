
import './state_loader.css';

import {Completion} from 'neuroglancer/util/completion';
import {AutocompleteTextInput} from 'neuroglancer/widget/multiline_autocomplete';
import {CancellationToken} from 'neuroglancer/util/cancellation';
import {RefCounted} from 'neuroglancer/util/disposable';
import {fetchOk} from 'neuroglancer/util/http_request';
import { Viewer } from 'neuroglancer/viewer';
import { StatusMessage } from 'neuroglancer/status';
import { makeIcon } from 'neuroglancer/widget/icon';
import { getCachedJson } from 'neuroglancer/util/trackable';

/**
 * Fuzzy search algorithm from https://github.com/bevacqua/fuzzysearch in Typescript.
 * @param needle
 * @param haystack
 */
function fuzzySearch (needle: string, haystack: string) {
  let hlen = haystack.length;
  let nlen = needle.length;
  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < nlen; i++) {
    let nch = needle.charCodeAt(i);
    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

/**
 * Define the state completion cell
 */
interface CompletionWithState extends Completion {
  date: string;
  json: string;
}

/**
 * Define how to display a state completion cell
 * @param completion
 */
function makeCompletionElementWithState(completion: CompletionWithState) {
  let element = document.createElement('div');
  element.textContent = completion.value;
  let dateElement = document.createElement('div');
  dateElement.textContent = completion.date || '';
  element.appendChild(dateElement);
  return element;
}

function makeid(length: number) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export class StateAutocomplete extends AutocompleteTextInput {
  public _results: any = [];
  private completions: CompletionWithState[] = [];

  constructor(private viewer: Viewer) {
    super({completer: (value: string, _cancellationToken: CancellationToken) => {
      this.completions = [];
      for(let result of this.results) {
        if (fuzzySearch(value, result['value'])) {
          this.completions.push({
            value: result['value'],
            date: new Date(Number(result['date'])).toLocaleString(),
            json: result['url']
          });
        }
      }

      return Promise.resolve({
        completions: this.completions,
        offset: 0,
        showSingleResult: true,
        selectSingleResult: true,
        makeElement: makeCompletionElementWithState,
      });
    }, delay: 0});

    this.placeholder = 'Search saved state';
  }

  selectCompletion(index: number) {
    try {
      let stateJson = JSON.parse(this.completions[index].json);
      this.viewer.state.restoreState(stateJson);
      StatusMessage.showTemporaryMessage('JSON file loaded successfully');
    }
    catch (e) {
      StatusMessage.showMessage('The selected file is not a valid json file');
    }
  }

  set results(results: any) {
    this._results = results;
  }

  get results() {
    return this._results;
  }
}

export class StateLoader extends RefCounted {
  element = document.createElement('div');

  // private ACTIVE_BRAIN_ATLAS_URL = 'https://activebrainatlas.ucsd.edu/activebrainatlas/neuroglancer/';
  private ACTIVE_BRAIN_ATLAS_URL = 'http://localhost:8000/neuroglancer/';
  private input: StateAutocomplete;

  constructor(public viewer: Viewer) {
    super();
    this.element.classList.add('state-loader');

    this.input = new StateAutocomplete(viewer);
    this.get_states().then(results => {
      this.input.results = results;
    });
    this.input.element.classList.add('state-loader-input');

    const button = makeIcon({text: 'save', title: 'Save JSON state'});
    this.registerEventListener(button, 'click', () => {
      let state = JSON.stringify(getCachedJson(this.viewer.state).value, null, 0);
      this.post_state(state);
    });

    this.element.appendChild(this.input.element);
    this.element.appendChild(button);
  }

  private get_states(): Promise<any> {
    return fetchOk(this.ACTIVE_BRAIN_ATLAS_URL, {
      method: 'GET',
    }).then(response => {
      return response.json();
    }).then(json => {
      // return json['results'];
      let test_results = json['results'];
      for (let result of test_results) {
        result['value'] = makeid(10);
        result['date'] = String(Date.now());
      }
      return test_results;
    });
  }

  private post_state(state: string) {
    let body = {
      value: makeid(10),
      date: String(Date.now()),
      url: state,
    };

    fetchOk(this.ACTIVE_BRAIN_ATLAS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body, null, 0),
    }).then(response => {
      return response.json();
    }).then(json => {
      console.log(json);
    });
  }
}

