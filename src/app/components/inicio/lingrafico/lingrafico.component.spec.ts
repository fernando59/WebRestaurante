import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LingraficoComponent } from './lingrafico.component';

describe('LingraficoComponent', () => {
  let component: LingraficoComponent;
  let fixture: ComponentFixture<LingraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LingraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LingraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
