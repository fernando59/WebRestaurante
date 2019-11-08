import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamenuComponent } from './tablamenu.component';

describe('TablamenuComponent', () => {
  let component: TablamenuComponent;
  let fixture: ComponentFixture<TablamenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablamenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
