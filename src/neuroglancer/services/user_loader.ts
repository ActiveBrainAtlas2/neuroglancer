import './user_loader.css';
import { makeIcon } from 'neuroglancer/widget/icon';
import { registerEventListener } from 'neuroglancer/util/disposable';
import { database, dbRef, userDataRef } from 'neuroglancer/services/firebase';
import { child, get, off, ref, update, } from "firebase/database";

import { urlParams, stateAPI, StateAPI } from 'neuroglancer/services/state_loader';
import { StatusMessage } from 'neuroglancer/status';

import { AppSettings } from 'neuroglancer/services/service';


export interface User {
    user_id: number;
    username: string;
}

export interface ActiveUser {
    name: string;
    date: number;
}

export class UserLoader {
    element = document.createElement('div');
    private userList = document.createElement('div');
    private googleLoginButton: HTMLElement;
    private localLoginButton: HTMLElement;
    private logoutButton: HTMLElement;
    private users: string[];
    private stateAPI: StateAPI;
    private user: User;

    constructor() {
        this.stateAPI = stateAPI;
        this.element.classList.add('user-loader');

        if (urlParams.stateID) {
            const stateID = urlParams.stateID;

            this.googleLoginButton = makeIcon({ text: 'Google', title: 'Login with your Google account.' });
            this.localLoginButton = makeIcon({ text: 'Login', title: 'Login as a local user.' });
            this.logoutButton = makeIcon({ text: 'Leave', title: 'Leave multi-user mode. You will be directed to database portal.' });

            registerEventListener(this.googleLoginButton, 'click', () => {
                this.googleLogin();
            });
            registerEventListener(this.localLoginButton, 'click', () => {
                this.localLogin();
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
                if (AppSettings.DISPLAY_GOOGLE) {
                    this.element.appendChild(this.googleLoginButton);
                }
                this.element.appendChild(this.localLoginButton);
                this.element.appendChild(this.userList);
                this.element.appendChild(this.logoutButton);
            });
        }
    }


    private updateUserList(snapshot: any) {
        this.users = [];
        snapshot.forEach((childSnapshot: { val: () => ActiveUser; }) => {
            const active = childSnapshot.val();
            if (Date.now() - active.date < 300000) this.users.push(active.name);
        });
        const newList = document.createElement('div');
        newList.classList.add('user-list');
        this.users.forEach(username => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-div');
            userDiv.textContent = username;
            console.log(username);
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
        this.googleLoginButton.style.removeProperty('display');
        this.localLoginButton.style.removeProperty('display');
        this.userList.style.display = 'none';
        this.logoutButton.style.display = 'none';
        //TODO fixme migrate web 8 -> 9 userDataRef.off("child_changed");
        off(userDataRef, "child_changed");
    }

    private loggedIn(stateID: string) {
        this.googleLoginButton.style.display = 'none';
        this.localLoginButton.style.display = 'none';
        this.userList.style.removeProperty('display');

        if (urlParams.multiUserMode) {
            this.logoutButton.style.removeProperty('display');
            updateUser(stateID, this.user.user_id, this.user.username);
            get(child(dbRef, `users/${stateID}`)).then((snapshot) => {
                if (snapshot.exists()) {
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
        }
    }

    private googleLogin() {
        const url = new URL(window.location.href);
        const { pathname, search, hash } = url;
        window.location.href = `${AppSettings.GOOGLE_LOGIN}${pathname}${search}${hash}`;
    }

    private localLogin() {
        const url = new URL(window.location.href);
        const { pathname, search, hash } = url;
        window.location.href = `${AppSettings.LOCAL_LOGIN}${pathname}${search}${hash}`;
    }

    private logout(stateID: string) {
        const userID = this.user.user_id;
        const updates: { [dbRef: string]: null } = {};
        updates[`/users/${stateID}/${userID}`] = null;
        update(ref(database), updates);
        window.location.href = AppSettings.API_ENDPOINT;
    }
}

/** I made this a function in case we need it in another part
of the program
 */
export function updateUser(stateID: string | null, userID: number, username: string) {
    const updates: any = {};
    const activeUser: ActiveUser = {
        name: username,
        date: Date.now(),
    }

    updates['/users/' + stateID + '/' + userID] = activeUser;
    update(ref(database), updates)
        .then(() => {
            console.log('Updating user data was OK');
        })
        .catch((error) => {
            console.log('error in updateUser');
            console.error(error);
        });
}
