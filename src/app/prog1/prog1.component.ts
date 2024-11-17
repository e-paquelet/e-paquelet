import { AfterViewInit, Component } from '@angular/core';

type ListeContactItem = {
  img: string;
  text: string;
  link: string;
  alt: string;
}

@Component({
  selector: 'app-prog1',
  standalone: true,
  imports: [],
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
    

}
