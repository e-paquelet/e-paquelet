import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  bgImgUrl = "/assets/img/background.jpg";
  bgImgUrl2 = "/assets/img/insta.jpeg";
  bgImgUrl3 = "/assets/img/guitare.jpeg";
  bgImgUrl4 = "/assets/img/rammstein.png";
  bgImgUrl5 = "/assets/img/tennis.jpg";
  bgImgUrl6 = "/assets/img/gaming.jpg";
  bgImgUrl7 = "/assets/img/profil.png";

  makeImgUrl(str: string):string {
    return "url('" + str + "')"
  }
}


// export function newAlert(msg: string) {
//   alert(msg);
// }

// newAlert("test");