import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablabebidasComponent } from './tablabebidas.component';

describe('TablabebidasComponent', () => {
  let component: TablabebidasComponent;
  let fixture: ComponentFixture<TablabebidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablabebidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablabebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
