
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

  disableCompletions() {
    this.allCompletions = [];
  }

  set allCompletions(results: CompletionWithState[]) {
    this._allCompletions = results;
  }

  get allCompletions() {
    return this._allCompletions;
  }
}

interface State {
  state_id: number;
  person_id: number;
  comments: string;
  user_date: string;
  url: string;
}

class StateAPI {
  constructor (private userUrl: string, private stateUrl: string) {}

   getUser(): Promise<any> {
    const url = this.userUrl;

    return fetchOk(url, {
      method: 'GET',
    }).then(response => {
      return response.json();
    }).then(json => {
      console.log(json);
      return json['person_id'];
    });
  }

  getState(stateID: number|string): Promise<State> {
    const url = this.stateUrl + '/' + String(stateID);

    return fetchOk(url, {
      method: 'GET',
    }).then(response => {
      return response.json();
    }).then(json => {
      console.log('getState', json);
      return {
        state_id: json['id'],
        person_id: json['person_id'],
        comments: json['comments'],
        user_date: json['user_date'],
        url: json['url'],
      };
    });
  }

  newState(state: State): Promise<State> {
    const url = this.stateUrl;
    const body = {
      id: state['state_id'],
      person_id: state['person_id'],
      comments: state['comments'],
      user_date: state['user_date'],
      url: state['url'],
    };

    return fetchOk(url, {
      method: 'POST',
      credentials: 'omit', // Required to pass CSRF Failed error
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body, null, 0),
    }).then(response => {
      return response.json();
    }).then(json => {
      console.log('newState', json);
      return {
        state_id: json['id'],
        person_id: json['person_id'],
        comments: json['comments'],
        user_date: json['user_date'],
        url: json['url'],
      };
    });
  }

  saveState(stateID: number|string, state: State): Promise<State> {
    const url = this.stateUrl + '/' + String(stateID);
    const body = {
      id: state['state_id'],
      person_id: state['person_id'],
      comments: state['comments'],
      user_date: state['user_date'],
      url: state['url'],
    };

    return fetchOk(url, {
      method: 'PUT',
      credentials: 'omit', // Required to pass CSRF Failed error
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body, null, 0),
    }).then(response => {
      return response.json();
    }).then(json => {
      console.log('saveState', json);
      return {
        state_id: json['id'],
        person_id: json['person_id'],
        comments: json['comments'],
        user_date: json['user_date'],
        url: json['url'],
      };
    });
  }
}


export class StateLoader extends RefCounted {
  element = document.createElement('div');

  private stateAPI: StateAPI;
  private input: StateAutocomplete;
  private saveButton: HTMLElement;
  private newButton: HTMLElement;
  private userID: number;
  private stateID: number;

  constructor(public viewer: Viewer) {
    super();
    this.element.classList.add('state-loader');

    this.input = new StateAutocomplete(viewer);
    this.input.disableCompletions();
    this.input.element.classList.add('state-loader-input');
    this.element.appendChild(this.input.element);

    this.stateAPI = new StateAPI(
      'https://activebrainatlas.ucsd.edu/activebrainatlas/session',
      'https://activebrainatlas.ucsd.edu/activebrainatlas/neuroglancer'
    );

    this.stateAPI.getUser().then(userID => {
      this.userID = userID;

      if (this.userID !== 0) {
        this.saveButton = makeIcon({text: 'save', title: 'Save to the current JSON state'});
        this.registerEventListener(this.saveButton, 'click', () => {
          this.saveState();
        });
        this.element.appendChild(this.saveButton);

        this.newButton = makeIcon({text: 'new', title: 'Save to a new JSON state'});
        this.registerEventListener(this.newButton, 'click', () => {
          this.newState();
        });
        this.element.appendChild(this.newButton);

        this.stateID = -1;
        this.input.value = 'uncommented state';
        this.saveButton.style.display = 'none';

        let id_match = location.href.match(/(?<=(\?id=))(.*?)(?=\&)/);
        if(id_match !== null) {
          this.stateID = Number(id_match[0]);
          this.getState();
        }
      }
    });
  }

  private validateState(state: State|null) {
    if (state !== null) {
      this.stateID = state['state_id'];
      this.input.value = state['comments'];
      this.saveButton.style.display = 'initial';
    }
  }

  private getState() {
    this.stateAPI.getState(this.stateID).then(state => {
      this.validateState(state);
    }).catch(err => {
      StatusMessage.showTemporaryMessage(`Internal error: please see debug message`);
      console.log(err);
    });
  }

  private saveState() {
    let comments = this.input.value;
    if (comments.length === 0) {
      StatusMessage.showTemporaryMessage(`State is uploaded unsuccessfully: the comment cannot be empty`);
      return;
    }

    let state = {
      state_id: this.stateID,
      person_id: this.userID,
      comments: comments,
      user_date: String(Date.now()),
      url: JSON.stringify(getCachedJson(this.viewer.state).value, null, 0),
    };

    this.stateAPI.saveState(this.stateID, state).then(() => {
      StatusMessage.showTemporaryMessage(`State is saved successfully`);
    }).catch(err => {
      StatusMessage.showTemporaryMessage(`Internal error: please see debug message`);
      console.log(err);
    });
  }

  private newState() {
    let comments = this.input.value;
    if (comments.length === 0) {
      StatusMessage.showTemporaryMessage(`State is uploaded unsuccessfully: the comment cannot be empty`);
      return;
    }

    let state = {
      state_id: this.stateID,
      person_id: this.userID,
      comments: comments,
      user_date: String(Date.now()),
      url: JSON.stringify(getCachedJson(this.viewer.state).value, null, 0),
    };

    this.stateAPI.newState(state).then((newState) => {
      this.validateState(newState);
      StatusMessage.showTemporaryMessage(`A new state is created`);
    }).catch(err => {
      StatusMessage.showTemporaryMessage(`Internal error: please see debug message`);
      console.log(err);
    });
  }

  /*
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
    }).catch(err => {
      StatusMessage.showTemporaryMessage(`Internal error: please see debug message`);
      console.log(err);
      this.input.allCompletions = [];
    });
  }
   */
}

