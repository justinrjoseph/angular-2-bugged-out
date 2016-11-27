import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { BugsRoutingModule } from './bugs-routing.module'; 

import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
	imports: [
		SharedModule,
		BugsRoutingModule
	],
	declarations: [ BugListComponent ]
})
export class BugsModule {}