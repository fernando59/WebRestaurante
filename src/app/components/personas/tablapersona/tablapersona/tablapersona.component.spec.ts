import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapersonaComponent } from './tablapersona.component';

describe('TablapersonaComponent', () => {
  let component: TablapersonaComponent;
  let fixture: ComponentFixture<TablapersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablapersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
