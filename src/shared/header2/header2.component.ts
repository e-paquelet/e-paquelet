import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';


export interface ListeMenu {
  titre: string;
  link: string;
}

export interface ListeRS {
  titre: string;
  link: string;
}

@Component({
  selector: 'app-header2',
  imports: [
    RouterLink,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
  ],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component {

  bgImgUrl1 = "./assets/img/profil.JPG";
  linkedin = "./assets/img/contact/linkedin.png";
  linkedinlink = "https://www.linkedin.com/in/etienne-paquelet/";

  github = "./assets/img/contact/github.png";
  githublink = "https://github.com/e-paquelet";

  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }

  listeRS: ListeRS[] = [
    {
      titre: this.linkedin,
      link: this.linkedinlink,
    },
    {
      titre: this.github,
      link: this.githublink,
    },

  ];

  listeMenu: ListeMenu[] = [
    {
      titre: "A propos de moi",
      link: "/accueil"
    },
    {
      titre: "Mes centres d'intérêts",
      link: "/centre-interet",
    },
    {
      titre: "Alternance",
      link: "/entreprise",
    },
    {
      titre: "Vitrine de mes compétences",
      link: "/portfolio",
    },
    {
      titre: "Vitrine de mes projets",
      link: "/projet-but",
    },
    {
      titre: "Mes réseaux professionnels",
      link: "/liens-divers",
    },
    {
      titre: "Articles",
      link: "/autre",
    },
    {
      titre: "Contacts",
      link: "/contact",
    },


  ];
}
