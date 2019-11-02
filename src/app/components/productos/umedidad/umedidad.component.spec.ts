import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UMedidadComponent } from './umedidad.component';

describe('UMedidadComponent', () => {
  let component: UMedidadComponent;
  let fixture: ComponentFixture<UMedidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UMedidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UMedidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
