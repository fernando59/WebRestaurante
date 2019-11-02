import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UMedidaComponent } from './u-medida.component';

describe('UMedidaComponent', () => {
  let component: UMedidaComponent;
  let fixture: ComponentFixture<UMedidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UMedidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
