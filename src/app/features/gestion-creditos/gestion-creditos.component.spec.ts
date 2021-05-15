import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCreditosComponent } from './gestion-creditos.component';

describe('GestionCreditosComponent', () => {
  let component: GestionCreditosComponent;
  let fixture: ComponentFixture<GestionCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCreditosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
