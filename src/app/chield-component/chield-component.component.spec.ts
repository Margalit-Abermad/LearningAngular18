import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldComponentComponent } from './chield-component.component';

describe('ChieldComponentComponent', () => {
  let component: ChieldComponentComponent;
  let fixture: ComponentFixture<ChieldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChieldComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
