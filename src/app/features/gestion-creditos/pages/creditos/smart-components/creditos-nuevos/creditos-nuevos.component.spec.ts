import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosNuevosComponent } from './creditos-nuevos.component';

describe('CreditosNuevosComponent', () => {
  let component: CreditosNuevosComponent;
  let fixture: ComponentFixture<CreditosNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditosNuevosComponent ]
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
