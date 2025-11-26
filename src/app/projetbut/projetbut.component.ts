import { Component, inject, Type } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogDataType } from '../../shared/dialog/dialog.component';
import { VideoComponent } from '../../shared/video/video.component';
import { Sae301Component } from './sae301/sae301.component';
import { Sae302Component } from './sae302/sae302.component';
import { Sae303Component } from './sae303/sae303.component';
import { Sae401Component } from './sae401/sae401.component';
import { Sae501Component } from './sae501/sae501.component';
import { Sae502Component } from './sae502/sae502.component';
import { Sae503Component } from './sae503/sae503.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LanguageService } from '../../services/language.service';


@Component({
    selector: 'app-projetbut',
    imports: [
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        CommonModule,
        MatTooltipModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        // DialogComponent,
        VideoComponent,
        // Sae301Component,
        // Sae302Component,
        // Sae303Component,
        // Sae401Component
    ],
    templateUrl: './projetbut.component.html',
    styleUrl: './projetbut.component.css'
})
export class ProjetbutComponent {
    public translation = inject(LanguageService);
    constructor(
        private dialog: MatDialog //on peut ouvrir un dialog sur ce composant
    ) { }

    openDialog(content: "sae301" | "sae302" | "sae303" | "sae401" | "sae501" | "sae502" | "sae503") {
        let compo: Type<any> = Sae301Component;
        let titre = this.translation.translate("PROJETBUT-TITRE-SAE301-ATTACHE");
        let note = "12,5/20";
        let tag1 = this.translation.translate("PROJETBUT-TAG-CONNECTER");
        let tag2 = this.translation.translate("PROJETBUT-TAG-TRANS");
        let tag3 = this.translation.translate("PROJETBUT-TAG-TELE");
        let tag4 = this.translation.translate("PROJETBUT-TAG-SYS-AN");
        switch (content) {
            default:
            case "sae301":
                break;
            case "sae302":
                compo = Sae302Component;
                titre = this.translation.translate("PROJETBUT-TITRE-SAE302-ATTACHE");
                note = "16,25/20";
                tag1 = this.translation.translate("PROJETBUT-TAG-CREER-OUTIL");
                tag2 = "Java";
                tag3 = this.translation.translate("PROJETBUT-TAG-APP");
                tag4 = "GUI";
                break;
            case "sae303":
                compo = Sae303Component;
                titre = this.translation.translate("PROJETBUT-TITRE-SAE303-ATTACHE");
                note = "14,51/20";
                tag1 = this.translation.translate("PROJETBUT-TAG-ADMIN");
                tag2 = "Active Directory";
                tag3 = this.translation.translate("PROJETBUT-TAG-MAIL");
                tag4 = "Windows - Linux";
                break;
            case "sae401":
                compo = Sae401Component;
                titre = this.translation.translate("PROJETBUT-TITRE-SAE4-CYB-01-ATTACHE");
                note = "16,5/20";
                tag1 = this.translation.translate("PROJETBUT-TAG-SECURISER");
                tag2 = this.translation.translate("PROJETBUT-TAG-SURVEILLER");
                tag3 = this.translation.translate("PROJETBUT-TAG-SYSTEM-INFO");
                tag4 = "Stormshield";
                break;
            case "sae501":
                compo = Sae501Component;
                titre = this.translation.translate("PROJETBUT-TITRE-SAE501-ATTACHE");
                note = "18,06/20";
                tag1 = this.translation.translate("PROJETBUT-TAG-ADMIN");
                tag2 = this.translation.translate("PROJETBUT-TAG-SECURISER");
                tag3 = "Windows/Linux";
                tag4 = "OSPF/BGP/VRF";
                break;
            case "sae502":
                compo = Sae502Component;
                titre = this.translation.translate("PROJETBUT-TITRE-SAE502-ATTACHE");
                note = "17/20";
                tag1 = this.translation.translate("PROJETBUT-TAG-ADMIN");
                tag2 = this.translation.translate("PROJETBUT-TAG-CREER-OUTIL");
                tag3 = this.translation.translate("PROJETBUT-TAG-PILOT");
                tag4 = this.translation.translate("PROJETBUT-TAG-HOP");
                break;
            case "sae503":
                compo = Sae503Component;
                titre = this.translation.translate("PROJETBUT-TITRE-SAE5-CYB-03-ATTACHE");
                note = "16/20";
                tag1 = this.translation.translate("PROJETBUT-TAG-SECURISER");
                tag2 = this.translation.translate("PROJETBUT-TAG-SURVEILLER");
                tag3 = "pfSense";
                tag4 = "Snort";
                break;
        }

        const dialodRef = this.dialog.open<DialogComponent, DialogDataType, number>(DialogComponent, {
            //on va ouvrir un dialog de type dialog container
            data: { //quand on ouvre le dialog
                btnNotOk: this.translation.translate("BTN-CLOSE"), //les données qu'on veut mettre dedans
                title: titre, 
                component: compo,
                // note: note, 
                tag1: tag1,
                tag2: tag2,
                tag3: tag3,
                tag4: tag4,
            },
            //propriété du Dialog en lui même
            maxHeight: "95dvh",
            maxWidth: "65vw",
            hasBackdrop: true,
            // empeche le scroll automatique en bas de page
            autoFocus: false,
        });

        dialodRef.afterClosed().subscribe(res => { }); //signale de type subscribe qui dit que dialog ref est fermée.
    }
    valueSelected = "adminsysres";
    // bgImgUrl = "./assets/img/background.jpg";
    bgImgUrl = "./assets/img/background2.mp4";
    // bgImgUrl2 = "./assets/img/os.jpg";
    // archisae301 = "./assets/img/sae301/infreseaux.png";
    // bgImgUrl4 = "./assets/img/sae301/munin.jpg";
    // bgImgUrl5 = "./assets/img/sae301/vpn.jpg";
    // cr_sae_301 = "./assets/img/sae301/cr_sae_301.pdf";
    // archi = "./assets/img/sae302/archi.PNG";
    // cr_sae_302 = "./assets/img/sae302/cr_sae_302.pdf";
    // video_sae_302 = "./assets/img/sae302/video_sae_302.mp4";
    // archisae303 = "./assets/img/sae303/archi.PNG";
    // roas = "./assets/img/sae303/roas.PNG";
    // cr_sae_303 = "./assets/img/sae303/cr_sae_303.pdf";
    // scan_reseau = "./assets/img/sae303/scan_reseau.pdf";
    // archisae401 = "./assets/img/sae401/archi.PNG";
    // cr_sae401_tache_2 = "./assets/img/sae401/cr_sae401_tache_2.pdf";
    // cr_sae401_tache_4 = "./assets/img/sae401/cr_sae401_tache_4.pdf";
    // cr_sae401_tache_7 = "./assets/img/sae401/cr_sae401_tache_7.pdf";
    // adressage_ip = "./assets/img/sae303/adressage_ip.pdf";
    show = false;
    show1 = false;
    show2 = false;
    show3 = false;
    openpopup() {
        this.show = true;
    }

    closepopup() {
        this.show = false;
    }

    openpopup1() {
        this.show1 = true;
    }

    closepopup1() {
        this.show1 = false;
    }

    openpopup2() {
        this.show2 = true;
    }

    closepopup2() {
        this.show2 = false;
    }
    openpopup3() {
        this.show3 = true;
    }

    closepopup3() {
        this.show3 = false;
    }


    closeoverlay(e: any) {
        if (e.target.classList.contains('overlay')) {
            this.show = false;
            this.show1 = false;
            this.show2 = false;
            this.show3 = false;
        }
    }
    makeImgUrl(str: string): string {
        return "url('" + str + "')"
    }

    isImageEnlarged = false;
    isImageEnlarged1 = false;
    isImageEnlarged2 = false;
    isImageEnlarged3 = false;

    enlargeImage() {
        this.isImageEnlarged = true;
    }

    closeEnlargedImage() {
        this.isImageEnlarged = false;
        this.isImageEnlarged3 = false;
        this.isImageEnlarged1 = false;
        this.isImageEnlarged2 = false;
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


}
