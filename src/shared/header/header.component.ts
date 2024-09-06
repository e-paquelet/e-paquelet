import { Component } from '@angular/core';

export interface ListeMenu {
  titre: string;
  title?: string;
  redirection: string,
}

export interface ListeReseau {
  img: string;
  redirection: string,
  alt:string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
bgImgUrl1 = "/assets/img/profil.png"

  listeMenu: ListeMenu[] = [
    {
      titre: "Mon portfolio",
      redirection: "/portfolio",
    },
    {
      titre: "Projet BUT",
      redirection: "/projet-but",
      title: "Les projets fait pour mon BUT"
    },
    {
      titre: "Contact",
      redirection: "/contact",
    },
  ];

  listeReseaux: ListeReseau[] = [
    {
      redirection: "https://www.linkedin.com/in/etienne-paquelet/",
      img: "/assets/img/linkedin.png",
      alt: "Linkedin"
    },
   
  ]
}
