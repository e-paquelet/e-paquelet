import { afterNextRender, Component, inject, Injector, ViewChild, Type } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { VideoComponent } from '../../shared/video/video.component';

import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent, DialogDataType } from '../../shared/card/card.component';


export interface ListeImage {
  titre: string;
  image: string;
  type: "adminsys" | "adminres" | "devweb" | "autoadm" | "securesi";
}

export interface ListeImage2 {
  titre: string;
  image: string;
  type: "tennis" | "chess" | "gaming" | "guitare" | "metal" | "velo";
}

@Component({
  selector: 'app-interest',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, TextFieldModule, VideoComponent],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css'
})
export class InterestComponent {
  constructor(private dialog: MatDialog) {

  }
  bgImgUrl = "./assets/img/background2.mp4";
  profil = "./assets/img/profil.JPG";
  adminsys = "./assets/img/interet/admsys.png";
  adminres = "./assets/img/interet/adminres.png";
  devweb = "./assets/img/interet/devweb.PNG";
  devweb2 = "./assets/img/interet/devweb2.png";
  autoadm = "./assets/img/interet/powershell.jpeg";
  velo = "./assets/img/interet/bike.jpg";
  rock = "./assets/img/interet/rock.jpg";
  guitare = "./assets/img/interet/guitare.jpg";
  chess = "./assets/img/interet/chess.jpg";
  gaming = "./assets/img/interet/front.PNG";
  tennis = "./assets/img/interet/tennis.jpg";
  cyber = "./assets/img/interet/cyber.jpg";
  windowsserver = "./assets/img/interet/ws.png";
  tennisclassement = "https://tenup.fft.fr/fichejoueur/10000315868?pratique=TENNIS";
  chessclassement = "https://www.chess.com/member/sotrf";
  valueSelected = "professionel";
  

  listeImage: ListeImage[] = [
    {
      titre: "L'administration système",
      image: this.adminsys,
      type: "adminsys",
    },
    // {
    //   titre: "L'administration réseaux",
    //   image: this.adminres,
    //   type: "adminres",
    // },
    {
      titre: "Le développement web",
      image: this.devweb,
      type: "devweb",
    },
    {
      titre: "L'automatisation des tâches d'administration",
      image: this.autoadm,
      type: "autoadm",
    },
    {
      titre: "Cybersécurité",
      image: this.cyber,
      type: "securesi",
    },

  ];

  listeImage2: ListeImage2[] = [
    {
      titre: "Le tennis",
      image: this.tennis,
      type: "tennis",
    },
    {
      titre: "Les échecs",
      image: this.chess,
      type: "chess",
    },
    {
      titre: "La guitare",
      image: this.guitare,
      type: "guitare",
    },
    // {
    //   titre: "Le métal - rock",
    //   image: this.rock,
    //   type: "metal",
    // },
    {
      titre: "Le vélo",
      image: this.velo,
      type: "velo",
    },
    {
      titre: "Les jeux vidéos",
      image: this.gaming,
      type: "gaming",
    },

  ];

