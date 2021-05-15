import { Directive, Input, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { AbstractControl, FormGroupDirective, ValidationErrors } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

import { ErrorDetails, ErrorOptions } from './ngxerrors';

import { toArray } from './utils/toArray';

@Directive({
  selector: '[appNgxErrors]',
  exportAs: 'appNgxErrors'
})
export class NgxErrorsDirective implements OnChanges, OnDestroy, AfterViewInit {

  @Input('appNgxErrors')
  controlName: string;

  subject = new BehaviorSubject<ErrorDetails>({ control: null, errorName: '' });

  control: AbstractControl | any;

  ready: boolean;

  constructor(
    private form: FormGroupDirective
  ) {
    this.ready = false;
    this.controlName = '';
    this.control = null;
  }

  public get errors(): ValidationErrors | null {
    if (!this.ready) {
      return null;
    }
    return this.control.errors;
  }

  public get hasErrors(): boolean {
    return !!this.errors;
  }

  public hasError(name: string, conditions: ErrorOptions): boolean {
    return this.checkPropState('invalid', name, conditions);
  }

  public isValid(name: string, conditions: ErrorOptions): boolean {
    return this.checkPropState('valid', name, conditions);
  }

  public getError(name: string): any {
    if (!this.ready) {
      return;
    }
    return this.control.getError(name);
  }

  private checkPropState(prop: string, name: string, conditions: ErrorOptions): any {
    if (!this.ready) {
      return null;
    }
    const controlPropsState = (!conditions || toArray(conditions)
      .every((condition: string) => this.control.get(condition)));

    if (name.charAt(0) === '*') {
      return this.control.get(prop) && controlPropsState;
    }
    return (
      prop === 'valid' ? !this.control.hasError(name) : this.control.hasError(name) && controlPropsState
    );
  }

  private checkStatus(): void {
    const control = this.control;
    const errors = control.errors;
    this.ready = true;
    if (!errors) {
      return;
    }
    for (const errorName in errors) {
      if (errors.hasOwnProperty(errorName)) {
        this.subject.next({ control, errorName });
      }
    }
  }

  ngOnChanges(): void {
    this.control = this.form.control.get(this.controlName);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.checkStatus();
      this.control.statusChanges.subscribe(this.checkStatus.bind(this));
    });
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }

}
