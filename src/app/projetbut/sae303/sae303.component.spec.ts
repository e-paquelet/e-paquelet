import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sae303Component } from './sae303.component';

describe('Sae303Component', () => {
  let component: Sae303Component;
  let fixture: ComponentFixture<Sae303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sae303Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sae303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
