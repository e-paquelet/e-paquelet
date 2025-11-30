import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

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

    public translation = inject(LanguageService);
   
    adressage_ip = "./assets/img/sae501/Adressage IP.xlsx";
    cr_sae_501 = "./assets/img/sae501/cr_sae_501.pdf";

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
            text: this.translation.translate("SAE501-TXT-IMG1"),
            fct: () => { this.enlargeImage() },
        },
        {
            img: this.physicalscheme_detailled,
            text:  this.translation.translate("SAE501-TXT-IMG2"),
            fct: () => { this.enlargeImage1() },
        },
        {
            img: this.l3scheme,
            text:  this.translation.translate("SAE501-TXT-IMG3"),
            fct: () => { this.enlargeImage2() },
        },
        {
            img: this.l2scheme,
            text:  this.translation.translate("SAE501-TXT-IMG4"),
            fct: () => { this.enlargeImage3() },
        },
        {
            img: this.routingscheme,
            text:  this.translation.translate("SAE501-TXT-IMG5"),
            fct: () => { this.enlargeImage4() },
        },
        {
            img: this.dnsscheme,
            text:  this.translation.translate("SAE501-TXT-IMG6"),
            fct: () => { this.enlargeImage5() },
        },

    ]


}
