import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';

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
            title: new FormControl(null, [Validators.required, forbiddenStringValidator(/puppy/i)]),
            status: new FormControl(1, Validators.required),
            severity: new FormControl(1, Validators.required),
            description: new FormControl(null, Validators.required)
        });
    }

    submitForm() {
         console.log(this._bugForm);
    }
}