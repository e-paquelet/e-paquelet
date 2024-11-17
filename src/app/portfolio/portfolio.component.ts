import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatProgressBarModule, CommonModule, MatTooltipModule, MatButtonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  // bgImgUrl = "./assets/img/background.jpg";
  bgImgUrl = "./assets/img/background2.mp4";
  bgImgUrl2 = "./assets/img/os.jpg";
  bgImgUrl3 = "./assets/img/reseaux22.png";
  bgImgUrl4 = "./assets/img/virtual.jpg";
  bgImgUrl5 = "./assets/img/sql.png";
  bgImgUrl6 = "./assets/img/telecom.jpg";
  bgImgUrl7 = "./assets/img/dev2.jpg";
  bgImgUrl8 = "./assets/img/cyber3.png";
  bgImgUrl9 = "./assets/img/cert.jpg";
  show = false;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6=false;
  show15=false;
  openpopup() {

    this.show = true;

  }

  closepopup() {
    this.show = false;
  }

  
  openpopup1() {

    this.show1 = true;
  }

  closepopup1() {
    this.show1 = false;
  }

  openpopup15() {

    this.show15 = true;
  }

  closepopup15() {
    this.show15 = false;
  }
  openpopup2() {

    this.show2 = true;
  }

  closepopup2() {
    this.show2 = false;
  }

  openpopup3() {

    this.show3 = true;
  }

  closepopup3() {
    this.show3 = false;
  }

  openpopup4() {

    this.show4 = true;

  }

  closepopup4() {
    this.show4 = false;
  }

  openpopup5() {

    this.show5 = true;
  }

  closepopup5() {
    this.show5 = false;
  }

  openpopup6() {

    this.show6 = true;
  }

  closepopup6() {
    this.show6 = false;
  }


  closeoverlay(e: any) {
    if (e.target.classList.contains('overlay')) {
      this.show = false;
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show15 = false;
    }
  }
  


  
  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }



}
