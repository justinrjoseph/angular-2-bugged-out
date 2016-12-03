import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { BugsModule } from './bugs/bugs.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        BugsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}