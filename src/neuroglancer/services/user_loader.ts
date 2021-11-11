import './user_loader.css';
import { makeIcon } from 'neuroglancer/widget/icon';
import { registerEventListener } from 'neuroglancer/util/disposable';
import { database, dbRef, userDataRef } from 'neuroglancer/services/firebase';
import { child, get, off, ref, update, } from "firebase/database";

import { urlParams, stateAPI, StateAPI } from 'neuroglancer/services/state_loader';
import { StatusMessage } from 'neuroglancer/status';

const DATABASE_PORTAL = 'https://activebrainatlas.ucsd.edu/activebrainatlas/admin/neuroglancer/urlmodel/';
const LOGIN_URL = 'https://activebrainatlas.ucsd.edu/activebrainatlas/admin/login/?next='


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
    private loginButton: HTMLElement;
    private logoutButton: HTMLElement;
    private users: string[];
    private stateAPI: StateAPI;
    private user: User;

    constructor() {
        this.stateAPI = stateAPI;

        this.element.classList.add('user-loader');

        if (urlParams.stateID) {
            const stateID = urlParams.stateID;

            this.loginButton = makeIcon({ text: 'Log in', title: 'You will be directed to the log-in page.' });
            this.logoutButton = makeIcon({ text: 'Leave', title: 'Leave multi-user mode. You will be directed to database portal.' });
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
        this.loginButton.style.removeProperty('display');
        this.userList.style.display = 'none';
        this.logoutButton.style.display = 'none';
        //TODO fixme migrate web 8 -> 9 userDataRef.off("child_changed");
        off(userDataRef, "child_changed");
    }

    private loggedIn(stateID: string) {
        this.loginButton.style.display = 'none';
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


    private login() {
        const url = new URL(window.location.href);
        const { pathname, search, hash } = url;
        window.location.href = `${LOGIN_URL}${pathname}${search}${hash}`;
    }

    private logout(stateID: string) {
        //TODO fixme migrate web 8 -> 9 userDataRef.child(state_id).child("" + this.user.user_id + "").remove();
        // get(child(userDataRef, `${stateID}`)).remove()
        const userID = this.user.user_id;
        // set(ref(database, `/users/${stateID}/${userID}`).remove(), {state: null});
        // const updates:string = {};
        const updates: { [dbRef: string]: null } = {};
        updates[`/users/${stateID}/${userID}`] = null;
        console.log('updates', updates);
        update(ref(database), updates);
        window.location.href = DATABASE_PORTAL;
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
            console.log('updateUser was OK');
        })
        .catch((error) => {
            console.log('error in updateUser');
            console.log(error);
        });
}
