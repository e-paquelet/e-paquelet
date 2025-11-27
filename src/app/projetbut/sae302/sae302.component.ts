import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
    selector: 'app-sae302',
    imports: [],
    templateUrl: './sae302.component.html',
    styleUrl: './sae302.component.css'
})
export class Sae302Component {
  public translation = inject(LanguageService);
  archi = "./assets/img/sae302/archi.PNG";
  cr_sae_302 = "./assets/img/sae302/cr_sae_302.pdf";
  video_sae_302 = "./assets/img/sae302/video_sae_302.mp4";

  // isImageEnlarged = false;

  // enlargeImage() {
  //   this.isImageEnlarged = true;
  // }

  // closeEnlargedImage() {
  //   this.isImageEnlarged = false;
    
  // }

}
