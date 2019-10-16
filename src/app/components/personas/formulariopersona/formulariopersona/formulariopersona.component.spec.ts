import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariopersonaComponent } from './formulariopersona.component';

describe('FormulariopersonaComponent', () => {
  let component: FormulariopersonaComponent;
  let fixture: ComponentFixture<FormulariopersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariopersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariopersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
