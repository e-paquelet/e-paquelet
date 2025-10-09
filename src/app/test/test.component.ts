import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { StepperComponent } from '../../shared/stepper/stepper.component';
import { VideoComponent } from '../../shared/video/video.component';


export interface ListeMenu2 {
  titre: string;
  link: string;
}

interface MenuItem {
  id: number;
  title: string;
  content: string; // contenu long possible
}

@Component({
  selector: 'app-test',
  imports: [
    VideoComponent,
    StepperComponent,
  ],
  animations: [
    trigger('fadeSlide', [
      state('hidden', style({ opacity: 0, transform: 'translateY(50%)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [animate('300ms ease-out')]),
      transition('visible => hidden', [animate('300ms ease-in')]),
    ]),
   
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './test.component.html',

  styleUrl: './test.component.css'
})
export class TestComponent {

  video = "./assets/img/background2.mp4";
  windows = "./assets/img/competence/os.jpg";
  panelState: 'hidden' | 'visible' = 'hidden';

  togglePanel() {
    this.panelState = this.panelState === 'hidden' ? 'visible' : 'hidden';
  }
}
