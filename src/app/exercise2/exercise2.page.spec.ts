import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise2Page } from './exercise2.page';

describe('Exercise2Page', () => {
  let component: Exercise2Page;
  let fixture: ComponentFixture<Exercise2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
