import { Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { VideoComponent } from '../../shared/video/video.component';
import { LanguageService } from '../../services/language.service';

type Button = {
  img: string,
  text: string,
  tags: string[],
  fct: Function,
  tooltip: string
}

@Component({
  selector: 'app-portfolio',
  imports: [MatProgressBarModule,
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    VideoComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  public translation = inject(LanguageService);
  // bgImgUrl = "./assets/img/background.jpg";
  bgImgUrl = "./assets/img/background2.mp4";
  bgImgUrl2 = "./assets/img/competence/os.jpg";
  bgImgUrl3 = "./assets/img/competence/reseaux22.png";
  bgImgUrl4 = "./assets/img/competence/virtual.jpg";
  bgImgUrl5 = "./assets/img/competence/sql.png";
  bgImgUrl6 = "./assets/img/competence/telecom.jpg";
  bgImgUrl7 = "./assets/img/competence/dev2.jpg";
  bgImgUrl8 = "./assets/img/competence/cyber3.png";
  bgImgUrl9 = "./assets/img/competence/cert.jpg";
  show = false;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  show15 = false;

  get buttons(): Button[] {
    return [
      {
        text: this.translation.translate("PORTFOLIO-TITRE-COMPETENCE-UN"),
        tooltip: "Mes compétences en Administration Systèmes et réseaux",
        tags: [this.translation.translate("PORTFOLIO-COMPETENCE-UN-TAG1"), this.translation.translate("PORTFOLIO-COMPETENCE-UN-TAG2")],
        fct: () => { this.openpopup() },
        img: this.bgImgUrl2,
      },
      {
        text: this.translation.translate("PORTFOLIO-TITRE-COMPETENCE-DEUX"),
        tooltip: "Mes compétences en Télécommunication",
        tags: [this.translation.translate("PORTFOLIO-COMPETENCE-DEUX-TAG1"), this.translation.translate("PORTFOLIO-COMPETENCE-DEUX-TAG2"), this.translation.translate("PORTFOLIO-COMPETENCE-DEUX-TAG3"), this.translation.translate("PORTFOLIO-COMPETENCE-DEUX-TAG4")],
        fct: () => { this.openpopup1() },
        img: this.bgImgUrl3,
      },
      {
        text: this.translation.translate("PORTFOLIO-TITRE-COMPETENCE-TROIS"),
        tooltip: "Mes compétences en programmation",
        tags: [this.translation.translate("PORTFOLIO-COMPETENCE-TROIS-TAG1"), this.translation.translate("PORTFOLIO-COMPETENCE-TROIS-TAG2"), this.translation.translate("PORTFOLIO-COMPETENCE-TROIS-TAG3"), this.translation.translate("PORTFOLIO-COMPETENCE-TROIS-TAG4")],
        fct: () => { this.openpopup2() },
        img: this.bgImgUrl7,
      },
      {
        text: this.translation.translate("PORTFOLIO-TITRE-COMPETENCE-QUATRE"),
        tooltip: "Mes compétences en cybersécurité",
        tags: [this.translation.translate("PORTFOLIO-COMPETENCE-QUATRE-TAG1"), this.translation.translate("PORTFOLIO-COMPETENCE-QUATRE-TAG2")],
        fct: () => { this.openpopup3() },
        img: this.bgImgUrl8,
      },
      {
        text: this.translation.translate("PORTFOLIO-TITRE-COMPETENCE-CINQ"),
        tooltip: "Mes compétences en cybersécurité",
        tags: [this.translation.translate("PORTFOLIO-COMPETENCE-CINQ-TAG1"), this.translation.translate("PORTFOLIO-COMPETENCE-CINQ-TAG2")],
        fct: () => { this.openpopup4() },
        img: this.bgImgUrl8,
      },
      {
        text: this.translation.translate("PORTFOLIO-CERTIF-TITRE"),
        tooltip: "Mes certifications",
        tags: ["CCNA",],
        fct: () => { this.openpopup5() },
        img: this.bgImgUrl9,
      },
    ]
  }

  openpopup() {

    this.show = true;

  }

  closepopup() {
    this.show = false;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show15 = false;
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
