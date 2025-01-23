import { Component, HostListener } from '@angular/core';
import { MenuComponent } from '../../app/menu/menu.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

export interface ListeMenu {
    titre: string;
    title?: string;
    redirection: string,
}

export interface ListeReseau {
    img: string;
    redirection: string,
    alt: string
}

@Component({
    selector: 'app-header',
    imports: [
        MatButtonModule,
        MatDividerModule,
        MenuComponent,
        MatIconModule, 
        CommonModule
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    bgImgUrl1 = "./assets/img/accueil/profillogo.JPG"

    listeMenu: ListeMenu[] = [
        {
            titre: "Alternance",
            redirection: "./entreprise"
        },
        // { demander avis à Hugo
        //     titre: "Mes centres d'intérêts",
        //     redirection: "./entreprise"
        // },
        {
            titre: "Mes compétences",
            redirection: "./portfolio",
        },
        {
            titre: "Vitrine de mes projets",
            redirection: "./projet-but",
            title: "Les projets fait dans mon BUT"
        },
        
        {
            titre: "Contact",
            redirection: "./contact",
        },
    ];

    listeReseaux: ListeReseau[] = [
        {
            redirection: "https://www.linkedin.com/in/etienne-paquelet/",
            img: "./assets/img/contact/linkedin.png",
            alt: "Linkedin"
        },

    ]

     show = false;
        private timeoutId: any = null;
        private isClicked = false; 
        
        openpopup() {
            clearTimeout(this.timeoutId);  
            this.show = true;
        }
        
        delayedClosePopup() {
            if (!this.isClicked) {
                this.timeoutId = setTimeout(() => {
                    this.show = false;
                }, 200); 
            }
        }
        
        togglePopup(event: MouseEvent) {
            event.stopPropagation();  
            this.isClicked = true;
            this.show = true;
        }
        
        // Optionnel : Fermer si on clique ailleurs
        @HostListener('document:click')
        closeOnClickOutside() {
            if (this.show && !this.isClicked) {
                
            }
            this.isClicked = false;
            this.show = false;
        }
        
}
