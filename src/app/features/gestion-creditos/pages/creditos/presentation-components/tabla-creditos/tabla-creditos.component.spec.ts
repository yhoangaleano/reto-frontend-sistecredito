import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCreditosComponent } from './tabla-creditos.component';

describe('TablaCreditosComponent', () => {
  let component: TablaCreditosComponent;
  let fixture: ComponentFixture<TablaCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCreditosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
