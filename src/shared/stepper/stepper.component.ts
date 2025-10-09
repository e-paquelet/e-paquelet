import { Component, forwardRef } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { NgTemplateOutlet } from '@angular/common';
import { TestComponent } from '../../app/test/test.component';

@Component({
  selector: 'app-stepper',
  providers: [{ provide: CdkStepper, useExisting: TestComponent }],
  imports: [CdkStepperModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent extends CdkStepper {
  onClick(index: number): void {
    this.selectedIndex = index;
  }
}
