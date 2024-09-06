import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetbutComponent } from './projetbut.component';

describe('ProjetbutComponent', () => {
  let component: ProjetbutComponent;
  let fixture: ComponentFixture<ProjetbutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetbutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetbutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
