import { Component, inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageService } from '../../services/language.service';
import { AccueilComponent } from '../accueil/accueil.component';
type ListeContactItem = {
  img: string;
  text: string;
  link: string;
  alt: string;
}

@Component({
  selector: 'app-contact',
  imports: [
    MatTooltipModule,

  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public translation = inject(LanguageService)
  // bgImgUrl = "./assets/img/background.jpg";

  profil = "./assets/img/accueil/profillogo.JPG";
  bgImgUrl3 = "./assets/img/contact/linkedin.png";
  bgImgUrl4 = "./assets/img/contact/mail.png";
  bgImgUrl5 = "./assets/img/background2.mp4";
  dianeUrl = "./assets/img/contact/mdp.jpg";
  cv = "./assets/img/pdf/CV_PAQUELET_Etienne.pdf";
  CV = "./assets/img/download.jpg";
  dianeArray: string[] = [];

  listeContact: ListeContactItem[] = [
    {
      img: this.bgImgUrl3,
      link: "https://www.linkedin.com/in/etienne-paquelet/",
      text: "Etienne  PAQUELET",
      alt: "Photo menant à mon compte Linkedin",
    },
    {
      img: this.bgImgUrl4,
      link: "ailto:etienne.paquelet.01@gmail.com",
      text: "etienne.paquelet.01@gmail.com",
      alt: "Photo boite mail",
    },
  ];

  constructor() {
    window.addEventListener("keydown", (ev) => {
      const elmt = document.getElementById("imgProfil") as HTMLImageElement;
      if (!ev || !elmt) return;
      if (this.dianeArray.length == 7) { this.dianeArray.shift(); }
      this.dianeArray.push(ev.key.toLowerCase());
      if (this.dianeArray.join("") == "etienne") {
        elmt.src = this.dianeUrl;
        elmt.alt = "Image easter egg";
      } else {
        elmt.src = this.profil;
        elmt.alt = "Image de profil";
      }
    });
  }

  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }

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

    // redirection1() {
    //   document.location.href = "https://www.linkedin.com/in/etienne-paquelet/"
    // }
  }
}
