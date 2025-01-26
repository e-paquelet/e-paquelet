import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ListeImage {
    img: string;
    text: string;
    fct: Function;
}

@Component({
    selector: 'app-sae501',
    imports: [CommonModule],
    templateUrl: './sae501.component.html',
    styleUrl: './sae501.component.css'
})
export class Sae501Component {
    archisae303 = "./assets/img/sae303/archi.PNG";
    roas = "./assets/img/sae303/roas.PNG";
    cr_sae_303 = "./assets/img/sae303/cr_sae_303.pdf";
    scan_reseau = "./assets/img/sae303/scan_reseau.pdf";
    adressage_ip = "./assets/img/sae501/Adressage IP.xlsx";
    video_sae_303 = "./assets/img/sae303/etienne_paquelet_video.mp4";

    physicalscheme_simplified = "./assets/img/sae501/SAE-schéma-physique-simplifié.png";
    physicalscheme_detailled = "./assets/img/sae501/SAE-schéma-Physical - Detailled.png";
    l2scheme = "./assets/img/sae501/SAE-schéma-Logical - Layer 3.png";
    l3scheme = "./assets/img/sae501/SAE-schéma-Logical - Layer 2.png";
    routingscheme = "./assets/img/sae501/SAE-schéma-Logical - Routing.png";
    dnsscheme = "./assets/img/sae501/SAE-schéma-DNS.png";

    lienscript = "./assets/img/sae501/script_on_CORESW1.txt"
    liensquelette = "./assets/img/sae501/squelette.PNG";
    lienscriptpws = "./assets/img/sae501/adduserou.ps1";

    isImageEnlarged = false;
    isImageEnlarged1 = false;
    isImageEnlarged2 = false;
    isImageEnlarged3 = false;
    isImageEnlarged4 = false;
    isImageEnlarged5 = false;

    enlargeImage() {
        this.isImageEnlarged = true;
    }

    closeEnlargedImage() {
        this.isImageEnlarged = false;
        this.isImageEnlarged1 = false;
        this.isImageEnlarged2 = false;
        this.isImageEnlarged3 = false;
        this.isImageEnlarged4 = false;
        this.isImageEnlarged5 = false;
    }

    enlargeImage1() {
        this.isImageEnlarged1 = true;
    }

    enlargeImage2() {
        this.isImageEnlarged2 = true;
    }

    enlargeImage3() {
        this.isImageEnlarged3 = true;
    }

    enlargeImage4() {
        this.isImageEnlarged4 = true;
    }

    enlargeImage5() {
        this.isImageEnlarged5 = true;
    }
    ListeImage: ListeImage[] = [

        {
            img: this.physicalscheme_simplified,
            text: "schéma physique simplifié",
            fct: () => { this.enlargeImage() },
        },
        {
            img: this.physicalscheme_detailled,
            text: "Schéma physique détaillé",
            fct: () => { this.enlargeImage1() },
        },
        {
            img: this.l3scheme,
            text: "Schéma logique de la couche 3",
            fct: () => { this.enlargeImage2() },
        },
        {
            img: this.l2scheme,
            text: "Schéma logique de la couche 2",
            fct: () => { this.enlargeImage3() },
        },
        {
            img: this.routingscheme,
            text: "Schéma détaillé du routage",
            fct: () => { this.enlargeImage4() },
        },
        {
            img: this.dnsscheme,
            text: "Schéma DNS",
            fct: () => { this.enlargeImage5() },
        },

    ]


}
