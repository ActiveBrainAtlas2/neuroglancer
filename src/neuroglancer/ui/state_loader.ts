
import './state_loader.css';

import {Completion} from 'neuroglancer/util/completion';
import {AutocompleteTextInput} from 'neuroglancer/widget/multiline_autocomplete';
import {CancellationToken} from 'neuroglancer/util/cancellation';
import {RefCounted} from 'neuroglancer/util/disposable';
import {fetchOk} from 'neuroglancer/util/http_request';
import {Viewer} from 'neuroglancer/viewer';
import {StatusMessage} from 'neuroglancer/status';
import {makeIcon} from 'neuroglancer/widget/icon';
import {getCachedJson} from 'neuroglancer/util/trackable';

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
  element.textContent = completion.value || '';
  let dateElement = document.createElement('div');
  dateElement.textContent = completion.date || '';
  element.appendChild(dateElement);
  return element;
}

export class StateAutocomplete extends AutocompleteTextInput {
  public _allCompletions: CompletionWithState[] = [];
  private curCompletions: CompletionWithState[] = [];

  constructor(private viewer: Viewer) {
    super({completer: (value: string, _cancellationToken: CancellationToken) => {
      this.curCompletions = [];
      for(let result of this.allCompletions) {
        if (fuzzySearch(value, result['value'])) {
          this.curCompletions.push(result);
        }
      }

      return Promise.resolve({
        completions: this.curCompletions,
        offset: 0,
        showSingleResult: true,
        selectSingleResult: true,
        makeElement: makeCompletionElementWithState,
      });
    }, delay: 0});

    this.placeholder = 'Search or save a state by a comment';
  }

  selectCompletion(index: number) {
    try {
      let completion = this.curCompletions[index];
      let stateJson = JSON.parse(completion.json);
      this.viewer.state.restoreState(stateJson);
      StatusMessage.showTemporaryMessage(`JSON file loaded successfully: ${completion.value}`);
    }
    catch (e) {
      StatusMessage.showTemporaryMessage('Internal error: invalid JSON');
    }
  }

  set allCompletions(results: CompletionWithState[]) {
    this._allCompletions = results;
  }

  get allCompletions() {
    return this._allCompletions;
  }
}

export class StateLoader extends RefCounted {
  element = document.createElement('div');

  private ACTIVE_BRAIN_ATLAS_URL = 'https://activebrainatlas.ucsd.edu/activebrainatlas/neuroglancer/';
  // private ACTIVE_BRAIN_ATLAS_URL = 'http://localhost:8000/neuroglancer/';
  private input: StateAutocomplete;

  constructor(public viewer: Viewer) {
    super();
    this.element.classList.add('state-loader');

    this.getAllCompletions();

    this.input = new StateAutocomplete(viewer);
    this.input.element.classList.add('state-loader-input');
    this.input.element.addEventListener('click', () => {
      this.getAllCompletions();
    });

    const button = makeIcon({text: 'save', title: 'Save JSON state'});
    this.registerEventListener(button, 'click', () => {
      this.saveState();
    });

    this.element.appendChild(this.input.element);
    this.element.appendChild(button);
  }

  private getAllCompletions() {
    this.getStates().then(json => {
      let results: CompletionWithState[] = [];
      for (let result of json['results']) {
        results.push({
          value: result['comments'],
          date: new Date(Number(result['user_date'])).toLocaleString(),
          json: result['url'],
        });
      }
      this.input.allCompletions = results;
    }).catch(() => {
      StatusMessage.showTemporaryMessage(`Internal error: cannot get states from server`);
      this.input.allCompletions = [];
    });
  }

  private saveState() {
    let comments = this.input.value;
    if (comments.length === 0) {
      StatusMessage.showTemporaryMessage(`State is uploaded unsuccessfully: the comment cannot be empty`);
    }
    else {
      let state = JSON.stringify(getCachedJson(this.viewer.state).value, null, 0);
      this.postState(comments, state).then(json => {
        StatusMessage.showTemporaryMessage(`State is uploaded successfully: ${json['comments']}`);
      }).catch(err => {
        StatusMessage.showTemporaryMessage(`State is uploaded unsuccessfully: ${err}`);
      });
    }
  }

  private getStates(): Promise<any> {
    return fetchOk(this.ACTIVE_BRAIN_ATLAS_URL, {
      method: 'GET',
    }).then(response => {
      return response.json();
    });
  }

  private postState(comments: string, state: string): Promise<any> {
    let body = {
      comments: comments,
      user_date: String(Date.now()),
      url: state,
    };

    return fetchOk(this.ACTIVE_BRAIN_ATLAS_URL, {
      method: 'POST',
      credentials: 'omit', // Required to pass CSRF Failed error
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body, null, 0),
    }).then(response => {
      return response.json();
    });
  }
}

