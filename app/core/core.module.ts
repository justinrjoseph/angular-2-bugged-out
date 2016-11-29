import { NgModule, ModuleWithProviders, Optional, SkipSelf  } from '@angular/core';

import { FirebaseConfigService } from './services/firebase-config.service';

@NgModule({
    
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if ( parentModule ) {
            throw new Error('CoreModule already exists. Only import in the root/app module.');
        }
    }

    static forRoot() : ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [ FirebaseConfigService ] 
        };
    }
}