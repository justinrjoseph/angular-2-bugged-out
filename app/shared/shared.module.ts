import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusPipe } from './pipes/status.pipe';
import { SeverityPipe } from './pipes/severity.pipe';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        StatusPipe,
        SeverityPipe
    ],
    exports: [
        CommonModule,
        StatusPipe,
        SeverityPipe
    ]
})
export class SharedModule {}