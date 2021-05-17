import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse } from '@angular/common/http';

// Rxjs
import { throwError } from 'rxjs';

// Environments
import { environment } from '@env';

import { ValidarRespuestaInterceptor } from './validar-respuesta.interceptor';

describe('ValidarRespuestaInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let client: HttpClient;
  let interceptor: ValidarRespuestaInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ValidarRespuestaInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ValidarRespuestaInterceptor,
          multi: true,
        },
      ],
    });
    interceptor = TestBed.inject(ValidarRespuestaInterceptor);
    client = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('Debería realizar la petición', () => {
    const fakeUrl = 'https://api.github.com/anything';
    client.get(fakeUrl).subscribe();
    const requests = httpTestingController.expectOne(fakeUrl);
    expect(requests.request.method).toBe('GET');
  });

  it('Debería capturar el error en el interceptor', async (done) => {
    let httpRequestSpy;
    let httpHandlerSpy;
    const error = { status: 400, statusText: 'error' };

    const spy = spyOn<any>(interceptor, 'handleError');

    httpRequestSpy = jasmine.createSpyObj('HttpRequest', ['doesNotMatter']);
    httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    httpHandlerSpy.handle.and.returnValue(throwError(error));

    interceptor.intercept(httpRequestSpy, httpHandlerSpy).subscribe({
      error: () => {
        done();
      },
      complete: () => {
        done();
      }
    });
    expect(spy).toHaveBeenCalled();
  });

  it('Debería llamar el método para mostrar el error en consola', async (done) => {
    const error = { status: 400, statusText: 'error' };
    const spy = spyOn<any>(interceptor, 'showErrorAlert');
    // tslint:disable-next-line: no-string-literal
    interceptor['handleError'](new HttpErrorResponse({ error })).subscribe({
      error: () => {
        done();
      },
      complete: () => {
        done();
      }
    });
    expect(spy).toHaveBeenCalled();
  });

  it('Debería mostrar en consola el error', () => {
    const error = { status: 400, statusText: 'error' };
    spyOn(console, 'log');
    // tslint:disable-next-line: no-string-literal
    interceptor['showErrorAlert'](new HttpErrorResponse({ error }));
    expect(console.log).toHaveBeenCalled();
  });

  it('Debería evitar mostrar en consola el error', () => {
    environment.production = true;
    const error = { status: 400, statusText: 'error' };
    spyOn(console, 'log');
    // tslint:disable-next-line: no-string-literal
    interceptor['showErrorAlert'](new HttpErrorResponse({ error }));
    expect(console.log).not.toHaveBeenCalled();
  });
});
