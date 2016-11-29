import { Injectable } from '@angular/core';

import { FirebaseConfigService } from '../../core/services/firebase-config.service';

@Injectable()
export class BugsService {
    constructor(private _firebaseConfigService: FirebaseConfigService) {}
}