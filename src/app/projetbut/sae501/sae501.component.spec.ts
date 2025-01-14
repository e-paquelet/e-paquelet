import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sae501Component } from './sae501.component';

describe('Sae501Component', () => {
  let component: Sae501Component;
  let fixture: ComponentFixture<Sae501Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sae501Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sae501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
