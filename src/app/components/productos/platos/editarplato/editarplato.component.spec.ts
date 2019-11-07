import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarplatoComponent } from './editarplato.component';

describe('EditarplatoComponent', () => {
  let component: EditarplatoComponent;
  let fixture: ComponentFixture<EditarplatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarplatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarplatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
