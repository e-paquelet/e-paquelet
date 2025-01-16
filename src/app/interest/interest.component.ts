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
  adminsys = "./assets/img/interet/adminsys.PNG";
  adminres = "./assets/img/interet/adminres.png";
  devweb = "./assets/img/interet/devweb.PNG";
  autoadm = "./assets/img/interet/powershell.PNG";
  velo = "./assets/img/interet/bike.jpg";
  rock = "./assets/img/interet/rock.jpg";
  pointinterro = "./assets/img/menu/pointinterro.jpg";

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
    
  ];

  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }
}
