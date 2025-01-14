import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sae401Component } from './sae401.component';

describe('Sae401Component', () => {
  let component: Sae401Component;
  let fixture: ComponentFixture<Sae401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sae401Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sae401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