  openCard(content: "tennis" | "chess" | "guitare" | "metal" | "gaming" | "velo" | "adminsys" | "adminres" | "devweb" | "autoadm" | "securesi") {
    let compo: String = `
<p>
    Le tennis est un sport que je pratique depuis maintenant 10 ans. Toutes les semaines, je m'entraîne pendant 1h30 le samedi matin. 
    N’ayant participé qu’à peu de tournois jusqu’à cette année, je me suis fixé comme objectif d’atteindre un classement de 30/3-30/2. 
    Cela me permettra d’évaluer mes progrès dans l’apprentissage de ce sport tout en affrontant de nouveaux adversaires. 
    Ce défi m’aidera également à sortir de ma zone de confort et à enrichir mon expérience en compétition. 
    Bien que le tennis soit un sport relativement individuel, je pense qu'il a également une part de sport collectif. 
    En effet, il faut être minimum 2 pour pratiquer ce sport et on a besoin de l'adversaire pour améliorer ses coups, avoir un feedback. 
    Ce sport demande également une certaine attitude et une mentalité. N'hésitez pas à retrouver mon classement dans le lien suivant :
</p>
<a target="_blank" href="${this.tennisclassement}">Retrouvez mon classement ici.</a>
`;
    let titre = "Le tennis";
    let headerpicture = this.profil;
    let frontpicture = this.tennis;
    switch (content) {
      default:
      case "tennis":
        break;
      case "chess":
        compo = `<p>Les échecs est une activité que je pratique souvent avec des amis en ligne sur chess.com ou sur plateau lorsqu'on a l'occasion de se voir.
         Cette activité me permet de développer ma capacité à réfléchir dans des situations différentes 
         les unes des autres et m'adapter constamment aux coups de l'adversaire. De plus, sur le site chess.com, un système d'élo (système permettant de définir le classement des joueurs) 
         et de problème sur mesure est fonctionnel et j'aime beaucoup résoudre les énigmes de coups pour faire mat. Ce système d'élo permet également de défier des joueurs ayant un élo plus ou moins égal au mien. 
         Actuellement, j'ai 900 d'elo environ j'entreprends l'objectif d'arriver a 1300 elo.
        J’ai toujours apprécié jouer aux échecs, tant pour la richesse des stratégies à élaborer que pour le sentiment de sérénité que procure cette discipline intellectuelle.</p>
        <a target="_blank" href="${this.chessclassement}">Retrouvez mon classement ici</a>
        `;
        titre = "Les échecs";
        headerpicture = this.profil;
        frontpicture = this.chess;
        break;
      case "guitare":
        compo = `<p>Je joue de la guitare depuis le CE2, où j'ai commencé à prendre des cours.
        Depuis, j'ai alterné entre des périodes d'apprentissage autodidacte et des phases encadrées par des professeurs. 
        J'ai exploré de nombreux genres musicaux, mais depuis 2020, je me consacre principalement au métal et plus particulièrement à la partie rythmique des morceaux de métal.
         J'apprécie particulièrement les parties rythmiques de ce style,
         qui me permettent de me détendre après une journée bien remplie et de m'évader pendant quelques instants. 
         Je n'évolue pas pour l'instant dans un groupe de musique et j'ai fait une pause cette année sur la guitare 
         afin de me permettre de me concentrer sur mes études. Mes artistes préférés sont : Rammstein, Metallica, Powerwolf, Green Day, Volbeat. 
         Je possède 2 guitares : une électrique et une électro-acoustique que je me suis acheté pour mes 18 ans. 
         `;
        titre = "La guitare";
        headerpicture = this.guitare;
        frontpicture = this.guitare;
        break;
      // case "metal":
      //   compo = `<p> </p>
      //   `;
      //   titre = "Le métal - rock";
      //   headerpicture = this.rock;
      //   frontpicture = this.rock;
      //   break;
      case "gaming":
        compo = `<p>J'ai commencé à jouer aux jeux vidéos à l'adolescence au collège quand mes parents ont acheté une WII.
         Depuis, je n'ai jamais arrêté de jouer mais j'ai diminué ma présence sur ceux ci durantr certaines périodes.
          Je suis particulièrement fan des jeux de stratégie, qu'ils soient en temps réel, 
          comme Conflict of Nations, ou au tour par tour avec des options multijoueurs, comme Civilization V.
           J'apprécie également les jeux de type GTA V, tels que Far Cry 5, ainsi que les jeux de survie, comme Sons of the Forest.
          Toujours curieux, je n'hésite pas à explorer de nouveaux jeux, étant constamment en quête de découvertes et de nouveautés.</p>
        `;
        titre = "Les jeux vidéos";
        headerpicture = this.profil;
        frontpicture = this.gaming;
        break;
      case "velo":
        compo = `<p> Je pratique cette activité physique de manière occasionnelle. 
        J'apprécie aussi bien les trajets en VTT sur des chemins variés que les parcours sur route, souvent sur de longues distances,
         autour de 40 km. Ce qui me plaît particulièrement, c'est la diversité des paysages que l'on peut découvrir au fil des balades, 
         ainsi que les sorties en famille sur les voies vertes. Cette activité me permet non seulement de profiter de la nature, 
         mais aussi de renforcer mon endurance et d'améliorer ma condition physique. Cette activité me sensibilise également à l'importance que pourrait avoir le
          vélo dans les transports quotidiens, à condition d'une météo clémente.  </p>
        `;
        titre = "Le vélo";
        headerpicture = this.profil;
        frontpicture = this.velo;
        break;
      case "adminsys":
        compo = `<p>À titre professionnel, je privilégie l’administration système et réseaux ainsi que leur sécurisation, 
        par rapport aux autres compétences que j’ai acquises durant mon BUT Réseaux et Télécommunications.
J’aime approfondir les connaissances acquises lors des TPs et des cours, que ce soit pendant mon temps libre 
ou dans le cadre des missions qui me sont confiées en entreprise. 
Par ailleurs, ma participation aux sélections régionales des WorldSkills en Bourgogne-Franche-Comté 
m’incite à m’entraîner régulièrement pour perfectionner et enrichir ces compétences. 
Je profite des machines virtuelles mises à disposition par l’IUT pour simuler et résoudre des cas pratiques.
        </p>
        `;
        titre = "L'administration système";
        headerpicture = this.profil;
        frontpicture = this.adminsys;
        break;
      // case "adminres":
      //   compo = `<p> </p>
      //   `;
      //   titre = "L'administration réseau";
      //   headerpicture = this.profil;
      //   frontpicture = this.adminres;
      //   break;
      case "devweb":
        compo = `<p>Le développement web n’a pas toujours été au cœur de mes intérêts. 
        Cependant, souhaitant renforcer mes compétences dans ce domaine, j’ai décidé, durant l’été 2024 et après une discussion avec un ami,
         de me lancer dans la création de ce site web en utilisant le framework Angular. Ce projet a été entièrement réalisé avec Angular,
          offrant une grande flexibilité dans son développement. J’ai pris beaucoup de plaisir à travailler sur ce projet et, depuis,
           je continue à approfondir mes connaissances en programmation web, notamment avec Angular, pour toujours m'améliorer.
           Ce projet m’a ainsi permis d’entrevoir de nombreuses idées pour d’autres réalisations. 
           Les compétences que j’ai développées à cette occasion me seront précieuses à l’avenir pour mener à bien de futurs projets
            </p>
        `;
        titre = "Le développement web";
        headerpicture = this.profil;
        frontpicture = this.devweb2;
        break;
      case "autoadm":
        compo = `<p>L’automatisation des tâches d’administration n’a pas toujours été au cœur de mes intérêts.
         Cependant, j’ai eu l’occasion d’explorer plus en détail cette facette de l’administration système lors de mon stage
          au sein du service informatique de la Préfecture de l’Ain. Une de mes missions consistait à créer un script capable
           de récupérer diverses informations, telles que la date du dernier accès à un dossier, les autorisations associées,
            la présence ou l'absence d’héritage des permissions, ainsi que les permissions en vigueur. Ce travail avait pour 
            objectif de faciliter la documentation et de clarifier les droits en place. Depuis, j’ai eu l’occasion de développer
             plusieurs scripts, notamment pour l’ajout massif d’utilisateurs dans Active Directory dans le cadre d’un projet.  </p>
        `;
        titre = "L'automatisation des tâches d'administrations";
        headerpicture = this.profil;
        frontpicture = this.autoadm;
        break;
      case "securesi":
        compo = `<p>Durant, notre formation en BUT R&T, on a eu un choix de spécialité à réaliser et j'ai choisi cybersécurité. 
        La cybersécurité englobe de nombreuses facettes : sécurisation du système d'information (SI), hacking éthique des infrastructure (pentesting) pour détecter les failles potentielles.
        J'apprécie particulièrement la sécurisation du SI avec l'utilisation de pare-feux : Stormshield, pfSense. 
        J'ai également certains centre d'intérêts dans le pentesting, notamment pour sensibiliser, comme le développements de script pour rubber ducky à des fins de sensibilisation et
         de test mais jamais dans une vision d'attaques pour voler des informations.
         </p>
        `;
        titre = "Cybersécurité";
        headerpicture = this.profil;
        frontpicture = this.cyber;
        break;
    }

    const dialogref = this.dialog.open<CardComponent, DialogDataType, any>(CardComponent, {

      data: {
        titre: titre,
        headerpicture: headerpicture,
        frontpicture: frontpicture,
        texte: compo,
      },

      // height: "60dvh",
      // maxWidth: "100dvw",
    })
  }



  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }
}
