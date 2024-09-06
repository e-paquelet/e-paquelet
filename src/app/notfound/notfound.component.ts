import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { AccueilComponent } from "../accueil/accueil.component";



@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatButtonModule, AccueilComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  bgImgUrl = "/assets/img/grdrouage.png";
  bgImgUrl2 = "/assets/img/rouage.png";
  bgImgUrl3  = "/assets/img/bg4.jpg";

  

  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }

  directory = window.location.pathname.split("/").pop()?.trim();
}
