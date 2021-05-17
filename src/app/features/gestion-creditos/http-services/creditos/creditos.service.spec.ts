import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CreditosService } from './creditos.service';

import { InformacionCreditoNuevo } from '@features/gestion-creditos/models';


describe('Servicio CreditosService', () => {
  let httpTestingController: HttpTestingController;
  let creditosService: CreditosService;
  let informacionCreditoNuevo: InformacionCreditoNuevo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreditosService],
    });
    creditosService = TestBed.inject(CreditosService);
    httpTestingController = TestBed.inject(HttpTestingController);

    informacionCreditoNuevo = {
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
    };

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Debería crear el servicio', () => {
    expect(creditosService).toBeTruthy();
  });

  it('Debería retornar lista de créditos', () => {
    const mockInformacionCreditosNuevos = [
      informacionCreditoNuevo
    ];

    creditosService.obtenerInformacionCreditosNuevos().subscribe(informacionCreditosNuevos => {
      expect(informacionCreditosNuevos[0].id).toEqual(1);
      expect(informacionCreditosNuevos[0].cliente.identificacion).toEqual(
        '1234567890'
      );
    });

    // tslint:disable-next-line: no-string-literal
    const req = httpTestingController.expectOne(creditosService['urlApi']);
    expect(req.request.method).toBe('GET');
    req.flush(mockInformacionCreditosNuevos);
  });

  it('Debería retornar crear un nuevo crédito', () => {
    const mockInformacionCreditoNuevo = { ...informacionCreditoNuevo };
    const informacionCreditoNuevoRequest = { ...informacionCreditoNuevo, id: null };

    creditosService.crearInformacionCreditosNuevos(informacionCreditoNuevoRequest).subscribe(
      informacionCreditoNuevoResponse => {
      expect(informacionCreditoNuevoResponse.id).toEqual(1);
      expect(informacionCreditoNuevoResponse.cliente.identificacion).toEqual(
        '1234567890'
      );
    }
    );

    // tslint:disable-next-line: no-string-literal
    const req = httpTestingController.expectOne(creditosService['urlApi']);
    expect(req.request.method).toBe('POST');
    req.flush(mockInformacionCreditoNuevo);
  });

  it('Debería retornar actualizar un nuevo crédito', () => {
    const mockInformacionCreditoNuevo = { ...informacionCreditoNuevo };
    mockInformacionCreditoNuevo.cliente.identificacion = '1234567800';

    const informacionCreditoNuevoRequest = { ...informacionCreditoNuevo, id: null };
    informacionCreditoNuevoRequest.cliente.identificacion = '1234567800';

    creditosService.modificarInformacionCreditosNuevos(informacionCreditoNuevoRequest).subscribe(
      informacionCreditoNuevoResponse => {
      expect(informacionCreditoNuevoResponse.id).toEqual(1);
      expect(informacionCreditoNuevoResponse.cliente.identificacion).toEqual(
        '1234567800'
      );
    }
    );

    // tslint:disable-next-line: no-string-literal
    const req = httpTestingController.expectOne(`${creditosService['urlApi']}${informacionCreditoNuevoRequest.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockInformacionCreditoNuevo);
  });
});
