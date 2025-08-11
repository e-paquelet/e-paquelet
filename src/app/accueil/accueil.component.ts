import { Component, viewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from '../../shared/video/video.component';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';


export interface ListeIcon {
  image: string;
  link: string;
}

export interface formation {
  sommaire: string;
  texte: string;
}

export interface exppro {
  sommaire: string;
  poste: string;
  mission: string;
  time: string;
}



@Component({
    selector: 'app-accueil',
    imports: [CommonModule, VideoComponent, MatExpansionModule,],
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.css'
})
export class AccueilComponent {
accordion = viewChild.required(MatAccordion);
  readonly panelOpenState = signal(false);
  bgImgUrl = "./assets/img/background2.mp4";
  profil = "./assets/img/accueil/profillogo.JPG";
  linkedin = "./assets/img/contact/linkedin.png";
  linkedinlink = "https://www.linkedin.com/in/etienne-paquelet/";

  github = "./assets/img/contact/github.png";
  githublink = "https://github.com/e-paquelet";

  download = "./assets/img/download.jpg";

  exppro: exppro[] = [
    {
      sommaire: "Depuis septembre 2024 – Alternance : Conseil Départemental de l’Ain",
      poste: "Direction de la Transition et des Solutions Numériques – Service Systèmes et Réseaux.",
      mission: "Exploitation et participation aux projets d'infrastructures systèmes et réseaux",
      time: "02/09/2024 – Aujourd’hui",
    }, {
      sommaire: "Stage – Préfecture de l’Ain (BISIC)",
      poste: "Stage au Bureau Interministériel des Systèmes d’Information et de Communication.",
      mission: "Étude de renouvellement de l’infrastructure informatique.",
      time: "15/04/2024 – 07/06/2024",
    },
    {
      sommaire: "Juillet 2024 – Intérim : Ripeur",
      poste: "SupIntérim",
      mission: "Travail en intérim dans la collecte des déchets.",
      time: "Juillet 2024",
    },
    {
      sommaire: "Juillet 2023 – Direction Générale des Finances Publiques",
      poste: "Service de la Publicité Foncière et de l’Enregistrement – Bourg-en-Bresse.",
      mission: "Archivage, suivi administratif.",
      time: "Juillet 2023 - (1 mois)",
    },
    {
      sommaire: "Juillet 2022 – Direction Générale des Finances Publiques",
      poste: "Trésorerie Publique Hospitalière - Bourg en Bresse",
      mission: "Découverte de l’environnement administratif, appui à la gestion documentaire.",
      time: "Juillet 2022 - (1 mois)",
    },
  ]

  formation: formation[] = [
    {
      sommaire: "2022 - 2025 : B.U.T Réseaux et Télécommunications – parcours Cybersécurité",
      texte: `IUT Nord Franche Comté à Montbéliard - Formation en alternance spécialisée autour de 3
                        compétences
                        communes : systèmes et réseaux, télécommunications et programmation. Mes compétences spécifiques
                        à mon parcours en cybersécurité sont : Sécuriser et Surveiller le SI`,
    },
    {
      sommaire: "2022 : Baccalauréat Général – spécialités Physique Chimie & Mathématiques",
      texte: `Lycée Saint Pierre à Bourg en Bresse - obtenu avec les mentions assez bien et section européenne.`,
    }
  ]

  ListeIcon: ListeIcon[] = [
      {
        image: this.linkedin,
        link: this.linkedinlink,
      },
      {
        image: this.github,
        link: this.githublink,
      }
  ];

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


// export function newAlert(msg: string) {
//   alert(msg);
// }

// newAlert("test");