import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sae301Component } from './sae301.component';

describe('Sae301Component', () => {
  let component: Sae301Component;
  let fixture: ComponentFixture<Sae301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sae301Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sae301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
