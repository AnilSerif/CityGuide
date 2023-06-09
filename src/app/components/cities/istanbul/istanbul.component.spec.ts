/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IstanbulComponent } from './istanbul.component';

describe('IstanbulComponent', () => {
  let component: IstanbulComponent;
  let fixture: ComponentFixture<IstanbulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstanbulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstanbulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
