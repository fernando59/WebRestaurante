import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpedidoComponent } from './formpedido.component';

describe('FormpedidoComponent', () => {
  let component: FormpedidoComponent;
  let fixture: ComponentFixture<FormpedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormpedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
