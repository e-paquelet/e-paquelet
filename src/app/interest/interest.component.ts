import { afterNextRender, Component, inject, Injector, ViewChild, Type } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';

import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent, DialogDataType } from '../../shared/card/card.component';


export interface ListeImage {
  titre: string;
  image: string;
  type: "tennis" | "chess" | "guitare" | "metal" | "videogame" | "velo" | "adminsys" | "adminres" | "devweb" | "autoadm" | "securesi";
}

export interface ListeImage2 {
  titre: string;
  image: string;
  type: "tennis" | "chess" | "gaming" |"guitare" | "metal" | "videogame" | "velo" | "adminsys" | "adminres" | "devweb" | "autoadm" | "securesi";
}

@Component({
  selector: 'app-interest',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, TextFieldModule],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css'
})
export class InterestComponent {
  constructor ( private dialog:MatDialog){

  }
  adminsys = "./assets/img/interet/adminsys.PNG";
  adminres = "./assets/img/interet/adminres.png";
  devweb = "./assets/img/interet/devweb.PNG";
  autoadm = "./assets/img/interet/powershell.PNG";
  velo = "./assets/img/interet/bike.jpg";
  rock = "./assets/img/interet/rock.jpg";
  guitare = "./assets/img/interet/guitare.webp";
  chess = "./assets/img/interet/chess.jpg";
  gaming = "./assets/img/interet/gaming.jpg";
  tennis = "./assets/img/interet/tennis.jpg";

  valueSelected = "professionel";

  listeImage: ListeImage[] = [
    {
      titre: "L'administration système",
      image: this.adminsys,
      type: "adminsys",
    },
    {
      titre: "L'administration réseaux",
      image: this.adminres,
      type: "adminres",
    },
    {
      titre: "Le développement web",
      image: this.devweb,
      type: "devweb",
    },
    {
      titre: "L'automatisation des tâches d'administration",
      image: this.autoadm,
      type: "autoadm",
    },
    {
      titre: "La sécurisation du SI",
      image: this.autoadm,
      type: "autoadm",
    },

  ];

  listeImage2: ListeImage2[] = [
    {
      titre: "Le tennis",
      image: this.tennis,
      type: "tennis",
    },
    {
      titre: "Les échecs",
      image: this.chess,
      type: "chess",
    },
    {
      titre: "La guitare",
      image: this.guitare,
      type: "guitare",
    },
    {
      titre: "Le métal - rock",
      image: this.rock,
      type: "metal",
    },
    {
      titre: "Le vélo",
      image: this.velo,
      type: "velo",
    },
    {
      titre: "Les jeux vidéos",
      image: this.gaming,
      type: "gaming",
    },

  ];

  openCard(content: "tennis" | "chess" | "guitare" | "metal" | "videogame" | "gaming" | "velo" | "adminsys" | "adminres" | "devweb" | "autoadm" | "securesi") {
    let compo:String = "<p>texte du tennis</p>";
    let titre = "Le tennis";
    let headerpicture = this.tennis;
    let frontpicture = this.tennis;
    switch (content) {
      default:
      case "tennis":
        break;
      case "chess":
        compo = "<p>texte du tennis</p>";
        titre = "Les échecs";
        headerpicture = this.chess;
        frontpicture = this.chess;
        break;
      case "guitare":
        compo = "<p>texte du tennis</p>";
        titre = "La guitare";
        headerpicture = this.guitare;
        frontpicture = this.guitare;
        break;
      case "metal":
        compo = "<p>texte du tennis</p>";
        titre = "Le métal - rock";
        headerpicture = this.rock;
        frontpicture = this.rock;
        break;
      case "videogame":
        compo = "<p>texte du tennis</p>";
        titre = "Les jeux vidéos";
        headerpicture = this.gaming;
        frontpicture  = this.gaming;
        break;
      case "velo":
        compo = "<p>texte du tennis</p>";
        titre = "Le VTT";
        headerpicture = this.velo;
        frontpicture = this.velo;
        break;
      case "adminsys":
        compo = "<p>texte du tennis</p>";
        titre = "L'administration système";
        headerpicture = this.adminsys;
        frontpicture = this.adminsys;
        break;
      case "adminres":
        compo = "<p>texte du tennis</p>";
        titre = "L'administration réseau";
        headerpicture = this.adminres;
        frontpicture = this.adminres;
        break;
      case "devweb":
        compo = "<p>texte du tennis</p>";
        titre = "Le développement web";
        headerpicture = this.devweb;
        frontpicture = this.devweb;
        break;
      case "autoadm":
        compo = "<p>texte du tennis</p>";
        titre = "L'automatisation des tâches d'administrations";
        headerpicture = this.autoadm;
        frontpicture = this.autoadm;
        break;
      case "securesi":
        compo = "<p>texte du tennis</p>";
        titre = "La sécurisation du SI";
        headerpicture = this.autoadm;
        frontpicture = this.autoadm;
        break;
    }

    const dialogref = this.dialog.open<CardComponent,DialogDataType,any>(CardComponent, {

      data: {
        titre:titre,
        headerpicture:headerpicture,
        frontpicture:frontpicture,
        texte:compo,
      },

    height: "60dvh",
      maxWidth: "100dvw",
    })
  }

  

  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }
}
