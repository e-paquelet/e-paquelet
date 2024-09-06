import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktaktoeComponent } from './tiktaktoe.component';

describe('TiktaktoeComponent', () => {
  let component: TiktaktoeComponent;
  let fixture: ComponentFixture<TiktaktoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktaktoeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktaktoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
