import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmesaComponent } from './modalmesa.component';

describe('ModalmesaComponent', () => {
  let component: ModalmesaComponent;
  let fixture: ComponentFixture<ModalmesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalmesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
