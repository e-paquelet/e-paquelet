import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-sae303',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sae303.component.html',
  styleUrl: './sae303.component.css'
})
export class Sae303Component {

  archisae303 = "./assets/img/sae303/archi.PNG";
  roas = "./assets/img/sae303/roas.PNG";
  cr_sae_303 = "./assets/img/sae303/cr_sae_303.pdf";
  scan_reseau = "./assets/img/sae303/scan_reseau.pdf";
  adressage_ip = "./assets/img/sae303/adressage_ip.pdf";
  video_sae_303 = "./assets/img/sae303/etienne_paquelet_video.mp4";

  isImageEnlarged = false;
  isImageEnlarged2 = false;

  enlargeImage() {
    this.isImageEnlarged = true;
  }

  closeEnlargedImage() {
    this.isImageEnlarged = false;
    this.isImageEnlarged2 = false;
  }

  enlargeImage2() {
    this.isImageEnlarged2 = true;
  }

}
