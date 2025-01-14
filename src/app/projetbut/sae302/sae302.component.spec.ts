import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sae302Component } from './sae302.component';

describe('Sae302Component', () => {
  let component: Sae302Component;
  let fixture: ComponentFixture<Sae302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sae302Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sae302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
