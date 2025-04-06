import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-sae503',
    imports: [NgIf],
    templateUrl: './sae503.component.html',
    styleUrl: './sae503.component.css'
})
export class Sae503Component {

    oldsi = "./assets/img/sae503/oldsi.PNG";
    newsi = "./assets/img/sae503/newsi.PNG";
    zabbix = "./assets/img/sae503/zabbix.PNG";

    docetude = "./assets/img/sae503/Document d'Etude.pdf";

    altinfra = "Photo de l'infrastructure informatique version 1";
    altinfrav2 = "Photo de l'infrastructure informatique version finale";
    trelloalt= "Photo de notre tableau Trello";


    isImageEnlarged = false;
    isImageEnlarged2 = false;
    isImageEnlarged3 = false;

    enlargeImage() {
        this.isImageEnlarged = true;
    }

    enlargeImage2() {
        this.isImageEnlarged2 = true;
    }

    enlargeImage3() {
        this.isImageEnlarged3 = true;
    }

    closeEnlargedImage() {
        this.isImageEnlarged = false;
        this.isImageEnlarged2 = false;
        this.isImageEnlarged3 = false;
    }

}
