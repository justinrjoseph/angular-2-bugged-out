import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BugsModule } from './bugs/bugs.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        BugsModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}