import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

// Módulos internos
import { NgxErrorsModule } from '@shared/directives';

import { FormularioClienteComponent } from './formulario-cliente.component';

describe('FormularioClienteComponent', () => {
  let component: FormularioClienteComponent;
  let fixture: ComponentFixture<FormularioClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioClienteComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NgxErrorsModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioClienteComponent);
    component = fixture.componentInstance;
    component.crearFormulario();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería retornar la expresión regular para validar solo números', () => {
    // tslint:disable-next-line: no-string-literal
    const result = component['obtenerExpersionRegularValidacionIdentificacion']('CC');
    expect(result).toEqual('^[0-9]+$');
  });

  it('Debería retornar la expresión regular para validar letras y números', () => {
    // tslint:disable-next-line: no-string-literal
    const result = component['obtenerExpersionRegularValidacionIdentificacion']('CE');
    expect(result).toEqual('^[a-zA-Z0-9]+$');
  });
});
