import { TestBed } from '@angular/core/testing';

import { AgregarEncabezadosPeticionInterceptor } from './agregar-encabezados-peticion.interceptor';

describe('AgregarEncabezadosPeticionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AgregarEncabezadosPeticionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AgregarEncabezadosPeticionInterceptor = TestBed.inject(AgregarEncabezadosPeticionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
