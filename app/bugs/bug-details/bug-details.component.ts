import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'bug-details',
    templateUrl: 'bug-details.component.html',
    styleUrls: ['bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {
    private _modalId = "bugModal";
    private _bugForm: FormGroup;

    ngOnInit() {
        this.configureForm();
    }

    configureForm() {
        this._bugForm = new FormGroup({
            title: new FormControl(),
            status: new FormControl(1),
            severity: new FormControl(1),
            description: new FormControl()
        });
    }

    submitForm() {
         console.log(this._bugForm);
    }
}