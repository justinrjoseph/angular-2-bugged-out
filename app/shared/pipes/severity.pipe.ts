import { Pipe, PipeTransform } from '@angular/core';

import { SEVERITIES } from '../constants/constants';

@Pipe({ name: 'severity' })
export class SeverityPipe implements PipeTransform {
  private _severities = SEVERITIES;

  transform(severityNumber: number) {
    return this._severities[severityNumber];
  }
}