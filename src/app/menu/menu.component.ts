import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-menu',
    imports: [RouterLink],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css'
})
export class MenuComponent {

  photocompetence = "./assets/img/background.jpg";
  contact = "./assets/img/menu/contact.jpg";
  accueil = "./assets/img/menu/accueil.PNG";
  cd01 = "./assets/img/menu/ain2.jpg";
  competence = "./assets/img/menu/competence.PNG";
  rs = "./assets/img/menu/rs.PNG";
  pointinterro = "./assets/img/menu/pointinterro.jpg";
  makeImgUrl(str: string):string {
    return "url('" + str + "')"
  }
  

  // redirect(e: any) {
  //   if (e.target.classList.contains('competence') ) {
  //     this.router.navigate
  //   }
  // }
}
