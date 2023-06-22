/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IosComponent } from './ios.component';

describe('IosComponent', () => {
  let component: IosComponent;
  let fixture: ComponentFixture<IosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
