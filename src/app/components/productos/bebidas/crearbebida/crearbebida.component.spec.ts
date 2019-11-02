import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearbebidaComponent } from './crearbebida.component';

describe('CrearbebidaComponent', () => {
  let component: CrearbebidaComponent;
  let fixture: ComponentFixture<CrearbebidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearbebidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearbebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
