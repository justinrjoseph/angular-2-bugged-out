import { Component, OnInit } from '@angular/core';

import { BugsService } from '../services/bugs.service';

import { Bug } from '../models/bug';

@Component({
    moduleId: module.id,
    selector: 'bug-list',
    templateUrl: 'bug-list.component.html',
    styleUrls: ['bug-list.component.css']
})
export class BugListComponent implements OnInit {
    private _bugs: Bug[] = [];

    constructor(private _bugsService: BugsService) {}

    ngOnInit() {
        this.getAddedBugs();
        this.getUpdatedBugs();
    }

    getAddedBugs() {
        this._bugsService.getAddedBugs()
                         .subscribe(
                             bug => {
                                 this._bugs.push(bug);
                             },
                             error => {
                                 console.error('Unable to retrieve added bug: ', error)
                             }
                         );
    }

    getUpdatedBugs() {
        this._bugsService.changedListener()
                         .subscribe(
                             updatedBug => {
                                const bugIndex = this._bugs.map(index => index.id).indexOf(updatedBug.id);
                                this._bugs[bugIndex] = updatedBug;
                             },
                             error => console.error('Unable to get updated bug: ', error));
    }
}