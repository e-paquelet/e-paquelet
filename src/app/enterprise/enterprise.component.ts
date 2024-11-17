import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-enterprise',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.css'
})
export class EnterpriseComponent {
  bgImgUrl = "/assets/img/background2.mp4";
  bgImgUrl2 = "/assets/img/logoain.png";
  carteain = "/assets/img/carteain.png";
  marque = "/assets/img/ica.png";
  altmarque = "Marque du Conseil Départemental de l'Ain";
  altain = "Localisation du Département de l'Ain. Son chef lieu est Bourg en Bresse"

  makeImgUrl(str: string):string {
    return "url('" + str + "')"
  }

}
