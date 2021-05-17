import { ComponentFixture, TestBed } from '@angular/core/testing';

// Rxjs
import { Observable, of } from 'rxjs';

// NgxSpinner
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

// NgxToastr
import { ToastrModule, ToastrService } from 'ngx-toastr';

// Servicios Http
import { CreditosService } from '@app/features/gestion-creditos/http-services';

// Modelos
import { InformacionCreditoNuevo } from '@app/features/gestion-creditos/models/domains';

import { CreditosNuevosComponent } from './creditos-nuevos.component';

class CreditosServiceFake {

  objetoPrueba: InformacionCreditoNuevo = {
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

  public obtenerInformacionCreditosNuevos(): Observable<Array<InformacionCreditoNuevo>> {
    return of([this.objetoPrueba]);
  }

  public crearInformacionCreditosNuevos(informacionCreditoNuevo: InformacionCreditoNuevo): Observable<InformacionCreditoNuevo> {
    return of(this.objetoPrueba);
  }

  public modificarInformacionCreditosNuevos(informacionCreditoNuevo: InformacionCreditoNuevo): Observable<InformacionCreditoNuevo> {
    return of(this.objetoPrueba);
  }
}


describe('CreditosNuevosComponent', () => {
  let component: CreditosNuevosComponent;
  let fixture: ComponentFixture<CreditosNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditosNuevosComponent],
      imports: [
        NgxSpinnerModule,
        ToastrModule.forRoot({
          timeOut: 5000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        }),
      ],
      providers: [
        NgxSpinnerService,
        ToastrService,
        { provide: CreditosService, useClass: CreditosServiceFake },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
