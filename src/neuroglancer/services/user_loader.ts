import './user_loader.css';
import {makeIcon} from 'neuroglancer/widget/icon';
import {registerEventListener} from 'neuroglancer/util/disposable';
import {userDataRef} from 'neuroglancer/services/firebase';
import {urlParams, stateAPI, StateAPI} from 'neuroglancer/services/state_loader';
import {StatusMessage} from 'neuroglancer/status';

const DATABASE_PORTAL = 'https://activebrainatlas.ucsd.edu/activebrainatlas/admin/neuroglancer/urlmodel/';
const LOGIN_URL = 'https://activebrainatlas.ucsd.edu/activebrainatlas/admin/login/?next='


export interface User {
  user_id: number;
  username: string;
}

export class UserLoader {
  element = document.createElement('div');
  private userList = document.createElement('div');
  private loginButton: HTMLElement;
  private logoutButton: HTMLElement;
  private users: string[];
  private stateAPI: StateAPI;
  private user: User;

  constructor() {
    this.stateAPI = stateAPI;

    if (urlParams.stateID) {
      const stateID = urlParams.stateID;

      this.loginButton = makeIcon({text: 'Log in', title: 'You will be directed to the log-in page.'});
      this.logoutButton = makeIcon({text: 'Leave', title: 'Leave multi-user mode. You will be directed to database portal.'});
      registerEventListener(this.loginButton, 'click', () => {
        this.login();
      });

      registerEventListener(this.logoutButton, 'click', () => {
        this.logout(stateID);
      });

      this.stateAPI.getUser().then(jsonUser => {
        this.user = jsonUser;
        if (this.user.user_id === 0) {
          StatusMessage.showTemporaryMessage('You are not logged in.');
          this.notLoggedIn();
        } else {
          this.loggedIn(stateID);
        }
        this.userList.classList.add('user-list');
        this.element.appendChild(this.loginButton);
        this.element.appendChild(this.userList);
        this.element.appendChild(this.logoutButton);
      });
    }
  }

  private updateUserList(snapshot: any) {
    this.users = [];
    snapshot.forEach((childSnapshot: { val: () => string; }) => {
      this.users.push(childSnapshot.val());
    });
    const newList = document.createElement('div');
    newList.classList.add('user-list');
    this.users.forEach(username => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user-div');
      userDiv.textContent = username;
      if (username == this.user.username) {
        userDiv.style.color = 'lightblue';
        newList.prepend(userDiv);
      } else {
        newList.append(userDiv);
      }
    });
    this.element.replaceChild(newList, this.userList);
    this.userList = newList;
  }

  private notLoggedIn() {
    this.loginButton.style.removeProperty('display');
    this.userList.style.display = 'none';
    this.logoutButton.style.display = 'none';
    userDataRef.off("child_changed");
  }

  private loggedIn(stateID: string) {
    this.loginButton.style.display = 'none';
    this.userList.style.removeProperty('display');
    if (urlParams.multiUserMode) {
      this.logoutButton.style.removeProperty('display');
      const usersRef = userDataRef.child(stateID).orderByKey();
      usersRef.once("value").then((snapshot) => {
        this.updateUserList(snapshot);
      });
      userDataRef.on("child_changed", (snapshot) => {
        if (snapshot.key === stateID) {
          this.updateUserList(snapshot);
        }
      });
    } else {
      this.logoutButton.style.display = 'none';
      this.userList.style.removeProperty('display');
      const userDiv = document.createElement('div');
      userDiv.classList.add('user-div');
      userDiv.textContent = this.user.username;
      userDiv.style.color = 'lightblue';
      this.userList.append(userDiv);
      const reminder = document.createElement('div');
      reminder.classList.add('user-div');
      reminder.textContent = 'Remember to save your changes!';
      this.userList.append(reminder);
    }
  }


  private login() {
    const url = new URL(window.location.href);
    const {pathname, search, hash} = url;
    window.location.href = `${LOGIN_URL}${pathname}${search}${hash}`;
  }

  private logout(state_id: string) {
    userDataRef.child(state_id).child("" + this.user.user_id + "").remove();
    window.location.href = DATABASE_PORTAL;
  }
}

