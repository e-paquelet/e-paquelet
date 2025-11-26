import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageService } from '../../services/language.service';
import { CdkDrag } from '@angular/cdk/drag-drop';

// import { VideoComponent } from '../../shared/video/video.component';



export interface ListeMenu2 {
  titre: string;
  link: string;
}

export interface ListeFLAG {
  action: () => void;
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
  tr = inject(LanguageService);
  public translation = inject(LanguageService);
  bgImgUrl1 = "./assets/img/profil.JPG";
  linkedin = "./assets/img/contact/linkedin.png";
  linkedinlink = "https://www.linkedin.com/in/etienne-paquelet/";
  flag_en = "./assets/img/autre/flag_anglais.jpg";
  flag_fr = "./assets/img/autre/flag_france.jpg";

  github = "./assets/img/contact/github.png";
  githublink = "https://github.com/e-paquelet";

  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }
  get listeFLAG(): ListeFLAG[] {
    return [
      {
        action: () => this.tr.changeLanguage("en"),
        link: this.flag_en,
      },
      {
        action: () => this.tr.changeLanguage("fr"),
        link: this.flag_fr,
      },
    ];
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

  get listeMenu(): ListeMenu[] {
    return [
      {
        titre: this.translation.t("HEADER2-APROPOS"),
        link: "/accueil"
      },
      {
        titre: this.translation.translate("HEADER2-INTERET"),
        link: "/centre-interet",
      },
      // {
      //   titre: "Alternance",
      //   link: "/entreprise",
      // },
      {
        titre: this.translation.translate("HEADER2-COMPETENCE"),
        link: "/portfolio",
      },
      {
        titre: this.translation.translate("HEADER2-PROJET"),
        link: "/projet-but",
      },
      {
        titre: this.translation.translate("HEADER2-RS"),
        link: "/reseaux-professionnels",
      },
      // {
      //   titre: "Articles",
      //   link: "/autre",
      // },
      {
        titre: this.translation.translate("HEADER2-CONTACT"),
        link: "/contact",
      },


    ];
  }

  get ListeMenu2(): ListeMenu2[] {
    return [
      {
        titre: this.translation.t("HEADER2-APROPOS"),
        link: "/accueil",
      },
      {
        titre: this.translation.translate("HEADER2-INTERET"),
        link: "/centre-interet",
      },
      {
        titre: this.translation.translate("HEADER2-COMPETENCE"),
        link: "/portfolio",
      },

      {
        titre: this.translation.translate("HEADER2-PROJET"),
        link: "/projet-but",
      },
      {
        titre: this.translation.translate("HEADER2-RS"),
        link: "/reseaux-professionnels",
      },
      {
        titre: this.translation.translate("HEADER2-CONTACT"),
        link: "/contact",
      },
      // {
      //   titre: "Tap to change to French",
      //   link:  this.translation.changeLanguage('en'),
      // },


    ];
  }


}
