import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarbebidasComponent } from './editarbebidas.component';

describe('EditarbebidasComponent', () => {
  let component: EditarbebidasComponent;
  let fixture: ComponentFixture<EditarbebidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarbebidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarbebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
