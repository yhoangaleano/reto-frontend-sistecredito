import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

// Rxjs
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// Environments
import { environment } from '@env';

@Injectable()
export class ValidarRespuestaInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(
    error: HttpErrorResponse
  ): Observable<never> {
    this.showErrorAlert(error);
    return throwError(error);
  }

  private showErrorAlert(error: any): void {
    if (!environment.production) {
      console.log(error);
    }
  }
}
