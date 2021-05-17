import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

// Módulos internos
import { NgxErrorsModule } from '@shared/directives';

// Ng2CurrencyMask
import { CURRENCY_MASK_CONFIG, CurrencyMaskModule } from 'ng2-currency-mask';

// Constantes
import { CONFIGURACION_NG2_CURRENCY_MASK } from '@app/features/gestion-creditos/constants';

import { FormularioCreditoComponent } from './formulario-credito.component';

describe('FormularioCreditoComponent', () => {
  let component: FormularioCreditoComponent;
  let fixture: ComponentFixture<FormularioCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCreditoComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NgxErrorsModule,
        CurrencyMaskModule,
      ],
      providers: [
        {
          provide: CURRENCY_MASK_CONFIG, useValue: CONFIGURACION_NG2_CURRENCY_MASK
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCreditoComponent);
    component = fixture.componentInstance;
    component.crearFormulario();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
