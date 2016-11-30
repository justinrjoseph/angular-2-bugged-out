import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { BugsRoutingModule } from './bugs-routing.module'; 

import { BugListComponent } from './bug-list/bug-list.component';
import { BugDetailsComponent } from './bug-details/bug-details.component';

import { BugsService } from './services/bugs.service';

@NgModule({
	declarations: [
		BugListComponent,
		BugDetailsComponent
	],
	imports: [
		SharedModule,
		BugsRoutingModule
	],
	providers: [ BugsService ]
})
export class BugsModule {}