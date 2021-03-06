import { Injectable } from '@angular/core';

import { FirebaseConfigService } from '../../core/services/firebase-config.service';

import { Observable } from 'rxjs/Observable';

import { Bug } from '../models/bug';

@Injectable()
export class BugsService {
    private _bugsDatabase = this._firebaseConfigService.database.ref('/bugs'); 

    constructor(private _firebaseConfigService: FirebaseConfigService) {}

    getAddedBugs() : Observable<any> {
        return Observable.create(observable => {
            this._bugsDatabase.on('child_added',
                bug => {
                    const newBug = bug.val() as Bug;
                    newBug.id = bug.key; 
                    observable.next(newBug);
                },
                error => { observable.throw(error) }
            );
        });
    }

    addBug(bug: Bug) {
        const newBugRef = this._bugsDatabase.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Justin',
            createdDate: Date.now()
        }).catch(
            error => console.error('Unable to add bug to Firebase: ', error)
        );
    }

    changedListener() : Observable<any> {
        return Observable.create(observable => {
            this._bugsDatabase.on('child_changed',
            bug => {
                const updatedBug = bug.val() as Bug;
                updatedBug.id = bug.key;
                observable.next(updatedBug);
            },
            error => { observable.throw(error) });
        });
    }

    updateBug(bug: Bug) {
        const currentBugRef = this._bugsDatabase.child(bug.id);

        bug.id = null;
        bug.updatedBy = 'Christine';
        bug.updatedDate = Date.now();

        currentBugRef.update(bug);
    }
}