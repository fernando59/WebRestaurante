import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaplatosComponent } from './tablaplatos.component';

describe('TablaplatosComponent', () => {
  let component: TablaplatosComponent;
  let fixture: ComponentFixture<TablaplatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaplatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaplatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
