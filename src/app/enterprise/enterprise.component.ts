import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VideoComponent } from '../../shared/video/video.component';

@Component({
  selector: 'app-enterprise',
  standalone: true,
  imports: [MatTooltipModule, VideoComponent],
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.css'
})
export class EnterpriseComponent {
  bgImgUrl = "./assets/img/background2.mp4";
  bgImgUrl2 = "./assets/img/entreprise/logoain.png";
  carteain = "./assets/img/entreprise/carteain.png";
  marque = "./assets/img/entreprise/ica.png";
  altmarque = "Marque du Conseil Départemental de l'Ain";
  altain = "Localisation du Département de l'Ain. Son chef lieu est Bourg en Bresse"

  makeImgUrl(str: string):string {
    return "url('" + str + "')"
  }

}
