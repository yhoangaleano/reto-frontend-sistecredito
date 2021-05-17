import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCreditosNuevosComponent } from './formulario-creditos-nuevos.component';

describe('FormularioCreditosNuevosComponent', () => {
  let component: FormularioCreditosNuevosComponent;
  let fixture: ComponentFixture<FormularioCreditosNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCreditosNuevosComponent ]
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
