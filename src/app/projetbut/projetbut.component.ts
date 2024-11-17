import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-projetbut',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule, MatTooltipModule],
  templateUrl: './projetbut.component.html',
  styleUrl: './projetbut.component.css'
})
export class ProjetbutComponent {
  // bgImgUrl = "/assets/img/background.jpg";
  bgImgUrl = "/assets/img/background2.mp4";
  bgImgUrl2 = "/assets/img/os.jpg";
  archisae301 = "/assets/img/sae301/infreseaux.png";
  bgImgUrl4 = "/assets/img/sae301/munin.jpg";
  bgImgUrl5 = "/assets/img/sae301/vpn.jpg";
  cr_sae_301 = "/assets/img/sae301/cr_sae_301.pdf";
  archi = "/assets/img/sae302/archi.PNG";
  cr_sae_302 = "/assets/img/sae302/cr_sae_302.pdf";
  video_sae_302 = "/assets/img/sae302/video_sae_302.mp4";
  archisae303 = "/assets/img/sae303/archi.PNG";
  roas = "/assets/img/sae303/roas.PNG";
  cr_sae_303 = "/assets/img/sae303/cr_sae_303.pdf";
  scan_reseau = "/assets/img/sae303/scan_reseau.pdf";
  archisae401 = "/assets/img/sae401/archi.PNG";
  cr_sae401_tache_2 = "/assets/img/sae401/cr_sae401_tache_2.pdf";
  cr_sae401_tache_4 = "/assets/img/sae401/cr_sae401_tache_4.pdf";
  cr_sae401_tache_7 = "/assets/img/sae401/cr_sae401_tache_7.pdf";
  adressage_ip = "/assets/img/sae303/adressage_ip.pdf";
  show = false;
  show1 = false;
  show2 = false;
  show3 = false;
  openpopup(){
    this.show = true;
  }

  closepopup() {
    this.show = false;
  }

  openpopup1(){
    this.show1 = true;
  }

  closepopup1() {
    this.show1 = false;
  }

  openpopup2(){
    this.show2 = true;
  }

  closepopup2() {
    this.show2 = false;
  }
  openpopup3(){
    this.show3 = true;
  }

  closepopup3() {
    this.show3 = false;
  }


  closeoverlay(e:any){
    if (e.target.classList.contains('overlay')) {
        this.show = false;
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
    }
  }
  makeImgUrl(str: string):string {
    return "url('" + str + "')"
  }

  isImageEnlarged = false;
  isImageEnlarged1 = false;
  isImageEnlarged2 = false;
  isImageEnlarged3 = false;

enlargeImage() {
    this.isImageEnlarged = true;
}

closeEnlargedImage() {
    this.isImageEnlarged = false;
    this.isImageEnlarged3 = false;
    this.isImageEnlarged1 = false;
    this.isImageEnlarged2 = false;
}
enlargeImage1() {
  this.isImageEnlarged1 = true;
}



enlargeImage2() {
  this.isImageEnlarged2 = true;
}


enlargeImage3() {
  this.isImageEnlarged3 = true;
}


}
