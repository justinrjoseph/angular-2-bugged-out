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
}