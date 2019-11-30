import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablareservaComponent } from './tablareserva.component';

describe('TablareservaComponent', () => {
  let component: TablareservaComponent;
  let fixture: ComponentFixture<TablareservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablareservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablareservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
