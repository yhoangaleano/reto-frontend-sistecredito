import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AgregarEncabezadosPeticionInterceptor } from './agregar-encabezados-peticion.interceptor';

describe('AgregarEncabezadosPeticionInterceptor', () => {

  let httpTestingController: HttpTestingController;
  let client: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AgregarEncabezadosPeticionInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AgregarEncabezadosPeticionInterceptor,
          multi: true,
        },
      ],
    });
    client = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const interceptor: AgregarEncabezadosPeticionInterceptor = TestBed.inject(AgregarEncabezadosPeticionInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('Debería agregar el encabezado del Content-Type', () => {
    client.get('https://api.github.com/anything').subscribe();
    const requests = httpTestingController.match({ method: 'get' });
    expect(requests[0].request.headers.has('Content-Type')).toEqual(true);
  });

  it('Debería capturar el error en el interceptor', async (done) => {
    const fakeUrl = 'https://api.github.com/anything';
    const error = new ErrorEvent('Network error');
    client.get(fakeUrl).subscribe({
      error: () => {
        done();
      },
      complete: () => {
        done();
      }
    });
    const requests = httpTestingController.expectOne(fakeUrl);
    requests.error(error);
    expect(requests.request.body).toBeFalsy();
  });
});
