import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'bugs', pathMatch: 'full' },
            { path: 'bugs', component: BugListComponent },
            { path: '**', redirectTo: 'bugs' }
        ])
    ],
    exports: [ RouterModule ]
})
export class BugsRoutingModule {} 