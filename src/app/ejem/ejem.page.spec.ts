import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemPage } from './ejem.page';

describe('EjemPage', () => {
  let component: EjemPage;
  let fixture: ComponentFixture<EjemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
