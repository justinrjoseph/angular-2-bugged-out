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
var bugs_service_1 = require('../services/bugs.service');
var BugListComponent = (function () {
    function BugListComponent(_bugsService) {
        this._bugsService = _bugsService;
        this._bugs = [];
    }
    BugListComponent.prototype.ngOnInit = function () {
        this.getAddedBugs();
        this.getUpdatedBugs();
    };
    BugListComponent.prototype.getAddedBugs = function () {
        var _this = this;
        this._bugsService.getAddedBugs()
            .subscribe(function (bug) {
            _this._bugs.push(bug);
        }, function (error) {
            console.error('Unable to retrieve added bug: ', error);
        });
    };
    BugListComponent.prototype.getUpdatedBugs = function () {
        var _this = this;
        this._bugsService.changedListener()
            .subscribe(function (updatedBug) {
            var bugIndex = _this._bugs.map(function (index) { return index.id; }).indexOf(updatedBug.id);
            _this._bugs[bugIndex] = updatedBug;
        }, function (error) { return console.error('Unable to get updated bug: ', error); });
    };
    BugListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bug-list',
            templateUrl: 'bug-list.component.html',
            styleUrls: ['bug-list.component.css']
        }), 
        __metadata('design:paramtypes', [bugs_service_1.BugsService])
    ], BugListComponent);
    return BugListComponent;
}());
exports.BugListComponent = BugListComponent;
//# sourceMappingURL=bug-list.component.js.map