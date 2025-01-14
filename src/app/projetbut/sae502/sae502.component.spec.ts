import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sae502Component } from './sae502.component';

describe('Sae502Component', () => {
  let component: Sae502Component;
  let fixture: ComponentFixture<Sae502Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sae502Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sae502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
