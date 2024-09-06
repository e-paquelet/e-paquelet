import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-projetbut',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule, MatTooltipModule],
  templateUrl: './projetbut.component.html',
  styleUrl: './projetbut.component.css'
})
export class ProjetbutComponent {
  bgImgUrl = "/assets/img/background.jpg";
  bgImgUrl2 = "/assets/img/os.jpg";
  bgImgUrl3 = "/assets/img/sae301/infreseaux.png";
  show = false;
  openpopup(){
    this.show = true;
  }

  closepopup() {
    this.show = false;
  }

  closeoverlay(e:any){
    if (e.target.classList.contains('overlay')) {
        this.show = false;
    }
  }
  makeImgUrl(str: string):string {
    return "url('" + str + "')"
  }
}
