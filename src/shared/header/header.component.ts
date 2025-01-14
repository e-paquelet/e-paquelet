import { Component } from '@angular/core';

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
    standalone: true,
    imports: [],
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
}
