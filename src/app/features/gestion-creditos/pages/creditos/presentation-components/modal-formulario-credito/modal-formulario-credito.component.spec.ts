import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormularioCreditoComponent } from './modal-formulario-credito.component';

describe('ModalFormularioCreditoComponent', () => {
  let component: ModalFormularioCreditoComponent;
  let fixture: ComponentFixture<ModalFormularioCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormularioCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormularioCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
