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
var firebase_config_service_1 = require('../../core/services/firebase-config.service');
var Observable_1 = require('rxjs/Observable');
var BugsService = (function () {
    function BugsService(_firebaseConfigService) {
        this._firebaseConfigService = _firebaseConfigService;
        this._bugsDatabase = this._firebaseConfigService.database.ref('/bugs');
    }
    BugsService.prototype.getAddedBugs = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observable) {
            _this._bugsDatabase.on('child_added', function (bug) {
                var newBug = bug.val();
                newBug.id = bug.key;
                observable.next(newBug);
            }, function (error) { observable.throw(error); });
        });
    };
    BugsService.prototype.addBug = function (bug) {
        var newBugRef = this._bugsDatabase.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Justin',
            createdDate: Date.now()
        }).catch(function (error) { return console.error('Unable to add bug to Firebase: ', error); });
    };
    BugsService.prototype.changedListener = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observable) {
            _this._bugsDatabase.on('child_changed', function (bug) {
                var updatedBug = bug.val();
                updatedBug.id = bug.key;
                observable.next(updatedBug);
            }, function (error) { observable.throw(error); });
        });
    };
    BugsService.prototype.updateBug = function (bug) {
        var currentBugRef = this._bugsDatabase.child(bug.id);
        bug.id = null;
        bug.updatedBy = 'Christine';
        bug.updatedDate = Date.now();
        currentBugRef.update(bug);
    };
    BugsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService])
    ], BugsService);
    return BugsService;
}());
exports.BugsService = BugsService;
//# sourceMappingURL=bugs.service.js.map