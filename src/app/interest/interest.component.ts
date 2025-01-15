import { Component } from '@angular/core';

export interface ListeImage {
  titre: string;
  image: string;

}

@Component({
  selector: 'app-interest',
  imports: [],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css'
})
export class InterestComponent {
  tennis = "./assets/img/interet/tennis.jpg";
  guitare = "./assets/img/interet/guitare.webp";
  chess = "./assets/img/interet/chess.jpg";
  gaming = "./assets/img/interet/gaming.jpg";
  velo = "./assets/img/interet/bike.jpg";
  rock = "./assets/img/interet/rock.jpg";
  pointinterro = "./assets/img/menu/pointinterro.jpg";

  listeImage: ListeImage[] = [
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
      titre: "Le VTT",
      image: this.velo,
    },
    {
      titre: "Les jeux vidéos",
      image: this.gaming,
    },
  ];

  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }
}
