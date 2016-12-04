"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var bug_1 = require('../models/bug');
var constants_1 = require('../../shared/constants/constants');
var bugs_service_1 = require('../services/bugs.service');
var forbidden_string_validator_1 = require('../../shared/validation/forbidden-string.validator');
var BugDetailsComponent = (function () {
    function BugDetailsComponent(_fb, _bugsService) {
        this._fb = _fb;
        this._bugsService = _bugsService;
        this._modalId = "bugModal";
        this._statuses = constants_1.STATUSES;
        this._statusesArr = [];
        this._severities = constants_1.SEVERITIES;
        this._severitiesArr = [];
        this._bug = this.newBug();
    }
    BugDetailsComponent.prototype.ngOnInit = function () {
        this._statusesArr = Object.keys(this._statuses).filter(Number);
        this._severitiesArr = Object.keys(this._severities).filter(Number);
        this.configureForm();
    };
    BugDetailsComponent.prototype.newBug = function () {
        return new bug_1.Bug(null, null, null, this._statuses.Logged, this._severities.Low, null, null, null, null);
    };
    BugDetailsComponent.prototype.configureForm = function (bug) {
        // this._bugForm = new FormGroup({
        //     title: new FormControl(this.bug.title, [Validators.required, forbiddenStringValidator(/puppy/i)]),
        //     status: new FormControl(this.bug.status, Validators.required),
        //     severity: new FormControl(this.bug.severity, Validators.required),
        //     description: new FormControl(this.bug.description, Validators.required)
        // });
        if (bug) {
            this._bug = new bug_1.Bug(bug.id, bug.title, bug.description, bug.status, bug.severity, bug.createdBy, bug.createdDate, bug.updatedBy, bug.updatedDate);
        }
        this._bugForm = this._fb.group({
            title: [this._bug.title, [forms_1.Validators.required, forbidden_string_validator_1.forbiddenStringValidator(/puppy/i)]],
            status: [this._bug.status, forms_1.Validators.required],
            severity: [this._bug.severity, forms_1.Validators.required],
            description: [this._bug.description, forms_1.Validators.required]
        });
    };
    BugDetailsComponent.prototype.submitForm = function () {
        this._bug.title = this._bugForm.value.title;
        this._bug.status = this._bugForm.value.status;
        this._bug.severity = this._bugForm.value.severity;
        this._bug.description = this._bugForm.value.description;
        if (this._bug.id) {
            this.updateBug();
        }
        else {
            this.addBug();
        }
    };
    BugDetailsComponent.prototype.addBug = function () {
        this._bugsService.addBug(this._bug);
    };
    BugDetailsComponent.prototype.updateBug = function () {
        this._bugsService.updateBug(this._bug);
    };
    BugDetailsComponent.prototype.resetForm = function () {
        this._bugForm.reset({
            status: this._statuses.Logged,
            severity: this._severities.Low
        });
        this.resetBug();
    };
    BugDetailsComponent.prototype.resetBug = function () {
        this._bug = this.newBug();
    };
    BugDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bug-details',
            templateUrl: 'bug-details.component.html',
            styleUrls: ['bug-details.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, bugs_service_1.BugsService])
    ], BugDetailsComponent);
    return BugDetailsComponent;
}());
exports.BugDetailsComponent = BugDetailsComponent;
//# sourceMappingURL=bug-details.component.js.map