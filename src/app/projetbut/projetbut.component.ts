import { Component, Type } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogDataType } from '../../shared/dialog/dialog.component';
import { VideoComponent } from '../../shared/video/video.component';
import { Sae301Component } from './sae301/sae301.component';
import { Sae302Component } from './sae302/sae302.component';
import { Sae303Component } from './sae303/sae303.component';
import { Sae401Component } from './sae401/sae401.component';


@Component({
  selector: 'app-projetbut',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    MatTooltipModule,
    DialogComponent,
    VideoComponent,
    Sae301Component,
    Sae302Component,
    Sae303Component,
    Sae401Component
  ],
  templateUrl: './projetbut.component.html',
  styleUrl: './projetbut.component.css'
})
export class ProjetbutComponent {
  constructor(
    private dialog: MatDialog
  ) { }

  openDialog(content: "sae301" | "sae302" | "sae303" | "sae401") {
    let compo: Type<any> = Sae301Component;
    let titre = "SAE 301 - Mettre en oeuvre un système de transmission";
    switch (content) {
      default:
      case "sae301":
        break;
      case "sae302":
        compo = Sae302Component;
        titre = "SAE 302 - Développer des applications communicantes";
        break;
      case "sae303":
        compo = Sae303Component;
        titre = "SAE 303 - Concevoir un réseau multi-sites sécurisé";
        break;
      case "sae401":
        compo = Sae401Component;
        titre = "SAE4-Cyber-01 - Sécuriser un système d'information";
        break;
    }

    const dialodRef = this.dialog.open<DialogComponent, DialogDataType, number>(DialogComponent, {
      data: {
        btnNotOk: "Fermer",
        title: titre,
        component: compo,
      },
      maxHeight: "95dvh",
      maxWidth: "65vw",
      hasBackdrop: true,
      // empeche le scroll automatique en bas de page
      autoFocus: false,
    });

    dialodRef.afterClosed().subscribe(res => { });
  }































  // bgImgUrl = "./assets/img/background.jpg";
  bgImgUrl = "./assets/img/background2.mp4";
  // bgImgUrl2 = "./assets/img/os.jpg";
  // archisae301 = "./assets/img/sae301/infreseaux.png";
  // bgImgUrl4 = "./assets/img/sae301/munin.jpg";
  // bgImgUrl5 = "./assets/img/sae301/vpn.jpg";
  // cr_sae_301 = "./assets/img/sae301/cr_sae_301.pdf";
  // archi = "./assets/img/sae302/archi.PNG";
  // cr_sae_302 = "./assets/img/sae302/cr_sae_302.pdf";
  // video_sae_302 = "./assets/img/sae302/video_sae_302.mp4";
  // archisae303 = "./assets/img/sae303/archi.PNG";
  // roas = "./assets/img/sae303/roas.PNG";
  // cr_sae_303 = "./assets/img/sae303/cr_sae_303.pdf";
  // scan_reseau = "./assets/img/sae303/scan_reseau.pdf";
  // archisae401 = "./assets/img/sae401/archi.PNG";
  // cr_sae401_tache_2 = "./assets/img/sae401/cr_sae401_tache_2.pdf";
  // cr_sae401_tache_4 = "./assets/img/sae401/cr_sae401_tache_4.pdf";
  // cr_sae401_tache_7 = "./assets/img/sae401/cr_sae401_tache_7.pdf";
  // adressage_ip = "./assets/img/sae303/adressage_ip.pdf";
  show = false;
  show1 = false;
  show2 = false;
  show3 = false;
  openpopup() {
    this.show = true;
  }

  closepopup() {
    this.show = false;
  }

  openpopup1() {
    this.show1 = true;
  }

  closepopup1() {
    this.show1 = false;
  }

  openpopup2() {
    this.show2 = true;
  }

  closepopup2() {
    this.show2 = false;
  }
  openpopup3() {
    this.show3 = true;
  }

  closepopup3() {
    this.show3 = false;
  }


  closeoverlay(e: any) {
    if (e.target.classList.contains('overlay')) {
      this.show = false;
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
    }
  }
  makeImgUrl(str: string): string {
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
