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
import {AppSettings} from 'neuroglancer/services/service';
import {User} from 'neuroglancer/services/user_loader';

/**
 * Fuzzy search algorithm from https://github.com/bevacqua/fuzzysearch in Typescript.
 * @param needle
 * @param haystack
 */
function fuzzySearch (needle: string, haystack: string) {
  const hlen = haystack.length;
  const nlen = needle.length;
  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return needle === haystack;
  }
  outer: for (let i = 0, j = 0; i < nlen; i++) {
    const nch = needle.charCodeAt(i);
    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

function getUrlParams() {
  const href = new URL(location.href);
  const id = href.searchParams.get('id');
  const locationVariables = {
    'stateID': id,
    'multiUserMode': id !== null && href.searchParams.get('multi') === '1',
  };
  return locationVariables;
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
  const element = document.createElement('div');
  element.textContent = completion.value || '';
  const dateElement = document.createElement('div');
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
      for(const result of this.allCompletions) {
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

    this.placeholder = 'State comment';
  }

  selectCompletion(index: number) {
    try {
      const completion = this.curCompletions[index];
      const stateJson = JSON.parse(completion.json);
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

export interface State {
  state_id: number;
  person_id: number;
  comments: string;
  user_date: string;
  url: object;
}

export class StateAPI {
  constructor (private userUrl: string, private stateUrl: string) {}

  public getUser(): Promise<User> {
    const url = this.userUrl;

    return fetchOk(url, {
      method: 'GET',
    }).then(response => {
      return response.json();
    }).then(json => {
      return json;
    });
  }

  public getState(stateID: number|string): Promise<State> {
    const url = `${this.stateUrl}/${stateID}`;

    return fetchOk(url, {
      method: 'GET',
    }).then(response => {
      return response.json();
    }).then(json => {
      return {
        state_id: json['id'],
        person_id: json['person_id'],
        comments: json['comments'],
        user_date: json['user_date'],
        url: json['url'],
      };
    }).catch(err => {
      StatusMessage.showTemporaryMessage('The URL is deleted from database. Please check again.');
      return {
        state_id: 0,
        person_id: 0,
        comments: err,
        user_date: "0",
        url: {},
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
      const href = new URL(location.href);
      href.searchParams.set('id', json['id']);
      window.history.pushState({}, '', href.toString());
      urlParams.stateID = json['id'];
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
    const url = `${this.stateUrl}/${stateID}`;
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

export const stateAPI = new StateAPI(
  `${AppSettings.API_ENDPOINT}/session`,
  `${AppSettings.API_ENDPOINT}/neuroglancer`,
);

export const urlParams = getUrlParams();

export class StateLoader extends RefCounted {
  element = document.createElement('div');

  private stateAPI: StateAPI;
  private input: StateAutocomplete;
  private resetButton: HTMLElement;
  private saveButton: HTMLElement;
  private newButton: HTMLElement;
  private user: User;
  private stateID: number;

  constructor(public viewer: Viewer) {
    super();
    this.element.classList.add('state-loader');

    this.stateAPI = stateAPI;

    this.stateAPI.getUser().then(user => {
      this.user = user;

      if (this.user.user_id !== 0) {
        this.input = new StateAutocomplete(viewer);
        this.input.disableCompletions();
        this.input.element.classList.add('state-loader-input');
        this.element.appendChild(this.input.element);

        this.resetButton = makeIcon({text: 'Reset', title: 'Reset to the JSON state stored in the database'});
        this.registerEventListener(this.resetButton, 'click', () => {
          this.resetState();
        });
        this.element.appendChild(this.resetButton);

        this.saveButton = makeIcon({text: 'Save', title: 'Save to the current JSON state'});
        this.registerEventListener(this.saveButton, 'click', () => {
          this.saveState();
        });
        this.element.appendChild(this.saveButton);

        this.newButton = makeIcon({text: 'New', title: 'Save to a new JSON state'});
        this.registerEventListener(this.newButton, 'click', () => {
          this.newState();
        });
        this.element.appendChild(this.newButton);

        this.stateID = -1;
        this.input.value = 'Type URL name here';
        this.saveButton.style.display = 'none';
        this.resetButton.style.display = 'none;'

        const stateID = urlParams.stateID;
        if (stateID) {
          this.stateID = Number(stateID);
          this.getState();
        }
      }
    });
  }

  private validateState(state: State|null) {
    if (state !== null) {
      this.stateID = state['state_id'];
      this.input.value = state['comments'];
      this.saveButton.style.removeProperty('display');
      this.resetButton.style.removeProperty('display');
    }
  }

  private getState() {
    this.stateAPI.getState(this.stateID).then(state => {
      this.validateState(state);
    }).catch(err => {
      StatusMessage.showTemporaryMessage(`Internal error: please see debug message.`);
      console.log(err);
    });
  }

  private saveState() {
    const comments = this.input.value;
    if (comments.length === 0) {
      StatusMessage.showTemporaryMessage(`There was an error: the comment cannot be empty.`);
      return;
    }

    const state = {
      state_id: this.stateID,
      person_id: this.user.user_id,
      comments: comments,
      user_date: String(Date.now()),
      url: getCachedJson(this.viewer.state).value,
    };

    this.stateAPI.saveState(this.stateID, state).then(() => {
      StatusMessage.showTemporaryMessage(`The data was saved successfully.`);
    }).catch(err => {
      StatusMessage.showTemporaryMessage(`Internal error: please see debug message.`);
      console.log(err);
    });
  }

  private newState() {
    const comments = this.input.value;
    if (comments.length === 0) {
      StatusMessage.showTemporaryMessage(`Error: the comment cannot be empty.`);
      return;
    }

    const state = {
      state_id: this.stateID,
      person_id: this.user.user_id,
      comments: comments,
      user_date: String(Date.now()),
      url: getCachedJson(this.viewer.state).value,
    };

    this.stateAPI.newState(state).then((newState) => {
      this.validateState(newState);
      StatusMessage.showTemporaryMessage(`A new data state has been created.`);
    }).catch(err => {
      StatusMessage.showTemporaryMessage(`Internal error: please see debug message.`);
      console.log(err);
    });
  }

  private resetState() {
    this.viewer.urlHashBinding.resetDatabaseState();
  }
}

