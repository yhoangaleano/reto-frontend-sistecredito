import { Directive, Input, OnInit, OnDestroy, DoCheck, Inject, HostBinding, forwardRef } from '@angular/core';

import { Subject, Subscription, Observable, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

import { NgxErrorsDirective } from './ngxerrors.directive';
import { ErrorOptions } from './ngxerrors';

import { toArray } from './utils/toArray';

@Directive({
  selector: '[appNgxError]'
})
export class NgxErrorDirective implements OnInit, OnDestroy, DoCheck {

  @Input() set ngxError(value: ErrorOptions) {
    this.errorNames = toArray(value);
  }

  @Input() set when(value: ErrorOptions) {
    this.rules = toArray(value);
  }

  @HostBinding('hidden')
  hidden: boolean;

  rules: string[] = [];

  errorNames: string[] = [];

  subscription: Subscription;

  // tslint:disable-next-line:variable-name
  _states: Subject<string[]>;

  states: Observable<string[]>;

  constructor(
    @Inject(forwardRef(() => NgxErrorsDirective))
    private appNgxErrors: NgxErrorsDirective,
  ) {
    this.hidden = true;
    this.rules = [];
    this.subscription = new Subscription();
    this._states = new Subject<string[]>();
    this.states = new Observable<string[]>();
  }

  ngOnInit(): void {
    this._states = new Subject<string[]>();
    this.states = this._states.asObservable()
      .pipe(
        distinctUntilChanged()
      );


    /* https://wsvincent.com/javascript-tilde/#:~:text=In%20JavaScript%2C%20the%20tilde%20~%20Bitwise,
     a%20String%20object%20passed%20in.&text=So%20if%20%2D1%20is%20returned,is%20not%20falsy%20is%20truthy  */
    const errors = this.appNgxErrors.subject.pipe(
      filter(Boolean),
      filter((obj: any) => !!~this.errorNames.indexOf(obj.errorName))
    );

    const states = this.states.pipe(
      map((state: string[]) => this.rules.every(rule => !!~state.indexOf(rule)))
    );

    this.subscription = combineLatest([states, errors])
      .subscribe(([state, error]) => this.hidden = !(state && error.control.hasError(error.errorName)));
  }

  ngDoCheck(): void {
    this._states.next(
      this.rules.filter((rule) => (this.appNgxErrors.control as any)[rule])
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
