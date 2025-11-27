import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

@Component({
    selector: 'app-sae301',
    imports: [NgIf],
    templateUrl: './sae301.component.html',
    styleUrl: './sae301.component.css'
})
export class Sae301Component {
  public translation = inject(LanguageService);
  archisae301 = "./assets/img/sae301/infreseaux.png";
  image_munin = "./assets/img/sae301/munin.jpg";
  image_vpn = "./assets/img/sae301/vpn.jpg";
  cr_sae_301 = "./assets/img/sae301/cr_sae_301.pdf";

isImageEnlarged = false;
isImageEnlarged1 = false;
isImageEnlarged2 = false;


  enlargeImage() {
    this.isImageEnlarged = true;
  }

  enlargeImage1() {
    this.isImageEnlarged1 = true;
  }

  enlargeImage2() {
    this.isImageEnlarged2 = true;
  }

  closeEnlargedImage() {
    this.isImageEnlarged = false;
    this.isImageEnlarged1 = false;
    this.isImageEnlarged2 = false;
  }

}


