import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sae503Component } from './sae503.component';

describe('Sae503Component', () => {
  let component: Sae503Component;
  let fixture: ComponentFixture<Sae503Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sae503Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sae503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
