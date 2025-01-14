import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-sae401',
    imports: [CommonModule],
    templateUrl: './sae401.component.html',
    styleUrl: './sae401.component.css'
})
export class Sae401Component {

  archisae401 = "./assets/img/sae401/archi.PNG";
  cr_sae401_tache_2 = "./assets/img/sae401/cr_sae401_tache_2.pdf";
  cr_sae401_tache_4 = "./assets/img/sae401/cr_sae401_tache_4.pdf";
  cr_sae401_tache_7 = "./assets/img/sae401/cr_sae401_tache_7.pdf";

  isImageEnlarged = false;


  enlargeImage() {
    this.isImageEnlarged = true;
  }

  closeEnlargedImage() {
    this.isImageEnlarged = false;

  }

}
