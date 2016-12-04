import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Bug } from '../models/bug';

import { STATUSES, SEVERITIES } from '../../shared/constants/constants';

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
    private _statuses = STATUSES;
    private _statusesArr: string[] = [];
    private _severities = SEVERITIES;
    private _severitiesArr: string[] = [];

    private _bug: Bug = this.newBug();

    constructor(
        private _fb: FormBuilder,
        private _bugsService: BugsService
    ) {}

    ngOnInit() {
        this._statusesArr = Object.keys(this._statuses).filter(Number);
        this._severitiesArr = Object.keys(this._severities).filter(Number);
        this.configureForm();
    }

    newBug() {
        return new Bug(
            null,
            null,
            null,
            this._statuses.Logged,
            this._severities.Low,
            null,
            null,
            null,
            null
        );
    }

    configureForm(bug?: Bug) {
        // this._bugForm = new FormGroup({
        //     title: new FormControl(this.bug.title, [Validators.required, forbiddenStringValidator(/puppy/i)]),
        //     status: new FormControl(this.bug.status, Validators.required),
        //     severity: new FormControl(this.bug.severity, Validators.required),
        //     description: new FormControl(this.bug.description, Validators.required)
        // });
        if ( bug ) {
            this._bug = new Bug(
                bug.id,
                bug.title,
                bug.description,
                bug.status,
                bug.severity,
                bug.createdBy,
                bug.createdDate,
                bug.updatedBy,
                bug.updatedDate
            );
        }
        
        this._bugForm = this._fb.group({
            title: [this._bug.title, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status: [this._bug.status, Validators.required],
            severity: [this._bug.severity, Validators.required],
            description: [this._bug.description, Validators.required]
        });
    }

    submitForm() {
        this._bug.title = this._bugForm.value.title;
        this._bug.status = this._bugForm.value.status;
        this._bug.severity = this._bugForm.value.severity;
        this._bug.description = this._bugForm.value.description;
        
        if ( this._bug.id ) {
            this.updateBug();
        } else {
            this.addBug();
        }
    }

    addBug() {
        this._bugsService.addBug(this._bug);
    }

    updateBug() {
        this._bugsService.updateBug(this._bug);
    }

    resetForm() {
        this._bugForm.reset({
            status: this._statuses.Logged,
            severity: this._severities.Low
        });

        this.resetBug(); 
    }

    resetBug() {
        this._bug = this.newBug();
    }
}