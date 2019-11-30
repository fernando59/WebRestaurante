import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaChildComponent } from './reserva-child.component';

describe('ReservaChildComponent', () => {
  let component: ReservaChildComponent;
  let fixture: ComponentFixture<ReservaChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
