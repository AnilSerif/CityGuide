/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EdirneComponent } from './Edirne.component';

describe('EdirneComponent', () => {
  let component: EdirneComponent;
  let fixture: ComponentFixture<EdirneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdirneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdirneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
