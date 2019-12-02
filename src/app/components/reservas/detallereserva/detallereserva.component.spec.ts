import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallereservaComponent } from './detallereserva.component';

describe('DetallereservaComponent', () => {
  let component: DetallereservaComponent;
  let fixture: ComponentFixture<DetallereservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallereservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallereservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
