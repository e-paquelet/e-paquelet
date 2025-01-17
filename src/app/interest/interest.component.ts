import { afterNextRender, Component, inject, Injector, ViewChild } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';

export interface ListeImage {
  titre: string;
  image: string;
}

export interface ListeImage2 {
  titre: string;
  image: string;
}

@Component({
  selector: 'app-interest',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, TextFieldModule],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css'
})
export class InterestComponent {
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
    },
    {
      titre: "L'administration réseaux",
      image: this.adminres,
    },
    {
      titre: "Le développement web",
      image: this.devweb,
    },
    {
      titre: "L'automatisation des tâches d'administration",
      image: this.autoadm,
    },
    {
      titre: "La sécurisation du SI",
      image: this.autoadm,
    },
    
  ];

  listeImage2: ListeImage2[] = [
    {
      titre: "Le tennis",
      image: this.tennis,
      
    },
    {
      titre: "Les échecs",
      image: this.chess,
    },
    {
      titre: "La guitare",
      image: this.guitare,
    },
    {
      titre: "Le métal - rock",
      image: this.rock,
    },
    {
      titre: "Le vélo",
      image: this.velo,
    },
    
  ];

  

  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }
}
