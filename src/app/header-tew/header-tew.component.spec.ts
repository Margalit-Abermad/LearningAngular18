import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTewComponent } from './header-tew.component';

describe('HeaderTewComponent', () => {
  let component: HeaderTewComponent;
  let fixture: ComponentFixture<HeaderTewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
