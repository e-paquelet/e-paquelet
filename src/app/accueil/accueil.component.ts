import { Component, viewChild, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from '../../shared/video/video.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { LanguageService } from '../../services/language.service';


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
  public translation = inject(LanguageService);

  accordion = viewChild.required(MatAccordion);
  readonly panelOpenState = signal(false);
  bgImgUrl = "./assets/img/background2.mp4";
  profil = "./assets/img/accueil/profillogo.JPG";
  linkedin = "./assets/img/contact/linkedin.png";
  linkedinlink = "https://www.linkedin.com/in/etienne-paquelet/";

  github = "./assets/img/contact/github.png";
  githublink = "https://github.com/e-paquelet";

  download = "./assets/img/download.jpg";

  get exppro(): exppro[] {
    return [
      {
        sommaire: this.translation.translate("ACCUEIL-EXP_PRO_SOMMAIRE_UN"),
        poste: this.translation.translate("ACCUEIL-EXP_PRO_POSTE_UN"),
        mission: this.translation.translate("ACCUEIL-EXP_PRO_MISSION_UN"),
        time: this.translation.translate("ACCUEIL-EXP_PRO_DATE_UN"),
      }, {
        sommaire: this.translation.translate("ACCUEIL-EXP_PRO_SOMMAIRE_DEUX"),
        poste: this.translation.translate("ACCUEIL-EXP_PRO_POSTE_DEUX"),
        mission: this.translation.translate("ACCUEIL-EXP_PRO_MISSION_DEUX"),
        time: this.translation.translate("ACCUEIL-EXP_PRO_DATE_DEUX"),
        // sommaire: "Stage – Préfecture de l’Ain (BISIC)",
        // poste: "Stage au Bureau Interministériel des Systèmes d’Information et de Communication.",
        // mission: "Étude de renouvellement de l’infrastructure informatique.",
        // time: "15/04/2024 – 07/06/2024",
      },
      {
        sommaire: this.translation.translate("ACCUEIL-EXP_PRO_SOMMAIRE_TROIS"),
        poste: this.translation.translate("ACCUEIL-EXP_PRO_POSTE_TROIS"),
        mission: this.translation.translate("ACCUEIL-EXP_PRO_MISSION_TROIS"),
        time: this.translation.translate("ACCUEIL-EXP_PRO_DATE_TROIS"),
        // sommaire: "Juillet 2024 – Ripeur",
        // poste: "Intérimaire",
        // mission: "Travail en intérim dans la collecte des déchets.",
        // time: "Juillet 2024",
      },
      {
        sommaire: this.translation.translate("ACCUEIL-EXP_PRO_SOMMAIRE_QUATRE"),
        poste: this.translation.translate("ACCUEIL-EXP_PRO_POSTE_QUATRE"),
        mission: this.translation.translate("ACCUEIL-EXP_PRO_MISSION_QUATRE"),
        time: this.translation.translate("ACCUEIL-EXP_PRO_DATE_QUATRE"),
        // sommaire: "Juillet 2023 – Direction Générale des Finances Publiques",
        // poste: "Service de la Publicité Foncière et de l’Enregistrement – Bourg-en-Bresse.",
        // mission: "Archivage, suivi administratif.",
        // time: "Juillet 2023 - (1 mois)",
      },
      {
        sommaire: this.translation.translate("ACCUEIL-EXP_PRO_SOMMAIRE_CINQ"),
        poste: this.translation.translate("ACCUEIL-EXP_PRO_POSTE_CINQ"),
        mission: this.translation.translate("ACCUEIL-EXP_PRO_MISSION_CINQ"),
        time: this.translation.translate("ACCUEIL-EXP_PRO_DATE_CINQ"),
        // sommaire: "Juillet 2022 – Direction Générale des Finances Publiques",
        // poste: "Trésorerie Publique Hospitalière - Bourg en Bresse",
        // mission: "Découverte de l’environnement administratif, appui à la gestion documentaire.",
        // time: "Juillet 2022 - (1 mois)",
      },
    ];
  }


  get formation(): formation[] {
    return [
      {
        sommaire: "2025-2028 : IMT Mines Alès : Ingénieur Informatique et Réseaux - Parcours Systèmes et Réseaux",
        texte: this.translation.translate("ACCUEIL-FORMATION_THIRD"),
      },
      {
        sommaire: "2022 - 2025 : B.U.T Réseaux et Télécommunications – parcours Cybersécurité",
        texte: this.translation.translate("ACCUEIL-FORMATION_UN"),
      },
      {
        sommaire: "2022 : Baccalauréat Général – spécialités Physique Chimie & Mathématiques",
        texte: this.translation.translate("ACCUEIL-FORMATION_SECOND"),
      },

    ];
  }

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
    if (this.translation.choosenLanguage() === "fr") {
      const filePath = './assets/img/pdf/CV_PAQUELET_Etienne.pdf'; // Chemin du fichier CV dans le dossier assets
      // 1. Ouvrir le fichier dans un nouvel onglet
      window.open(filePath, '_blank'); // Ouvre le fichier dans un nouvel onglet

      // 2. Démarrer le téléchargement du fichier
      const link = document.createElement('a');
      link.setAttribute('href', filePath); // Définit l'URL du fichier
      link.setAttribute('download', 'CV_PAQUELET_Etienne.pdf'); // Définit le nom du fichier téléchargé
      link.click(); // Simule un clic pour lancer le téléchargement 
    } else {
      const filePath = './assets/img/pdfen/CV_PAQUELET_Etienne.pdf'; // Chemin du fichier CV dans le dossier assets
      // 1. Ouvrir le fichier dans un nouvel onglet
      window.open(filePath, '_blank'); // Ouvre le fichier dans un nouvel onglet

      // 2. Démarrer le téléchargement du fichier
      const link = document.createElement('a');
      link.setAttribute('href', filePath); // Définit l'URL du fichier
      link.setAttribute('download', 'CV_PAQUELET_Etienne.pdf'); // Définit le nom du fichier téléchargé
      link.click(); // Simule un clic pour lancer le téléchargement 
    }
  }

  isimagenlarged = false;

  enlargedimage() {
    this.isimagenlarged = true;
  }

  closeenlargedimage() {
    this.isimagenlarged = false;
  }
}


// export function newAlert(msg: string) {
//   alert(msg);
// }

// newAlert("test");