import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactoComponent } from './view-contacto.component';

describe('ViewContactoComponent', () => {
  let component: ViewContactoComponent;
  let fixture: ComponentFixture<ViewContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContactoComponent]
    });
    fixture = TestBed.createComponent(ViewContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
