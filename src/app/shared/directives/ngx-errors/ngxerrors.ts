import { AbstractControl } from '@angular/forms';

export type ErrorOptions = string | string[];

export interface ErrorDetails {
  control: AbstractControl | any;
  errorName: string;
}
