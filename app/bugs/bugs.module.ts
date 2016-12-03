import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { BugsRoutingModule } from './bugs-routing.module'; 

import { BugListComponent } from './bug-list/bug-list.component';
import { BugDetailsComponent } from './bug-details/bug-details.component';

import { BugsService } from './services/bugs.service';

@NgModule({
	imports: [
		ReactiveFormsModule,
		SharedModule,
		BugsRoutingModule
	],
	declarations: [
		BugListComponent,
		BugDetailsComponent
	],
	providers: [ BugsService ]
})
export class BugsModule {}