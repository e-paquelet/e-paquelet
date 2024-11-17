import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  // bgImgUrl = "./assets/img/background.jpg";
  bgImgUrl = "./assets/img/background2.mp4";
  bgImgUrl2 = "./assets/img/insta.jpeg";
  bgImgUrl3 = "./assets/img/guitare.jpeg";
  bgImgUrl4 = "./assets/img/rock.jpg";
  bgImgUrl5 = "./assets/img/tennis.jpg";
  bgImgUrl6 = "./assets/img/gaming.jpg";
  bgImgUrl7 = "./assets/img/favicon.png";
  bgImgUrl8 = "./assets/img/ain.jpg";
  bgImgUrl9 = "./assets/img/chess.jpg";
  bgImgUrl10 = "./assets/img/bike.jpg";
  logojulien = "./assets/img/logojulien.png";
  linkedinjulien = "https://www.linkedin.com/in/julien-v-57ab442aa/";
  makeImgUrl(str: string):string {
    return "url('" + str + "')"
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