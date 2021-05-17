import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CreditosService } from './creditos.service';

describe('Servicio CreditosService', () => {
  let httpTestingController: HttpTestingController;
  let creditosService: CreditosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreditosService],
    });
    creditosService = TestBed.inject(CreditosService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Debería crear el servicio', () => {
    expect(creditosService).toBeTruthy();
  });

  it('Debería retornar lista de créditos', () => {
    const mockInformacionCreditosNuevos = [
      {
        id: 1,
        credito: {
          valorCredito: 7800000,
          numeroCuotas: 24
        },
        cliente: {
          nombres: 'Yhoan Andres',
          apellidos: 'Galeano Urrea',
          celular: '3224536781',
          correo: 'yagaleano@gmail.com',
          tipoIdentificacion: 'CC',
          identificacion: '1234567890'
        },
        ubicacion: {
          direccion: 'Calle 77 cc # 37 a 24 int 201',
          ciudad: 'Medellín',
          barrio: 'Robledo Bello Horizonte'
        }
      }
    ];

    creditosService.obtenerInformacionCreditosNuevos().subscribe(informacionCreditosNuevos => {
      expect(informacionCreditosNuevos[0].id).toEqual(1);
      expect(informacionCreditosNuevos[0].cliente.identificacion).toEqual(
        '1234567890'
      );
    });

    // tslint:disable-next-line: no-string-literal
    const req = httpTestingController.expectOne(creditosService['urlApi']);
    req.flush(mockInformacionCreditosNuevos);
  });
});
