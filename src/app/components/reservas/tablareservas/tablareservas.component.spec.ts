import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablareservasComponent } from './tablareservas.component';

describe('TablareservasComponent', () => {
  let component: TablareservasComponent;
  let fixture: ComponentFixture<TablareservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablareservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablareservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
