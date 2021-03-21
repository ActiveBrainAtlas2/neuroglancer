import { makeIcon } from 'neuroglancer/widget/icon';
import { userDataRef } from 'neuroglancer/services/firebase';
import { registerEventListener } from '../util/disposable';
import { User } from 'neuroglancer/services/user';
import { getLocationBar, StateAPI } from 'neuroglancer/services/state_loader';
import { AppSettings } from "neuroglancer/services/service";
import './user_loader.css';


export class UserLoader {
    element = document.createElement('div');
    private userList: HTMLElement;
    users: any = [];
    private stateAPI: StateAPI;
    private user: User;


    constructor() {
        this.stateAPI = new StateAPI(
            AppSettings.API_ENDPOINT + '/session',
            AppSettings.API_ENDPOINT + '/neuroglancer'
        );

        const locationVariables = getLocationBar();
        

        if (('stateID' in locationVariables) && (typeof locationVariables['stateID'] !== 'undefined')) {
            const stateID = locationVariables['stateID'];

            this.stateAPI.getUser().then(jsonUser => {
                this.user = jsonUser;
            })

            const usersRef = userDataRef.child(stateID).orderByKey();
            usersRef.once("value").then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    this.users.push(childSnapshot.val());
                });
                this.element.classList.add('user-loader');
                this.userList = makeIcon({ text: this.users.toString(), title: 'Logout' });
                registerEventListener(this.userList, 'click', () => {
                    this.logout(stateID);
                });
                this.element.appendChild(this.userList);
            });

            userDataRef.on("child_changed", (snapshot) => {
                if (snapshot.key === stateID) {
                    this.users = [];
                    snapshot.forEach((childSnapshot) => {
                        this.users.push(childSnapshot.val());
                    });
                    this.userList.textContent = this.users.toString();
                }
            });
        }
    }


    private logout(state_id: string) {
        userDataRef.child(state_id).child("" + this.user.user_id + "").remove();
        window.location.href = 'https://activebrainatlas.ucsd.edu/activebrainatlas/admin/neuroglancer/urlmodel/';
    }




}