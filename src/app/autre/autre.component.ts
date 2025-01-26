import { Component } from '@angular/core';
import { VideoComponent } from '../../shared/video/video.component';

@Component({
  selector: 'app-autre',
  imports: [VideoComponent],
  templateUrl: './autre.component.html',
  styleUrl: './autre.component.css'
})
export class AutreComponent {
  bgImgUrl = "./assets/img/background2.mp4";
}
