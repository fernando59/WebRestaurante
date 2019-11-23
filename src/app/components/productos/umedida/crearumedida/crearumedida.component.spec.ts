import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearumedidaComponent } from './crearumedida.component';

describe('CrearumedidaComponent', () => {
  let component: CrearumedidaComponent;
  let fixture: ComponentFixture<CrearumedidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearumedidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearumedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
