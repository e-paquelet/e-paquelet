import {ChangeDetectionStrategy, Component, viewChild, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { VideoComponent } from '../../shared/video/video.component';



export interface ListeMenu {
  titre: string;
  link: string;
}

export interface ListeRS {
  titre: string;
  link: string;
}

@Component({
  selector: 'app-test',
  providers: [provideNativeDateAdapter()],
  imports: [
    RouterLink,
    VideoComponent,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,    
    MatDatepickerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  accordion = viewChild.required(MatAccordion);
  readonly panelOpenState = signal(false);
  bgImgUrl = "./assets/img/background2.mp4";
}
