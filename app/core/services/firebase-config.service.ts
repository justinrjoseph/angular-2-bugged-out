import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
require('firebase/database');

import { FIREBASE_CONFIG } from '../constants/constants'; 

@Injectable()
export class FirebaseConfigService {
    private _database: firebase.database.Database;

    public get database() {
        return this._database;
    }

    constructor() {
        this.configureApp();
        this.configureDatabase();
    }

    configureApp() {
        firebase.initializeApp(FIREBASE_CONFIG);
    }

    configureDatabase() {
        this._database = firebase.database();
    }
}