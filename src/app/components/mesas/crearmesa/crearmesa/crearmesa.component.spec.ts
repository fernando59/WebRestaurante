import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmesaComponent } from './crearmesa.component';

describe('CrearmesaComponent', () => {
  let component: CrearmesaComponent;
  let fixture: ComponentFixture<CrearmesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearmesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearmesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
