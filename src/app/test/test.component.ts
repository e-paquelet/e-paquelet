import { Component } from '@angular/core';

import { AfterViewInit, HostListener, Type } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgComponentOutlet } from '@angular/common';
import { Sae301Component } from '../projetbut/sae301/sae301.component';
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
  selector: 'app-test',
  imports: [
    RouterLink,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  bgImgUrl = "./assets/img/background.jpg";
  bgImgUrl1 = "./assets/img/profil.JPG";
  bgImgUrl4 = "./assets/img/linkedin.png";
  bgImgUrl2 = "./assets/img/mail.png";
  bgImgUrl3 = "./assets/img/ain.jpg";
  video = "./assets/img/background2.mp4"
  video_sae_302 = "./assets/img/sae302/video_sae_302.mp4";
  dianeUrl = "./assets/img/mdp.jpg";
  flechebas = "./assets/img/fleche.png";
  dianeArray: string[] = [];
  menu = "./assets/img/interet/menu.png";
  linkedin = "./assets/img/contact/linkedin.png";
  linkedinlink = "https://www.linkedin.com/in/etienne-paquelet/";

  github = "./assets/img/contact/github.png";
  githublink = "https://github.com/e-paquelet";

  // listeContact: ListeContactItem[] = [
  //   {
  //     img: this.bgImgUrl3,
  //     link: "https://www.linkedin.com/in/etienne-paquelet/",
  //     text: "Etienne PAQUELET",
  //     alt: "Photo menant à mon compte Linkedin",
  //   },
  //   {
  //     img: this.bgImgUrl4,
  //     link: "ailto:etienne.paquelet.01@gmail.com",
  //     text: "etienne.paquelet.01@gmail.com",
  //     alt: "Photo boite mail",
  //   },
  // ];



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
