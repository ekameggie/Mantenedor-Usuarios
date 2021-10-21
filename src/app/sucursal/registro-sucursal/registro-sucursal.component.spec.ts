import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSucursalComponent } from './registro-sucursal.component';

describe('RegistroSucursalComponent', () => {
  let component: RegistroSucursalComponent;
  let fixture: ComponentFixture<RegistroSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
