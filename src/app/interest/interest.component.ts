import { afterNextRender, Component, inject, Injector, ViewChild, Type } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { VideoComponent } from '../../shared/video/video.component';

import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent, DialogDataType } from '../../shared/card/card.component';
import { LanguageService } from '../../services/language.service';

export interface ListeImage {
  titre: string;
  image: string;
  type: "adminsys" | "adminres" | "devweb" | "autoadm" | "securesi";
}

export interface ListeImage2 {
  titre: string;
  image: string;
  type: "tennis" | "chess" | "gaming" | "guitare" | "metal" | "velo";
}

@Component({
  selector: 'app-interest',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, TextFieldModule, VideoComponent],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css'
})
export class InterestComponent {
  public translation = inject(LanguageService);
  constructor(private dialog: MatDialog) {

  }
  bgImgUrl = "./assets/img/background2.mp4";
  profil = "./assets/img/profil.JPG";
  adminsys = "./assets/img/interet/admsys.png";
  adminres = "./assets/img/interet/adminres.png";
  devweb = "./assets/img/interet/devweb.PNG";
  devweb2 = "./assets/img/interet/devweb2.png";
  autoadm = "./assets/img/interet/powershell.jpeg";
  velo = "./assets/img/interet/bike.jpg";
  rock = "./assets/img/interet/rock.jpg";
  guitare = "./assets/img/interet/guitare.jpg";
  chess = "./assets/img/interet/chess.jpg";
  gaming = "./assets/img/interet/front.PNG";
  tennis = "./assets/img/interet/tennis.jpg";
  cyber = "./assets/img/interet/cyber.jpg";
  windowsserver = "./assets/img/interet/ws.png";
  tennisclassement = "https://tenup.fft.fr/fichejoueur/10000315868?pratique=TENNIS";
  chessclassement = "https://www.chess.com/member/sotrf";
  valueSelected = "professionel";


  get listeImage(): ListeImage[] {
    return [
      {
        titre: this.translation.translate("INTERET-ADMINSYS-TITRE"),
        image: this.adminsys,
        type: "adminsys",
      },
      // {
      //   titre: "L'administration réseaux",
      //   image: this.adminres,
      //   type: "adminres",
      // },
      {
        titre: this.translation.translate("INTERET-DEVWEB-TITRE"),
        image: this.devweb,
        type: "devweb",
      },
      {
        titre: this.translation.translate("INTERET-AUTO-TITRE"),
        image: this.autoadm,
        type: "autoadm",
      },
      {
        titre: this.translation.translate("INTERET-CYBER-TITRE"),
        image: this.cyber,
        type: "securesi",
      },

    ];
  }

  get listeImage2(): ListeImage2[] {
    return [
      {
        titre: this.translation.translate("INTERET-TENNIS-TITRE"),
        image: this.tennis,
        type: "tennis",
      },
      {
        titre: this.translation.translate("INTERET-ECHEC-TITRE"),
        image: this.chess,
        type: "chess",
      },
      {
        titre: this.translation.translate("INTERET-GUITARE-TITRE"),
        image: this.guitare,
        type: "guitare",
      },
      // {
      //   titre: "Le métal - rock",
      //   image: this.rock,
      //   type: "metal",
      // },
      {
        titre: this.translation.translate("INTERET-BIKE-TITRE"),
        image: this.velo,
        type: "velo",
      },
      {
        titre: this.translation.translate("INTERET-JEUXVIDEO-TITRE"),
        image: this.gaming,
        type: "gaming",
      },

    ];
  }

  openCard(content: "tennis" | "chess" | "guitare" | "metal" | "gaming" | "velo" | "adminsys" | "adminres" | "devweb" | "autoadm" | "securesi") {
    let compo: String = this.translation.translate("INTERET-TENNIS-TEXTE");
    let titre = this.translation.translate("INTERET-TENNIS-TITRE");
    let headerpicture = this.profil;
    let frontpicture = this.tennis;
    switch (content) {
      default:
      case "tennis":
        break;
      case "chess":
        compo = this.translation.translate("INTERET-ECHEC-TEXTE");
        titre = this.translation.translate("INTERET-ECHEC-TITRE");
        headerpicture = this.profil;
        frontpicture = this.chess;
        break;
      case "guitare":
        compo = this.translation.translate("INTERET-GUITARE-TEXTE");
        titre = this.translation.translate("INTERET-GUITARE-TITRE");
        headerpicture = this.guitare;
        frontpicture = this.guitare;
        break;
      // case "metal":
      //   compo = `<p> </p>
      //   `;
      //   titre = "Le métal - rock";
      //   headerpicture = this.rock;
      //   frontpicture = this.rock;
      //   break;
      case "gaming":
        compo = this.translation.translate("INTERET-JEUXVIDEO-TEXTE");
        titre = this.translation.translate("INTERET-JEUXVIDEO-TITRE");
        headerpicture = this.profil;
        frontpicture = this.gaming;
        break;
      case "velo":
        compo = this.translation.translate("INTERET-BIKE-TEXTE");
        titre = this.translation.translate("INTERET-BIKE-TITRE");
        headerpicture = this.profil;
        frontpicture = this.velo;
        break;
      case "adminsys":
        compo = this.translation.translate("INTERET-ADMINSYS-TEXTE");
        titre = this.translation.translate("INTERET-ADMINSYS-TITRE");
        headerpicture = this.profil;
        frontpicture = this.adminsys;
        break;
      // case "adminres":
      //   compo = `<p> </p>
      //   `;
      //   titre = "L'administration réseau";
      //   headerpicture = this.profil;
      //   frontpicture = this.adminres;
      //   break;
      case "devweb":
        compo = this.translation.translate("INTERET-DEVWEB-TEXTE");
        titre = this.translation.translate("INTERET-DEVWEB-TITRE");
        headerpicture = this.profil;
        frontpicture = this.devweb2;
        break;
      case "autoadm":
        compo = this.translation.translate("INTERET-AUTO-TEXTE");
        titre = this.translation.translate("INTERET-AUTO-TITRE");
        headerpicture = this.profil;
        frontpicture = this.autoadm;
        break;
      case "securesi":
        compo = this.translation.translate("INTERET-CYBER-TEXTE");
        titre = "Cybersécurité";
        headerpicture = this.profil;
        frontpicture = this.cyber;
        break;
    }

    const dialogref = this.dialog.open<CardComponent, DialogDataType, any>(CardComponent, {

      data: {
        titre: titre,
        headerpicture: headerpicture,
        frontpicture: frontpicture,
        texte: compo,
      },

      // height: "60dvh",
      // maxWidth: "100dvw",
    })
  }



  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }
}
