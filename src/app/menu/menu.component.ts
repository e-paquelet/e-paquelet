import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

export interface ListeImage {
  titre: string;
  image: string;
  link: string;
}

@Component({
    selector: 'app-menu',
    imports: [RouterLink, MatMenuModule, MatButtonModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent {

  photocompetence = "./assets/img/background.jpg";
  contact = "./assets/img/menu/contact.jpg";
  accueil = "./assets/img/menu/accueil.jpg";
  cd01 = "./assets/img/menu/ain2.jpg";
  competence = "./assets/img/menu/competence.jpg";
  rs = "./assets/img/menu/rs.jpg";
  projet = "./assets/img/menu/projet.jpg";
  pointinterro = "./assets/img/menu/pointinterro.jpg";
  centreinteret = "./assets/img/menu/interet.PNG";
  makeImgUrl(str: string):string {
    return "url('" + str + "')"
  }
  
  listeImage: ListeImage[] = [
      {
        titre: "Accueil",
        image: this.accueil,
        link: "/accueil"
      },
      {
        titre: "Mes centres d'intérêts",
        image: this.centreinteret,
        link: "/centre-interet"
      },
      {
        titre: "Alternance",
        image: this.cd01,
        link: "/entreprise"
      },
      {
        titre: "Vitrine de mes compétences",
        image: this.competence,
        link: "portfolio"
      },
      {
        titre: "Vitrine de mes projets",
        image: this.projet,
        link: "/projet-but"
      },
      {
        titre: "Liens divers",
        image: this.rs,
        link: "/liens-divers"
      },
      {
        titre: "Contacts",
        image: this.contact,
        link: "/contact"
      },
      {
        titre: "Actualité - Faits divers",
        image: this.pointinterro,
        link: "/autre"
      },
    ];


  // redirect(e: any) {
  //   if (e.target.classList.contains('competence') ) {
  //     this.router.navigate
  //   }
  // }
}
