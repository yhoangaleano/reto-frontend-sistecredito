import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

// NgxToastr
import { ToastrModule, ToastrService } from 'ngx-toastr';

// Servicios Utilidades
import { ValidarFormulariosService } from '@shared/utils';

import { FormularioCreditosNuevosComponent } from './formulario-creditos-nuevos.component';
import { FormularioClienteComponent } from './../formulario-cliente/formulario-cliente.component';
import { FormularioDireccionComponent } from './../formulario-direccion/formulario-direccion.component';
import { FormularioCreditoComponent } from './../formulario-credito/formulario-credito.component';

describe('FormularioCreditosNuevosComponent', () => {
  let component: FormularioCreditosNuevosComponent;
  let fixture: ComponentFixture<FormularioCreditosNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FormularioClienteComponent,
        FormularioDireccionComponent,
        FormularioCreditoComponent,
        FormularioCreditosNuevosComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot({
          timeOut: 5000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        }),
      ],
      providers: [
        ToastrService,
        ValidarFormulariosService,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCreditosNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
