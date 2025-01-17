import { AfterViewInit, Component, HostListener } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

type ListeContactItem = {
  img: string;
  text: string;
  link: string;
  alt: string;
}

@Component({
    selector: 'app-prog1',
    imports: [MenuComponent, CommonModule, MatIconModule, MatButtonModule, MatDividerModule],
    templateUrl: './prog1.component.html',
    styleUrl: './prog1.component.css'
})
export class Prog1Component {
    bgImgUrl = "./assets/img/background.jpg";
    bgImgUrl4 = "./assets/img/profil.png";
    bgImgUrl1 = "./assets/img/linkedin.png";
    bgImgUrl2 = "./assets/img/mail.png";
    bgImgUrl3 = "./assets/img/ain.jpg";
    video = "./assets/img/background2.mp4"
    video_sae_302 = "./assets/img/sae302/video_sae_302.mp4";
    dianeUrl = "./assets/img/mdp.jpg";
    flechebas = "./assets/img/fleche.png";
    dianeArray: string[] = [];
    menu = "./assets/img/interet/menu.png";
    listeContact: ListeContactItem[] = [
      {
        img: this.bgImgUrl3,
        link: "https://www.linkedin.com/in/etienne-paquelet/",
        text: "Etienne PAQUELET",
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
          elmt.src = this.bgImgUrl4;
          elmt.alt = "Image de profil";
        }
      });
    }
  
    makeImgUrl(str: string): string {
      return "url('" + str + "')"
    }
    
    show = false;
    private timeoutId: any = null;
    private isClicked = false; // Ajout pour suivre le clic manuel
    
    openpopup() {
        clearTimeout(this.timeoutId);  // Annule la fermeture en attente
        this.show = true;
    }
    
    delayedClosePopup() {
        if (!this.isClicked) {
            this.timeoutId = setTimeout(() => {
                this.show = false;
            }, 200); // Délai pour éviter la fermeture immédiate
        }
    }
    
    togglePopup(event: MouseEvent) {
        event.stopPropagation();  // Empêche la propagation pour éviter l'appel du mouseleave
        this.isClicked = true;
        this.show = true;
    }
    
    // Optionnel : Fermer si on clique ailleurs
    @HostListener('document:click')
    closeOnClickOutside() {
        if (this.show && !this.isClicked) {
            this.show = false;
        }
        this.isClicked = false;
    }
    

}
