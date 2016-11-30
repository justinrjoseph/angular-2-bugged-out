import { Component, OnInit } from '@angular/core';

import { BugsService } from '../services/bugs.service';

@Component({
    moduleId: module.id,
    selector: 'bug-list',
    templateUrl: 'bug-list.component.html',
    styleUrls: ['bug-list.component.css']
})
export class BugListComponent implements OnInit {
    constructor(private _bugsService: BugsService) {}

    ngOnInit() {
        this.getAddedBugs();
    }

    getAddedBugs() {
        this._bugsService.getAddedBugs()
                         .subscribe(bug => console.log(bug),
                                    error => console.error('Unable to retrieve added bug: ', error));
    }
}