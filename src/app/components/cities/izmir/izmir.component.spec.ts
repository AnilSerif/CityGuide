/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IzmirComponent } from './izmir.component';

describe('IzmirComponent', () => {
  let component: IzmirComponent;
  let fixture: ComponentFixture<IzmirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
