import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Bug } from '../models/bug';

import { BugsService } from '../services/bugs.service';

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
    @Input() bug: Bug = new Bug(null, null, null, null, null, null, null, null, null);

    constructor(
        private _fb: FormBuilder,
        private _bugsService: BugsService
    ) {}

    ngOnInit() {
        this.configureForm();
    }

    configureForm() {
        // this._bugForm = new FormGroup({
        //     title: new FormControl(null, [Validators.required, forbiddenStringValidator(/puppy/i)]),
        //     status: new FormControl(1, Validators.required),
        //     severity: new FormControl(1, Validators.required),
        //     description: new FormControl(null, Validators.required)
        // });

        this._bugForm = this._fb.group({
            title: [null, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status: [1, Validators.required],
            severity: [1, Validators.required],
            description: [null, Validators.required]
        });
    }

    submitForm() {
         console.log(this._bugForm);
         this.addBug();
    }

    addBug() {
        this.bug.title = this._bugForm.value.title;
        this.bug.status = this._bugForm.value.status;
        this.bug.severity = this._bugForm.value.severity;
        this.bug.description = this._bugForm.value.description;

        this._bugsService.addBug(this.bug);
    }
}