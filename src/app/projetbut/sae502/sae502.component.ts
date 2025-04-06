import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-sae502',
    imports: [NgIf],
    templateUrl: './sae502.component.html',
    styleUrl: './sae502.component.css'
})
export class Sae502Component {
    infra = "./assets/img/sae502/infra.png";
    infrav2 = "./assets/img/sae502/infrav2.png";
    trello = "./assets/img/sae502/trello.PNG";

    cdc = "./assets/img/sae502/cdc.pdf";

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
