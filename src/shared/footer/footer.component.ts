import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
  public translation = inject(LanguageService);
  date: number;
  seconds: number;
  heure: number;
  minutes: number;
  fullDate: string;

  constructor() {
    var date = new Date();
    this.minutes = date.getMinutes();
    this.date = date.getFullYear();
    this.seconds = date.getSeconds();
    this.fullDate = date.toLocaleDateString();
    this.heure = date.getHours();
    setInterval(() => {
      date = new Date();
      this.minutes = date.getMinutes();
      this.date = date.getFullYear();
      this.heure = date.getHours();
      this.seconds = date.getSeconds();
      this.fullDate = date.toLocaleDateString();
    }, 1000);
  }
}


