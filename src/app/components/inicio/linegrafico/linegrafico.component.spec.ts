import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinegraficoComponent } from './linegrafico.component';

describe('LinegraficoComponent', () => {
  let component: LinegraficoComponent;
  let fixture: ComponentFixture<LinegraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinegraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinegraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
