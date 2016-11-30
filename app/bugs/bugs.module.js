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
var shared_module_1 = require('../shared/shared.module');
var bugs_routing_module_1 = require('./bugs-routing.module');
var bug_list_component_1 = require('./bug-list/bug-list.component');
var bug_details_component_1 = require('./bug-details/bug-details.component');
var bugs_service_1 = require('./services/bugs.service');
var BugsModule = (function () {
    function BugsModule() {
    }
    BugsModule = __decorate([
        core_1.NgModule({
            declarations: [
                bug_list_component_1.BugListComponent,
                bug_details_component_1.BugDetailsComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                bugs_routing_module_1.BugsRoutingModule
            ],
            providers: [bugs_service_1.BugsService]
        }), 
        __metadata('design:paramtypes', [])
    ], BugsModule);
    return BugsModule;
}());
exports.BugsModule = BugsModule;
//# sourceMappingURL=bugs.module.js.map