import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto1Component } from './reto1.component';

describe('Reto1Component', () => {
  let component: Reto1Component;
  let fixture: ComponentFixture<Reto1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reto1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
