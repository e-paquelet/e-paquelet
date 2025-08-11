import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

import {CdkDrag} from '@angular/cdk/drag-drop';

// import { VideoComponent } from '../../shared/video/video.component';



export interface ListeMenu2 {
  titre: string;
  link: string;
}

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
    MatButtonModule, 
    MatMenuModule,
    CdkDrag,
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
    // {
    //   titre: "Alternance",
    //   link: "/entreprise",
    // },
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
      link: "/reseaux-professionnels",
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

  ListeMenu2: ListeMenu2[] = [
      {
        titre: "A propos de moi",
        link: "/accueil",
      },
      {
        titre: "Mes centres d'intérêts",
        link: "/centre-interet",
      },
      {
        titre: "Mes compétences",
        link: "/portfolio",
      },
  
      {
        titre: "Vitrine de mes projets",
        link: "/projet-but",
      },
      {
        titre: "Mes réseaux professionnels",
        link: "/reseaux-professionnels",
      },
      {
        titre: "Contact",
        link: "/contact",
      },
  
    ];

    
}
