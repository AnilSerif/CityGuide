/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnkaraComponent } from './ankara.component';

describe('AnkaraComponent', () => {
  let component: AnkaraComponent;
  let fixture: ComponentFixture<AnkaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnkaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
