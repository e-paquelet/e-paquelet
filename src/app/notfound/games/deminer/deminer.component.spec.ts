import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeminerComponent } from './deminer.component';

describe('DeminerComponent', () => {
  let component: DeminerComponent;
  let fixture: ComponentFixture<DeminerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeminerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeminerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
