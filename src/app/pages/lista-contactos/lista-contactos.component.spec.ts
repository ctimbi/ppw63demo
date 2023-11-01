import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContactosComponent } from './lista-contactos.component';

describe('ListaContactosComponent', () => {
  let component: ListaContactosComponent;
  let fixture: ComponentFixture<ListaContactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaContactosComponent]
    });
    fixture = TestBed.createComponent(ListaContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
