import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamesasComponent } from './tablamesas.component';

describe('TablamesasComponent', () => {
  let component: TablamesasComponent;
  let fixture: ComponentFixture<TablamesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablamesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablamesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
