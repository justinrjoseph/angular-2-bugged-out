import { Component, OnInit, Input } from '@angular/core';

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

    @Input() bug: Bug = this.newBug();

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
        //     title: new FormControl(null, [Validators.required, forbiddenStringValidator(/puppy/i)]),
        //     status: new FormControl(1, Validators.required),
        //     severity: new FormControl(1, Validators.required),
        //     description: new FormControl(null, Validators.required)
        // });
        if ( bug ) {
            this.bug = new Bug(
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
            title: [this.bug.title, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status: [this.bug.status, Validators.required],
            severity: [this.bug.severity, Validators.required],
            description: [this.bug.description, Validators.required]
        });
    }

    submitForm() {
        this.bug.title = this._bugForm.value.title;
        this.bug.status = this._bugForm.value.status;
        this.bug.severity = this._bugForm.value.severity;
        this.bug.description = this._bugForm.value.description;
        
        if ( this.bug.id ) {
            this.updateBug();
        } else {
            this.addBug();
        }
    }

    addBug() {
        this._bugsService.addBug(this.bug);
    }

    updateBug() {
        this._bugsService.updateBug(this.bug);
    }

    resetForm() {
        this._bugForm.reset({
            status: this._statuses.Logged,
            severity: this._severities.Low
        });

        this.resetBug(); 
    }

    resetBug() {
        this.bug = this.newBug();
    }
}