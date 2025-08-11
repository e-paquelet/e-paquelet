import { ChangeDetectionStrategy, Component, viewChild, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { MatCardModule } from '@angular/material/card';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { Router, RouterLink } from '@angular/router';
import {CdkDrag} from '@angular/cdk/drag-drop';

// import { VideoComponent } from '../../shared/video/video.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

export interface ListeMenu2 {
  titre: string;
  link: string;
}

@Component({
  selector: 'app-test',
  // providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatMenuModule,
    RouterLink,
    CdkDrag,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  // accordion = viewChild.required(MatAccordion);
  readonly panelOpenState = signal(false);
  bgImgUrl = "./assets/img/background2.mp4";
  profil = "./assets/img/accueil/profillogo.JPG";
  linkedin = "./assets/img/contact/linkedin.png";
  linkedinlink = "https://www.linkedin.com/in/etienne-paquelet/";

  github = "./assets/img/contact/github.png";
  githublink = "https://github.com/e-paquelet";

  download = "./assets/img/download.jpg";

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

  ]



  opencv() {
    const filePath = './assets/img/pdf/CV_PAQUELET_Etienne.pdf'; // Chemin du fichier CV dans le dossier assets

    // 1. Ouvrir le fichier dans un nouvel onglet
    window.open(filePath, '_blank'); // Ouvre le fichier dans un nouvel onglet

    // 2. Démarrer le téléchargement du fichier
    const link = document.createElement('a');
    link.setAttribute('href', filePath); // Définit l'URL du fichier
    link.setAttribute('download', 'CV_PAQUELET_Etienne.pdf'); // Définit le nom du fichier téléchargé
    link.click(); // Simule un clic pour lancer le téléchargement  
  }
}
