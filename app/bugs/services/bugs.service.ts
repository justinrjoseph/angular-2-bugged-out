import { Injectable } from '@angular/core';

import { FirebaseConfigService } from '../../core/services/firebase-config.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BugsService {
    private _bugsDatabase = this._firebaseConfigService.database.ref('/bugs'); 

    constructor(private _firebaseConfigService: FirebaseConfigService) {}

    getAddedBugs() : Observable<any> {
        return Observable.create(observable => {
            this._bugsDatabase.on('child_added',
            bug => { observable.next(bug.val()); },
            error => { observable.throw(error) })
        });
    }
}