import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { FIREBASE_CONFIG } from '../constants/constants'; 

@Injectable()
export class FirebaseConfigService {
    constructor() {
        this.configureApp();
    }

    configureApp() {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}