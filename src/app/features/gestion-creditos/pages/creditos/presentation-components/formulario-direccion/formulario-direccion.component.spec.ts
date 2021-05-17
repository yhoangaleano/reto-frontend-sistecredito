import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

// Módulos internos
import { NgxErrorsModule } from '@shared/directives';

import { FormularioDireccionComponent } from './formulario-direccion.component';

describe('FormularioDireccionComponent', () => {
  let component: FormularioDireccionComponent;
  let fixture: ComponentFixture<FormularioDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDireccionComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NgxErrorsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDireccionComponent);
    component = fixture.componentInstance;
    component.crearFormulario();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
