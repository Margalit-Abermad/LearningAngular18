import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExample1Component } from './binding-example1.component';

describe('BindingExample1Component', () => {
  let component: BindingExample1Component;
  let fixture: ComponentFixture<BindingExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingExample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
