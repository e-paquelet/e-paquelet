import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prog1Component } from './prog1.component';

describe('Prog1Component', () => {
  let component: Prog1Component;
  let fixture: ComponentFixture<Prog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prog1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
