import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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


