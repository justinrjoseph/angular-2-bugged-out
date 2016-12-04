import { Pipe, PipeTransform } from '@angular/core';

import { STATUSES } from '../constants/constants';

@Pipe({ name: 'status' })
export class StatusPipe implements PipeTransform {
  private _statuses = STATUSES;

  transform(statusNumber: number) {
    return this._statuses[statusNumber];
  }
}