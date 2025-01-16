import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from '../../shared/video/video.component';

@Component({
    selector: 'app-accueil',
    imports: [CommonModule, VideoComponent],
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  // bgImgUrl = "./assets/img/background.jpg";
  bgImgUrl = "./assets/img/background2.mp4";
  bgImgUrl2 = "./assets/img/accueil/insta.jpeg";
  bgImgUrl3 = "./assets/img/accueil/guitare.webp";
  bgImgUrl4 = "./assets/img/accueil/rock.jpg";
  bgImgUrl5 = "./assets/img/accueil/tennis.jpg";
  bgImgUrl6 = "./assets/img/accueil/gaming.jpg";
  bgImgUrl7 = "./assets/img/accueil/favicon.png";
  bgImgUrl8 = "./assets/img/accueil/ain.jpg";
  bgImgUrl9 = "./assets/img/accueil/chess.jpg";
  bgImgUrl10 = "./assets/img/accueil/bike.jpg";
  logojulien = "./assets/img/accueil/logojulien.png";
  linkedinjulien = "https://www.linkedin.com/in/julien-v-57ab442aa/";
  download = "./assets/img/download.jpg";
  // cv = "./assets/img/pdf/CV_PAQUELET_Etienne.pdf";
  profil = "./assets/img/accueil/profil.JPG";
  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }

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

  show = false;
  openpopup() {

    this.show = true;

  }

  closepopup() {
    this.show = false;
  }

  closeoverlay(e: any) {
    if (e.target.classList.contains('overlay1')) {
      this.show = false;

    }
  }
}


// export function newAlert(msg: string) {
//   alert(msg);
// }

// newAlert("test");