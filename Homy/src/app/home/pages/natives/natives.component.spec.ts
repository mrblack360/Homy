import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativesComponent } from './natives.component';

describe('NativesComponent', () => {
  let component: NativesComponent;
  let fixture: ComponentFixture<NativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
