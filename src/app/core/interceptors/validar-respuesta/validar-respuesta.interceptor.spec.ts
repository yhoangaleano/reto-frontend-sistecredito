import { TestBed } from '@angular/core/testing';

import { ValidarRespuestaInterceptor } from './validar-respuesta.interceptor';

describe('ValidarRespuestaInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ValidarRespuestaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ValidarRespuestaInterceptor = TestBed.inject(ValidarRespuestaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
