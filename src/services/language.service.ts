import { Injectable, signal } from '@angular/core';
import { LocationService } from './location.service';

export const TRANSLATION_KEY = [
  "ACCUEIL-ABOUT_ME",
  "ARGUMENT_EXAMPLE",
  "ACCUEIL-WELCOME",
  "ACCUEIL-POSTE",
  "ACCUEIL-WHOAMI",
  "ACCUEIL-WHOAMI_TEXT",
  "ACCUEIL-MY_QUALITY",
  "ACCUEIL-RIGOUREUX",
  "ACCUEIL-AUTONOME",
  "ACCUEIL-CURIEUX",
  "ACCUEIL-TEAM_SPIRIT",
  "ACCUEIL-FIABLE",
  "ACCUEIL-SERVIABLE",
  "ACCUEIL-MOTIVE",
  "ACCUEIL-FORMATION",
  "ACCUEIL-FORMATION_SUB_TEXTE",
  "ACCUEIL-DOWNLOAD",
  "ACCUEIL-FORMATION_UN",
  "ACCUEIL-FORMATION_SECOND",
  "ACCUEIL-FORMATION_THIRD",
  "TEMOIGNAGE_TITRE",
  "TEMOIGNAGE_NAME",
  "TEMOIGNAGE_TEXTE",
  "TEMOIGNAGE_SIGNATURE",
  "HEADER2-TITRE",
  "HEADER2-APROPOS",
  "HEADER2-INTERET",
  "HEADER2-COMPETENCE",
  "HEADER2-PROJET",
  "HEADER2-RS",
  "HEADER2-CONTACT",
  "ACCUEIL-PROJETPRO",
  "ACCUEIL-EXP_PRO_MISSION_UN",
  "ACCUEIL-EXP_PRO_POSTE_UN",
  "ACCUEIL-EXP_PRO_SOMMAIRE_UN",
  "ACCUEIL-EXP_PRO_DATE_UN",
  "ACCUEIL-EXP_PRO_MISSION_DEUX",
  "ACCUEIL-EXP_PRO_POSTE_DEUX",
  "ACCUEIL-EXP_PRO_SOMMAIRE_DEUX",
  "ACCUEIL-EXP_PRO_DATE_DEUX",
  "ACCUEIL-EXP_PRO_MISSION_TROIS",
  "ACCUEIL-EXP_PRO_POSTE_TROIS",
  "ACCUEIL-EXP_PRO_SOMMAIRE_TROIS",
  "ACCUEIL-EXP_PRO_DATE_TROIS",
  "ACCUEIL-EXP_PRO_MISSION_QUATRE",
  "ACCUEIL-EXP_PRO_POSTE_QUATRE",
  "ACCUEIL-EXP_PRO_SOMMAIRE_QUATRE",
  "ACCUEIL-EXP_PRO_DATE_QUATRE",
  "ACCUEIL-EXP_PRO_MISSION_CINQ",
  "ACCUEIL-EXP_PRO_POSTE_CINQ",
  "ACCUEIL-EXP_PRO_SOMMAIRE_CINQ",
  "ACCUEIL-EXP_PRO_DATE_CINQ",
  "ACCUEIL-PROJETPRO_TITRE",
  "ACCUEIL-EXP_PRO_TITRE",
  "INTERET-TITRE",
  "INTERET-PRESENTATION",
  "INTERET-MATOPTION1",
  "INTERET-MATOPTION2",
  "INTERET-ADMINSYS-TITRE",
  "INTERET-ADMINRES-TITRE",
  "INTERET-DEVWEB-TITRE",
  "INTERET-AUTO-TITRE",
  "INTERET-CYBER-TITRE",
  "INTERET-TENNIS-TITRE",
  "INTERET-ECHEC-TITRE",
  "INTERET-GUITARE-TITRE",
  "INTERET-BIKE-TITRE",
  "INTERET-JEUXVIDEO-TITRE",
  "INTERET-TENNIS-TEXTE",
  "INTERET-BIKE-TEXTE",
  "INTERET-ECHEC-TEXTE",
  "INTERET-JEUXVIDEO-TEXTE",
  "INTERET-GUITARE-TEXTE",
  "INTERET-CYBER-TEXTE",
  "INTERET-DEVWEB-TEXTE",
  "INTERET-ADMINSYS-TEXTE",
  "INTERET-AUTO-TEXTE",
  "RS-TITRE",
  "RS-GITHUB-TEXTE",
  "RS-GITHUB-COLLAB",
  "RS-GITHUB-SUIVI",
  "RS-GITHUB-GESTION",
  "RS-GITHUB-OPEN-SOURCE",
  "RS-GITHUB-LAST-TEXTE",
  "RS-GITHUB-BUTTON",
  "RS-GITHUB-FIRST-TEXTE",
  "RS-GITHUB-SECOND-TEXTE",
  "RS-GITHUB-THIRD-TEXTE",
  "RS-LINKEDIN-TEXTE",
  "RS-LINKEDIN-RECHERCHE",
  "RS-LINKEDIN-DEV",
  "RS-LINKEDIN-COLLAB",
  "RS-LINKEDIN-LAST-TEXTE",
  "RS-LINKEDIN-BUTTON",
  "RS-LINKEDIN-FIRST-TEXTE",
  "RS-LINKEDIN-SECOND-TEXTE",
  "RS-LINKEDING-THIRD-TEXTE",
  "FOOTER",
  "CONTACT-FIRST-PART",
  "CONTACT-SECOND-PART",
  "CONTACT-FIRST-TOOLTIP",
  "CONTACT-SECOND-TOOLIP",
  "CONTACT-THIRD-TOOLTIP",
  "CONTACT-THIRD-PART",

  //titre page
  "PORTFOLIO-TITRE",
  "PORTFOLIO-PRESENTATION",
  //première box
  "PORTFOLIO-TITRE-COMPETENCE-UN",
  "PORTFOLIO-COMPETENCE-UN-TAG1",
  "PORTFOLIO-COMPETENCE-UN-TAG2",
  "PORTFOLIO-TITRE-UN-COMPETENCE-UN-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-UN-COMPETENCE-UN-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-COMPETENCE-UN-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TITRE-UN-COMPETENCE-UN-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TITRE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TEXTE-UN-COMPETENCE-UN-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TEXTE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TEXTE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TEXTE-QUATRE-COMPETENCE-UN-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TEXTE-CINQ-COMPETENCE-UN-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TITRE-COMPETENCE-UN-SOUS-COMPETENCE-TROIS",
  "PORTFOLIO-TITRE-UN-COMPETENCE-UN-SOUS-COMPETENCE-TROIS",
  "PORTFOLIO-TITRE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-TROIS",
  "PORTFOLIO-TITRE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-TROIS",
  "PORTFOLIO-TEXTE-UN-COMPETENCE-UN-SOUS-COMPETENCE-TROIS",
  "PORTFOLIO-TEXTE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-TROIS",
  "PORTFOLIO-TEXTE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-TROIS",
  "PORTFOLIO-TEXTE-QUATRE-COMPETENCE-UN-SOUS-COMPETENCE-TROIS",
  "PORTFOLIO-TITRE-QUATRE-COMPETENCE-UN-SOUS-COMPETENCE-TROIS",
  //seconde box
  "PORTFOLIO-TITRE-COMPETENCE-DEUX",
  "PORTFOLIO-COMPETENCE-DEUX-TAG1",
  "PORTFOLIO-COMPETENCE-DEUX-TAG2",
  "PORTFOLIO-COMPETENCE-DEUX-TAG3",
  "PORTFOLIO-COMPETENCE-DEUX-TAG4",
  "PORTFOLIO-TITRE-UN-COMPETENCE-DEUX-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-COMPETENCE-DEUX-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-DEUX-COMPETENCE-DEUX-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-UN-COMPETENCE-DEUX-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-DEUX-COMPETENCE-DEUX-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-TROIS-COMPETENCE-DEUX-SOUS-COMPETENCE-UN",
  //troisième box
  "PORTFOLIO-TITRE-COMPETENCE-TROIS",
  "PORTFOLIO-COMPETENCE-TROIS-TAG1",
  "PORTFOLIO-COMPETENCE-TROIS-TAG2",
  "PORTFOLIO-COMPETENCE-TROIS-TAG3",
  "PORTFOLIO-COMPETENCE-TROIS-TAG4",
  "PORTFOLIO-TITRE-COMPETENCE-TROIS-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-DEUX-COMPETENCE-TROIS-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-TROIS-COMPETENCE-TROIS-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-QUATRE-COMPETENCE-TROIS-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-DEUX-COMPETENCE-TROIS-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-TROIS-COMPETENCE-TROIS-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-QUATRE-COMPETENCE-TROIS-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TITRE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TEXTE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX",
  "PORTFOLIO-TEXTE-DEUX-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX",
  //quatrième box
  "PORTFOLIO-TITRE-COMPETENCE-QUATRE",
  "PORTFOLIO-COMPETENCE-QUATRE-TAG1",
  "PORTFOLIO-COMPETENCE-QUATRE-TAG2",
  "PORTFOLIO-TITRE-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-UN-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-DEUX-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-TROIS-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-UN-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-DEUX-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-TROIS-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-QUATRE-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-CINQ-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-SIX-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-SEPT-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-HUIT-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-NEUF-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN",
  //cinquième box
  "PORTFOLIO-TITRE-COMPETENCE-CINQ",
  "PORTFOLIO-COMPETENCE-CINQ-TAG1",
  "PORTFOLIO-COMPETENCE-CINQ-TAG2",
  "PORTFOLIO-TITRE-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-UN-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-DEUX-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TITRE-TROIS-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-UN-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-DEUX-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-TROIS-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-QUATRE-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-CINQ-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-SIX-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-SEPT-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-HUIT-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-TEXTE-NEUF-COMPETENCE-CINQ-SOUS-COMPETENCE-UN",
  "PORTFOLIO-CERTIF-TITRE",
  "PORTFOLIO-CERTIF-SOUS-TITRE-UN",
  "PORTFOLIO-CERTIF-SOUS-TITRE-DEUX",
  "PORTFOLIO-CERTIF-SOUS-TITRE-TROIS",
  "PORTFOLIO-CERTIF-TEXTE-UN",
  "PORTFOLIO-CERTIF-TEXTE-DEUX",
  "PORTFOLIO-CERTIF-TEXTE-TROIS",
  "PORTFOLIO-CERTIF-TAG1",
  "PROJETBUT-TITRE",
  "PROJETBUT-PRESENTATION-UN",
  "PROJETBUT-PRESENTATION-UE-UN",
  "PROJETBUT-PRESENTATION-UE-DEUX",
  "PROJETBUT-PRESENTATION-UE-TROIS",
  "PROJETBUT-PRESENTATION-DEUX",
  "PROJETBUT-CYBERSECURITE",
  "PROJETBUT-IOT",
  "PROJETBUT-PILPRO",
  "PROJETBUT-PRESENTATION-TROIS",
  "PROJETBUT-PRESENTATION-UE-QUATRE",
  "PROJETBUT-PRESENTATION-UE-CINQ",
  "PROJETBUT-PRESENTATION-QUATRE",
  "PROJETBUT-PRESENTATION-CINQ",
  "PROJETBUT-PRESENTATION-SIX",
  "PROJETBUT-COMPTEUR-CYBER",
  "PROJETBUT-COMPTEUR-ADMIN",
  "PROJETBUT-COMPTEUR-DEV",
  "PROJETBUT-COMPTEUR-TELECOM",
  "PROJETBUT-COMPTEUR-GP",
  "PROJETBUT-CHOIX-SPE",
  "PROJETBUT-LABEL-BACKGROUND-TEXTE",
  "PROJETBUT-CHOIX-LABEL-UN",
  "PROJETBUT-CHOIX-LABEL-DEUX",
  "PROJETBUT-CHOIX-LABEL-TROIS",
  "PROJETBUT-CHOIX-LABEL-QUATRE",
  "PROJETBUT-CHOIX-LABEL-CINQ",
  "PROJETBUT-TITRE-SAE301",
  "PROJETBUT-DESCRIPTION-SAE301",
  "PROJETBUT-TITRE-SAE302",
  "PROJETBUT-DESCRIPTION-SAE302",
  "PROJETBUT-TITRE-SAE303",
  "PROJETBUT-DESCRIPTION-SAE303",
  "PROJETBUT-TITRE-SAE501",
  "PROJETBUT-DESCRIPTION-SAE501",
  "PROJETBUT-TITRE-SAE4-CYB-01",
  "PROJETBUT-DESCRIPTION-SAE4-CYB-01",
  "PROJETBUT-TITRE-SAE5-CYB-03",
  "PROJETBUT-DESCRIPTION-SAE5-CYB-03",
  "PROJETBUT-TITRE-SAE502",
  "PROJETBUT-DESCRIPTION-SAE502",
  "PROJETBUT-TITRE-SAE301-ATTACHE",
  "PROJETBUT-TITRE-SAE302-ATTACHE",
  "PROJETBUT-TITRE-SAE303-ATTACHE",
  "PROJETBUT-TITRE-SAE501-ATTACHE",
  "PROJETBUT-TITRE-SAE501-ATTACHE",
  "PROJETBUT-TITRE-SAE4-CYB-01-ATTACHE",
  "PROJETBUT-TITRE-SAE5-CYB-03-ATTACHE",
  "PROJETBUT-TITRE-SAE502-ATTACHE",
  "PROJETBUT-TAG-SECURISER",
  "PROJETBUT-TAG-ADMIN",
  "PROJETBUT-TAG-SURVEILLER",
  "PROJETBUT-TAG-SYSTEM-INFO",
  "PROJETBUT-TAG-CREER-OUTIL",
  "PROJETBUT-TAG-PILOT",
  "PROJETBUT-TAG-HOP",
  "PROJETBUT-TAG-CONNECTER",
  "PROJETBUT-TAG-TRANS",
  "PROJETBUT-TAG-TELE",
  "PROJETBUT-TAG-SYS-AN",
  "PROJETBUT-TAG-APP",
  "PROJETBUT-TAG-MAIL",
  "BTN-CLOSE",
  "SAE301-PRESENTATION",
  "SAE301-P1",
  "SAE301-P2",
  "SAE301-P3",
  "SAE301-P4-A",
  "SAE301-P4-B",
  "SAE301-P4-C",
  "SAE301-OBJECTIF",
  "SAE301-OBJ1",
  "SAE301-OBJ2",
  "SAE301-OBJ3",
  "SAE301-OBJ4",
  "SAE301-OBJ5",
  "SAE301-PRESENTATION-MATOS",
  "SAE301-MATOS1",
  "SAE301-MATOS2",
  "SAE301-MATOS3",
  "SAE301-PRESENTATION-INFRA-RES",
  "SAE301-PRESENTATION-TACHE",
  "SAE301-ETAPE1",
  "SAE301-ETAPE2",
  "SAE301-PARTIE3-TITRE",
  "SAE301-PARTIE3-OBJ1",
  "SAE301-PARTIE3-OBJ2",
  "SAE301-PARTIE3-OBJ3",
  "SAE301-PARTIE3-OBJ4",
  "SAE301-PRBLM1",
  "SAE301-DEUXIEME-PARTIE",
  "SAE301-PARTIE4-A-TITRE",
  "SAE301-PARTIE4-A-OBJ1",
  "SAE301-PARTIE4-A-OBJ2",
  "SAE301-PARTIE4-A-OBJ3",
  "SAE301-PARTIE4-A-OBJ4",
  "SAE301-PARTIE4-B-TITRE",
  "SAE301-PARTIE4-B-PRES",
  "SAE301-TITRE-RETEX",
  "SAE301-RETEX1",
  "SAE301-RETEX2",
  "SAE301-RETEX3",
  "SAE301-RETEX4",
  "SAE301-LIEN-GITHUB",
  "SAE302-PRESENTATION",
  "SAE302-OBJECTIF",
  "SAE302-DEF-FONCT",
  "SAE302-FONCT1",
  "SAE302-FONCT2",
  "SAE302-FONCT3",
  "SAE302-FONCT4",
  "SAE302-CONTRAINTE",
  "SAE302-CONT1",
  "SAE302-CONT2",
  "SAE302-CONT3",
  "SAE302-TACHE",
  "SAE302-TACHE1",
  "SAE302-TACHE2",
  "SAE302-TACHE3",
  "SAE302-MATACHE",
  "SAE302-RAISON1",
  "SAE302-RAISON2",
  "SAE302-ARCHI",
  "SAE302-VIDEO",
  "SAE302-TITRE-RETEX",
  "SAE302-RETEX1",
  "SAE302-RETEX2",
  "SAE302-RETEX3",
  "SAE302-RETEX4",
  "SAE302-RETEX5",
  "SAE302-LIEN-GITHUB",




] as const;

export type TRANSLATION_KEY = typeof TRANSLATION_KEY[number];

type SUPPORTED_LANG = "fr" | "en";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // pour changer, faire choosenLanguage.set(value);
  public choosenLanguage = signal<SUPPORTED_LANG>("fr");

  public changeLanguage(lang: SUPPORTED_LANG) {
    this.choosenLanguage.set(lang);
  }



  private translation_fr: Map<TRANSLATION_KEY, string> = new Map();
  private translation_en: Map<TRANSLATION_KEY, string> = new Map();



  constructor(


  ) {



    /**
     * Fallback basé sur la langue du navigateur
     */




    this.translation_fr.set("ACCUEIL-ABOUT_ME", "À propos de moi");
    this.translation_en.set("ACCUEIL-ABOUT_ME", "About me");
    this.translation_fr.set("ACCUEIL-WELCOME", "Bienvenue dans mon portfolio");
    this.translation_en.set("ACCUEIL-WELCOME", "Welcome to my portfolio");
    this.translation_fr.set("ACCUEIL-POSTE", "Alternant ingénieur systèmes et Réseaux")
    this.translation_en.set("ACCUEIL-POSTE", "Networks and Systems Enginneer Apprentice")
    this.translation_fr.set("ACCUEIL-WHOAMI", "Qui suis-je ?")
    this.translation_en.set("ACCUEIL-WHOAMI", "Who am I ?")
    this.translation_fr.set("ACCUEIL-WHOAMI_TEXT", this.whoami_text_fr);
    this.translation_en.set("ACCUEIL-WHOAMI_TEXT", this.whoami_text_en);
    this.translation_fr.set("ACCUEIL-MY_QUALITY", "Mes qualités")
    this.translation_en.set("ACCUEIL-MY_QUALITY", "My Soft Skills")
    this.translation_fr.set("ACCUEIL-RIGOUREUX", "Rigoureux")
    this.translation_en.set("ACCUEIL-RIGOUREUX", "Rigourous")
    this.translation_fr.set("ACCUEIL-AUTONOME", "Autonome")
    this.translation_en.set("ACCUEIL-AUTONOME", "Autonomous")
    this.translation_fr.set("ACCUEIL-CURIEUX", "Curieux")
    this.translation_en.set("ACCUEIL-CURIEUX", "Curious")
    this.translation_fr.set("ACCUEIL-TEAM_SPIRIT", "Esprit d'équipe")
    this.translation_en.set("ACCUEIL-TEAM_SPIRIT", "Team Spirit")
    this.translation_fr.set("ACCUEIL-FIABLE", "Fiable")
    this.translation_en.set("ACCUEIL-FIABLE", "Reliable")
    this.translation_en.set("ACCUEIL-SERVIABLE", "Helpful")
    this.translation_fr.set("ACCUEIL-SERVIABLE", "Serviable")
    this.translation_en.set("ACCUEIL-MOTIVE", this.motivated);
    this.translation_fr.set("ACCUEIL-MOTIVE", this.motive);
    this.translation_en.set("ACCUEIL-POSTE", "Networks and Systems Enginneer Apprentice");
    this.translation_fr.set("ACCUEIL-DOWNLOAD", "Téléchargez mon CV");
    this.translation_en.set("ACCUEIL-DOWNLOAD", "Download my resume");
    this.translation_fr.set("ACCUEIL-FORMATION_SUB_TEXTE", `Apprenti en première année en formation Ingénieur Informatique et Réseaux à l'IMT Mines Alès.`);
    this.translation_en.set("ACCUEIL-FORMATION_SUB_TEXTE", `First year apprentice studying computer science and networks at IMT Mines Alès`)
    this.translation_fr.set("ARGUMENT_EXAMPLE", "À propos de moi et de %1");
    this.translation_en.set("ARGUMENT_EXAMPLE", "About me and %1");
    this.translation_fr.set("ACCUEIL-FORMATION", "Formations");
    this.translation_en.set("ACCUEIL-FORMATION", "Educations");
    // this.translation_fr.set("ACCUEIL-FORMATION_UN", this.formation_first_fr);
    this.translation_en.set("ACCUEIL-FORMATION_UN", "test");
    this.translation_fr.set("TEMOIGNAGE_TITRE", "Témoignages");
    this.translation_en.set("TEMOIGNAGE_TITRE", "Testimonial");
    this.translation_fr.set("TEMOIGNAGE_NAME", " Julien Vadam – Ingénieur (1A) en Réseaux et Télécommunication à l'UTC");
    this.translation_en.set("TEMOIGNAGE_NAME", " Julien Vadam – First year engineer studying Network and Telecommunications at UTC");
    this.translation_fr.set("TEMOIGNAGE_TEXTE", this.temoignage_fr);
    this.translation_en.set("TEMOIGNAGE_TEXTE", this.temoignage_en);
    this.translation_fr.set("TEMOIGNAGE_SIGNATURE", " Julien Vadam – Ingénieur (1A) en Réseaux et Télécommunication à l'UTC");
    this.translation_en.set("TEMOIGNAGE_SIGNATURE", " Julien Vadam – First year engineer studying Network and Telecommunications at UTC");
    this.translation_fr.set("HEADER2-TITRE", "Mon Portfolio");
    this.translation_en.set("HEADER2-TITRE", "My Portfolio");
    this.translation_fr.set("HEADER2-APROPOS", "A propos de moi");
    this.translation_en.set("HEADER2-APROPOS", "About me");
    this.translation_fr.set("HEADER2-INTERET", "Mes centres d'intérêts"),
      this.translation_en.set("HEADER2-INTERET", "My hobbies"),
      this.translation_fr.set("HEADER2-COMPETENCE", "Vitrine de mes compétences"),
      this.translation_en.set("HEADER2-COMPETENCE", "Showcase of my Skills"),
      this.translation_fr.set("HEADER2-PROJET", "Vitrine de mes projets"),
      this.translation_en.set("HEADER2-PROJET", "Showcase of my projects"),
      this.translation_fr.set("HEADER2-RS", "Mes réseaux professionnels"),
      this.translation_en.set("HEADER2-RS", "My professionnal networks"),
      this.translation_fr.set("HEADER2-CONTACT", "Contact"),
      this.translation_en.set("HEADER2-CONTACT", "Get in touch"),
      this.translation_fr.set("ACCUEIL-FORMATION_UN", this.formation_first_fr),
      this.translation_en.set("ACCUEIL-FORMATION_UN", this.formation_first_en),
      this.translation_fr.set("ACCUEIL-FORMATION_SECOND", this.formation_second_fr),
      this.translation_en.set("ACCUEIL-FORMATION_SECOND", this.formation_second_en),
      this.translation_fr.set("ACCUEIL-FORMATION_THIRD", this.formation_third_fr),
      this.translation_en.set("ACCUEIL-FORMATION_THIRD", this.formation_third_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_MISSION_UN", this.exp_pro_un_mission_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_MISSION_UN", this.exp_pro_un_mission_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_SOMMAIRE_UN", this.exp_pro_un_sommaire_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_SOMMAIRE_UN", this.exp_pro_un_sommaire_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_POSTE_UN", this.exp_pro_un_poste_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_POSTE_UN", this.exp_pro_un_poste_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_DATE_UN", this.exp_pro_un_time_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_DATE_UN", this.exp_pro_un_time_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_MISSION_DEUX", this.exp_pro_deux_mission_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_MISSION_DEUX", this.exp_pro_deux_mission_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_SOMMAIRE_DEUX", this.exp_pro_deux_sommaire_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_SOMMAIRE_DEUX", this.exp_pro_deux_sommaire_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_POSTE_DEUX", this.exp_pro_deux_poste_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_POSTE_DEUX", this.exp_pro_deux_poste_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_DATE_DEUX", this.exp_pro_deux_time_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_DATE_DEUX", this.exp_pro_deux_time_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_MISSION_TROIS", this.exp_pro_trois_mission_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_MISSION_TROIS", this.exp_pro_trois_mission_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_SOMMAIRE_TROIS", this.exp_pro_trois_sommaire_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_SOMMAIRE_TROIS", this.exp_pro_trois_sommaire_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_POSTE_TROIS", this.exp_pro_trois_poste_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_POSTE_TROIS", this.exp_pro_trois_poste_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_DATE_TROIS", this.exp_pro_trois_time_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_DATE_TROIS", this.exp_pro_trois_time_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_MISSION_QUATRE", this.exp_pro_quatre_mission_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_MISSION_QUATRE", this.exp_pro_quatre_mission_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_SOMMAIRE_QUATRE", this.exp_pro_quatre_sommaire_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_SOMMAIRE_QUATRE", this.exp_pro_quatre_sommaire_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_POSTE_QUATRE", this.exp_pro_quatre_poste_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_POSTE_QUATRE", this.exp_pro_quatre_poste_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_DATE_QUATRE", this.exp_pro_quatre_time_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_DATE_QUATRE", this.exp_pro_quatre_time_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_MISSION_CINQ", this.exp_pro_cinq_mission_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_MISSION_CINQ", this.exp_pro_cinq_mission_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_SOMMAIRE_CINQ", this.exp_pro_cinq_sommaire_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_SOMMAIRE_CINQ", this.exp_pro_cinq_sommaire_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_POSTE_CINQ", this.exp_pro_cinq_poste_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_POSTE_CINQ", this.exp_pro_cinq_poste_en),
      this.translation_fr.set("ACCUEIL-EXP_PRO_DATE_CINQ", this.exp_pro_cinq_time_fr),
      this.translation_en.set("ACCUEIL-EXP_PRO_DATE_CINQ", this.exp_pro_cinq_time_en),
      this.translation_fr.set("ACCUEIL-PROJETPRO", this.projet_pro_fr);
    this.translation_en.set("ACCUEIL-PROJETPRO", this.projet_pro_en);
    this.translation_fr.set("ACCUEIL-PROJETPRO_TITRE", "Projet professionnel");
    this.translation_en.set("ACCUEIL-PROJETPRO_TITRE", "Career plan");
    this.translation_fr.set("ACCUEIL-EXP_PRO_TITRE", "Expériences professionnelles");
    this.translation_en.set("ACCUEIL-EXP_PRO_TITRE", "Work experiences")
    this.translation_fr.set("INTERET-TITRE", "Mes centres d'intérêts");
    this.translation_en.set("INTERET-TITRE", "My hobbies");
    this.translation_fr.set("INTERET-PRESENTATION", "Afin de vous faire découvrir plus en détail mes centres d’intérêts, cette page met en lumière les activités, hobbies et domaines qui me passionnent, qu’ils soient professionnels ou personnels.");
    this.translation_en.set("INTERET-PRESENTATION", "In order to make you discover more about my hobbies, this page highlight my hobbies that i'm passionate about, either professionnal or personnal");
    this.translation_fr.set("INTERET-MATOPTION1", "Professionnels");
    this.translation_en.set("INTERET-MATOPTION1", "Professionnals");
    this.translation_fr.set("INTERET-MATOPTION2", "Personnels");
    this.translation_en.set("INTERET-MATOPTION2", "Personnals");
    this.translation_fr.set("INTERET-ADMINSYS-TITRE", "L'administration système");
    this.translation_fr.set("INTERET-AUTO-TITRE", "Les scripts d'automatisations");
    this.translation_fr.set("INTERET-DEVWEB-TITRE", "Le développement web"),
      this.translation_fr.set("INTERET-CYBER-TITRE", "La cybersécurité");
    this.translation_fr.set("INTERET-BIKE-TITRE", "Le vélo");
    this.translation_fr.set("INTERET-ECHEC-TITRE", "Les échecs");
    this.translation_fr.set("INTERET-GUITARE-TITRE", "La guitare");
    this.translation_fr.set("INTERET-JEUXVIDEO-TITRE", "Les jeux vidéos");
    this.translation_fr.set("INTERET-TENNIS-TITRE", "Le tennis");
    this.translation_en.set("INTERET-ADMINSYS-TITRE", "Systems administrations");
    this.translation_en.set("INTERET-AUTO-TITRE", "Automation scripting");
    this.translation_en.set("INTERET-CYBER-TITRE", "Cybersecurity");
    this.translation_en.set("INTERET-DEVWEB-TITRE", "Web development");
    this.translation_en.set("INTERET-BIKE-TITRE", "Biking");
    this.translation_en.set("INTERET-ECHEC-TITRE", "Chess");
    this.translation_en.set("INTERET-GUITARE-TITRE", "Guitar");
    this.translation_en.set("INTERET-TENNIS-TITRE", "Tennis");
    this.translation_en.set("INTERET-JEUXVIDEO-TITRE", "Video games");
    this.translation_fr.set("INTERET-CYBER-TEXTE", this.cyber_texte_fr);
    this.translation_fr.set("INTERET-DEVWEB-TEXTE", this.devweb_texte_fr);
    this.translation_fr.set("INTERET-AUTO-TEXTE", this.auto_texte_fr);
    this.translation_fr.set("INTERET-ADMINSYS-TEXTE", this.admsys_texte_fr);
    this.translation_en.set("INTERET-ADMINSYS-TEXTE", this.admsys_texte_en);
    this.translation_en.set("INTERET-DEVWEB-TEXTE", this.devweb_texte_en);
    this.translation_en.set("INTERET-AUTO-TEXTE", this.auto_texte_en);
    this.translation_en.set("INTERET-CYBER-TEXTE", this.cyber_texte_en);
    this.translation_fr.set("INTERET-BIKE-TEXTE", this.bike_texte_fr);
    this.translation_fr.set("INTERET-ECHEC-TEXTE", this.chess_texte_fr);
    this.translation_fr.set("INTERET-GUITARE-TEXTE", this.guitare_texte_fr);
    this.translation_fr.set("INTERET-TENNIS-TEXTE", this.tennis_texte_fr);
    this.translation_fr.set("INTERET-JEUXVIDEO-TEXTE", this.jeuxvideo_texte_fr);
    this.translation_en.set("INTERET-JEUXVIDEO-TEXTE", this.jeuxvideox_texte_en);
    this.translation_en.set("INTERET-TENNIS-TEXTE", this.tennis_texte_en);
    this.translation_en.set("INTERET-GUITARE-TEXTE", this.guitare_texte_en);
    this.translation_en.set("INTERET-ECHEC-TEXTE", this.chess_texte_en);
    this.translation_en.set("INTERET-BIKE-TEXTE", this.bike_texte_en);
    this.translation_fr.set("RS-LINKEDIN-TEXTE", this.linkedin_texte_fr);
    this.translation_fr.set("RS-LINKEDIN-FIRST-TEXTE", this.linkedin_first_texte_fr);
    this.translation_fr.set("RS-LINKEDIN-SECOND-TEXTE", this.linkedin_second_texte_fr);
    this.translation_fr.set("RS-LINKEDIN-RECHERCHE", this.linkedin_recherche_fr);
    this.translation_fr.set("RS-LINKEDIN-DEV", this.linkedin_dev_fr);
    this.translation_fr.set("RS-LINKEDIN-COLLAB", this.linkedin_collab_fr);
    this.translation_fr.set("RS-LINKEDIN-LAST-TEXTE", this.linkedin_last_texte_fr);
    this.translation_fr.set("RS-LINKEDIN-BUTTON", this.linkedin_button_fr);
    this.translation_fr.set("RS-GITHUB-FIRST-TEXTE", this.github_first_texte_fr);
    this.translation_fr.set("RS-GITHUB-SECOND-TEXTE", this.github_second_texte_fr);
    this.translation_fr.set("RS-GITHUB-COLLAB", this.github_collab_texte_fr);
    this.translation_fr.set("RS-GITHUB-SUIVI", this.github_suivi_texte_fr);
    this.translation_fr.set("RS-GITHUB-GESTION", this.github_gestion_texte_fr);
    this.translation_fr.set("RS-GITHUB-OPEN-SOURCE", this.github_open_texte_fr);
    this.translation_fr.set("RS-GITHUB-BUTTON", this.github_button_texte_fr);
    this.translation_fr.set("RS-GITHUB-TEXTE", this.github_texte_fr);
    this.translation_fr.set("RS-GITHUB-LAST-TEXTE", this.github_last_texte_fr);
    this.translation_en.set("RS-LINKEDIN-TEXTE", this.linkedin_texte_en);
    this.translation_en.set("RS-LINKEDIN-FIRST-TEXTE", this.linkedin_first_texte_en);
    this.translation_en.set("RS-LINKEDIN-SECOND-TEXTE", this.linkedin_second_texte_en);
    this.translation_en.set("RS-LINKEDIN-RECHERCHE", this.linkedin_recherche_en);
    this.translation_en.set("RS-LINKEDIN-DEV", this.linkedin_dev_en);
    this.translation_en.set("RS-LINKEDIN-COLLAB", this.linkedin_collab_en);
    this.translation_en.set("RS-LINKEDIN-LAST-TEXTE", this.linkedin_last_texte_en);
    this.translation_en.set("RS-LINKEDIN-BUTTON", this.linkedin_button_en);
    this.translation_en.set("RS-GITHUB-FIRST-TEXTE", this.github_first_texte_en);
    this.translation_en.set("RS-GITHUB-SECOND-TEXTE", this.github_second_texte_en);
    this.translation_en.set("RS-GITHUB-COLLAB", this.github_collab_texte_en);
    this.translation_en.set("RS-GITHUB-SUIVI", this.github_suivi_texte_en);
    this.translation_en.set("RS-GITHUB-GESTION", this.github_gestion_texte_en);
    this.translation_en.set("RS-GITHUB-OPEN-SOURCE", this.github_open_texte_en);
    this.translation_en.set("RS-GITHUB-BUTTON", this.github_button_texte_en);
    this.translation_en.set("RS-GITHUB-TEXTE", this.github_texte_en);
    this.translation_en.set("RS-GITHUB-LAST-TEXTE", this.github_last_texte_en);
    this.translation_fr.set("RS-TITRE", "Mes réseaux professionnels");
    this.translation_en.set("RS-TITRE", "My professionnal networks")
    this.translation_fr.set("FOOTER", "Ce site portfolio a entièrement été codé par moi-même avec le framework Angular")
    this.translation_en.set("FOOTER", "This website has been fully coded with the Angular Framework by me");
    this.translation_fr.set("CONTACT-FIRST-PART", "Etudiant apprenti en 1ere année de formation");
    this.translation_en.set("CONTACT-FIRST-PART", "First year apprentice studying");
    this.translation_fr.set("CONTACT-SECOND-PART", "Ingénieur Informatique et Réseaux ");
    this.translation_en.set("CONTACT-SECOND-PART", "Computer Science and Networks");
    this.translation_fr.set("CONTACT-FIRST-TOOLTIP", "Mon profil LinkedIn");
    this.translation_en.set("CONTACT-FIRST-TOOLTIP", "My LinkedIn Profile");
    this.translation_fr.set("CONTACT-SECOND-TOOLIP", "Mon mail");
    this.translation_en.set("CONTACT-SECOND-TOOLIP", "My email");
    this.translation_fr.set("CONTACT-THIRD-TOOLTIP", "Téléchargez mon CV !");
    this.translation_en.set("CONTACT-THIRD-TOOLTIP", "Download my resume");
    this.translation_fr.set("CONTACT-THIRD-PART", "à IMT Mines Alès");
    this.translation_en.set("CONTACT-THIRD-PART", "at IMT Mines Alès");
    this.translation_fr.set("PORTFOLIO-TITRE", "Mes compétences");
    this.translation_en.set("PORTFOLIO-TITRE", "My Hard Skills");
    //Titre de la page
    this.translation_fr.set("PORTFOLIO-PRESENTATION", this.portfolio_presentation_fr);
    this.translation_en.set("PORTFOLIO-PRESENTATION", this.portfolio_presentation_en);
    //Titre compétence un : Administrer les réseaux et l'internet
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-UN", this.portfolio_titre_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-UN", this.portfolio_titre_competence_un_en);
    this.translation_fr.set("PORTFOLIO-COMPETENCE-UN-TAG1", this.portfolio_competence_un_tag1_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-UN-TAG1", this.portfolio_competence_un_tag1_en);
    this.translation_fr.set("PORTFOLIO-COMPETENCE-UN-TAG2", this.portfolio_competence_un_tag2_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-UN-TAG2", this.portfolio_competence_un_tag2_en);
    this.translation_fr.set("PORTFOLIO-TITRE-UN-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_titre_un_competence_un_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-UN-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_titre_un_competence_un_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_titre_deux_competence_un_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_titre_deux_competence_un_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_titre_trois_competence_un_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_titre_trois_competence_un_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-UN-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_texte_un_competence_un_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-UN-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_texte_un_competence_un_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_texte_deux_competence_un_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_texte_deux_competence_un_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_texte_trois_competence_un_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-UN", this.portfolio_texte_trois_competence_un_sous_competence_un_en);
    // --- Sous-Compétence Deux --- //titre
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_titre_competence_un_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_titre_competence_un_sous_competence_deux_en);
    //sous titre : router/switch ... colonne de gauche
    this.translation_fr.set("PORTFOLIO-TITRE-UN-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_titre_un_competence_un_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TITRE-UN-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_titre_un_competence_un_sous_competence_deux_en);
    this.translation_fr.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_titre_deux_competence_un_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_titre_deux_competence_un_sous_competence_deux_en);
    //texte allant aux sous titre
    this.translation_fr.set("PORTFOLIO-TEXTE-UN-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_texte_un_competence_un_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-UN-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_texte_un_competence_un_sous_competence_deux_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_texte_deux_competence_un_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_texte_deux_competence_un_sous_competence_deux_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_texte_trois_competence_un_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_texte_trois_competence_un_sous_competence_deux_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-QUATRE-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_texte_quatre_competence_un_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-QUATRE-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_texte_quatre_competence_un_sous_competence_deux_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-CINQ-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_texte_cinq_competence_un_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-CINQ-COMPETENCE-UN-SOUS-COMPETENCE-DEUX", this.portfolio_texte_cinq_competence_un_sous_competence_deux_en);
    // --- Sous-Compétence Trois --- titre sous partie
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_titre_competence_un_sous_competence_trois_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_titre_competence_un_sous_competence_trois_en);
    //colonne gauche
    this.translation_fr.set("PORTFOLIO-TITRE-UN-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_titre_un_competence_un_sous_competence_trois_fr);
    this.translation_en.set("PORTFOLIO-TITRE-UN-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_titre_un_competence_un_sous_competence_trois_en);
    this.translation_fr.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_titre_deux_competence_un_sous_competence_trois_fr);
    this.translation_en.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_titre_deux_competence_un_sous_competence_trois_en);
    this.translation_fr.set("PORTFOLIO-TITRE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_titre_trois_competence_un_sous_competence_trois_fr);
    this.translation_en.set("PORTFOLIO-TITRE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_titre_trois_competence_un_sous_competence_trois_en);
    this.translation_fr.set("PORTFOLIO-TITRE-QUATRE-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_titre_quatre_competence_un_sous_competence_trois_fr);
    this.translation_en.set("PORTFOLIO-TITRE-QUATRE-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_titre_quatre_competence_un_sous_competence_trois_en);
    //colonne droite
    this.translation_fr.set("PORTFOLIO-TEXTE-UN-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_texte_un_competence_un_sous_competence_trois_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-UN-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_texte_un_competence_un_sous_competence_trois_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_texte_deux_competence_un_sous_competence_trois_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_texte_deux_competence_un_sous_competence_trois_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_texte_trois_competence_un_sous_competence_trois_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_texte_trois_competence_un_sous_competence_trois_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-QUATRE-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_texte_quatre_competence_un_sous_competence_trois_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-QUATRE-COMPETENCE-UN-SOUS-COMPETENCE-TROIS", this.portfolio_texte_quatre_competence_un_sous_competence_trois_en);
    //compétence 2 : connecter les usagers
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-DEUX", this.portfolio_titre_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-DEUX", this.portfolio_titre_competence_deux_en);
    //tag
    this.translation_fr.set("PORTFOLIO-COMPETENCE-DEUX-TAG1", this.portfolio_competence_deux_tag1_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-DEUX-TAG1", this.portfolio_competence_deux_tag1_en);
    this.translation_fr.set("PORTFOLIO-COMPETENCE-DEUX-TAG2", this.portfolio_competence_deux_tag2_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-DEUX-TAG2", this.portfolio_competence_deux_tag2_en);
    this.translation_fr.set("PORTFOLIO-COMPETENCE-DEUX-TAG3", this.portfolio_competence_deux_tag3_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-DEUX-TAG3", this.portfolio_competence_deux_tag3_en);
    this.translation_fr.set("PORTFOLIO-COMPETENCE-DEUX-TAG4", this.portfolio_competence_deux_tag4_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-DEUX-TAG4", this.portfolio_competence_deux_tag4_en);
    //colonne gauche
    this.translation_fr.set("PORTFOLIO-TITRE-UN-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_titre_un_competence_deux_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-UN-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_titre_un_competence_deux_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_titre_competence_deux_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_titre_competence_deux_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_titre_deux_competence_deux_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_titre_deux_competence_deux_sous_competence_un_en);
    //colonne droite
    this.translation_fr.set("PORTFOLIO-TEXTE-UN-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_texte_un_competence_deux_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-UN-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_texte_un_competence_deux_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_texte_deux_competence_deux_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_texte_deux_competence_deux_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_texte_trois_competence_deux_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-DEUX-SOUS-COMPETENCE-UN", this.portfolio_texte_trois_competence_deux_sous_competence_un_en);
    //compétence 3 : Programmer
    //titre
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-TROIS", this.portfolio_titre_competence_trois_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-TROIS", this.portfolio_titre_competence_trois_en);
    //colonne tag
    this.translation_fr.set("PORTFOLIO-COMPETENCE-TROIS-TAG1", this.portfolio_competence_trois_tag1_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-TROIS-TAG1", this.portfolio_competence_trois_tag1_en);
    this.translation_fr.set("PORTFOLIO-COMPETENCE-TROIS-TAG2", this.portfolio_competence_trois_tag2_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-TROIS-TAG2", this.portfolio_competence_trois_tag2_en);
    this.translation_fr.set("PORTFOLIO-COMPETENCE-TROIS-TAG3", this.portfolio_competence_trois_tag3_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-TROIS-TAG3", this.portfolio_competence_trois_tag3_en);
    this.translation_fr.set("PORTFOLIO-COMPETENCE-TROIS-TAG4", this.portfolio_competence_trois_tag4_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-TROIS-TAG4", this.portfolio_competence_trois_tag4_en);
    //titre première sous partie
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_titre_competence_trois_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_titre_competence_trois_sous_competence_un_en);

    //colonne gauche première sous partie
    this.translation_fr.set("PORTFOLIO-TITRE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_titre_un_competence_trois_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_titre_un_competence_trois_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_titre_deux_competence_trois_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_titre_deux_competence_trois_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-TROIS-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_titre_trois_competence_trois_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-TROIS-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_titre_trois_competence_trois_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-QUATRE-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_titre_quatre_competence_trois_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-QUATRE-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_titre_quatre_competence_trois_sous_competence_un_en);
    //colonne droite première sous partie
    this.translation_fr.set("PORTFOLIO-TEXTE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_texte_un_competence_trois_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_texte_un_competence_trois_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_texte_deux_competence_trois_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_texte_deux_competence_trois_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_texte_trois_competence_trois_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_texte_trois_competence_trois_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-QUATRE-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_texte_quatre_competence_trois_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-QUATRE-COMPETENCE-TROIS-SOUS-COMPETENCE-UN", this.portfolio_texte_quatre_competence_trois_sous_competence_un_en);
    //titre deuxième sous partie
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX", this.portfolio_titre_competence_trois_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX", this.portfolio_titre_competence_trois_sous_competence_deux_en);
    //colonne gauche deuxième sous partie
    this.translation_fr.set("PORTFOLIO-TITRE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX", this.portfolio_titre_un_competence_trois_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TITRE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX", this.portfolio_titre_un_competence_trois_sous_competence_deux_en);
    //colonne droite deuxième sous partie
    this.translation_fr.set("PORTFOLIO-TEXTE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX", this.portfolio_texte_un_competence_trois_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-UN-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX", this.portfolio_texte_un_competence_trois_sous_competence_deux_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX", this.portfolio_texte_deux_competence_trois_sous_competence_deux_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-TROIS-SOUS-COMPETENCE-DEUX", this.portfolio_texte_deux_competence_trois_sous_competence_deux_en);

    // --- Compétence Quatre sécuriser ---
    //titre
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-QUATRE", this.portfolio_titre_competence_quatre_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-QUATRE", this.portfolio_titre_competence_quatre_en);
    //tag
    this.translation_fr.set("PORTFOLIO-COMPETENCE-QUATRE-TAG1", this.portfolio_competence_quatre_tag1_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-QUATRE-TAG1", this.portfolio_competence_quatre_tag1_en);
    this.translation_fr.set("PORTFOLIO-COMPETENCE-QUATRE-TAG2", this.portfolio_competence_quatre_tag2_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-QUATRE-TAG2", this.portfolio_competence_quatre_tag2_en);
    //titre
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_titre_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_titre_competence_quatre_sous_competence_un_en);
    //colonne gauche
    this.translation_fr.set("PORTFOLIO-TITRE-UN-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_titre_un_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-UN-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_titre_un_competence_quatre_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_titre_deux_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_titre_deux_competence_quatre_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-TROIS-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_titre_trois_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-TROIS-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_titre_trois_competence_quatre_sous_competence_un_en);
    //colonne droite
    this.translation_fr.set("PORTFOLIO-TEXTE-UN-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_un_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-UN-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_un_competence_quatre_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_deux_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_deux_competence_quatre_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_trois_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_trois_competence_quatre_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-QUATRE-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_quatre_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-QUATRE-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_quatre_competence_quatre_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-CINQ-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_cinq_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-CINQ-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_cinq_competence_quatre_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-SIX-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_six_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-SIX-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_six_competence_quatre_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-SEPT-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_sept_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-SEPT-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_sept_competence_quatre_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-HUIT-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_huit_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-HUIT-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_huit_competence_quatre_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-NEUF-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_neuf_competence_quatre_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-NEUF-COMPETENCE-QUATRE-SOUS-COMPETENCE-UN", this.portfolio_texte_neuf_competence_quatre_sous_competence_un_en);
    // Cinq sécurisé
    //titre
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-CINQ", this.portfolio_titre_competence_cinq_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-CINQ", this.portfolio_titre_competence_cinq_en);
    //tag
    this.translation_fr.set("PORTFOLIO-COMPETENCE-CINQ-TAG1", this.portfolio_competence_cinq_tag1_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-CINQ-TAG1", this.portfolio_competence_cinq_tag1_en);
    this.translation_fr.set("PORTFOLIO-COMPETENCE-CINQ-TAG2", this.portfolio_competence_cinq_tag2_fr);
    this.translation_en.set("PORTFOLIO-COMPETENCE-CINQ-TAG2", this.portfolio_competence_cinq_tag2_en);
    //colonne gauche
    this.translation_fr.set("PORTFOLIO-TITRE-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_titre_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_titre_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-UN-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_titre_un_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-UN-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_titre_un_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_titre_deux_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-DEUX-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_titre_deux_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TITRE-TROIS-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_titre_trois_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TITRE-TROIS-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_titre_trois_competence_cinq_sous_competence_un_en);
    //colonne droite
    this.translation_fr.set("PORTFOLIO-TEXTE-UN-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_un_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-UN-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_un_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_deux_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-DEUX-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_deux_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_trois_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-TROIS-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_trois_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-QUATRE-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_quatre_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-QUATRE-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_quatre_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-CINQ-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_cinq_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-CINQ-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_cinq_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-SIX-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_six_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-SIX-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_six_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-SEPT-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_sept_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-SEPT-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_sept_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-HUIT-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_huit_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-HUIT-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_huit_competence_cinq_sous_competence_un_en);
    this.translation_fr.set("PORTFOLIO-TEXTE-NEUF-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_neuf_competence_cinq_sous_competence_un_fr);
    this.translation_en.set("PORTFOLIO-TEXTE-NEUF-COMPETENCE-CINQ-SOUS-COMPETENCE-UN", this.portfolio_texte_neuf_competence_cinq_sous_competence_un_en);
    //certification
    this.translation_fr.set("PORTFOLIO-CERTIF-TITRE", this.portfolio_certif_titre_fr);
    this.translation_en.set("PORTFOLIO-CERTIF-TITRE", this.portfolio_certif_titre_en);
    this.translation_fr.set("PORTFOLIO-CERTIF-TAG1", "CCNA");
    this.translation_en.set("PORTFOLIO-CERTIF-TAG1", "CCNA");
    this.translation_fr.set("PORTFOLIO-CERTIF-SOUS-TITRE-UN", this.portfolio_certif_sous_titre_un_fr);
    this.translation_en.set("PORTFOLIO-CERTIF-SOUS-TITRE-UN", this.portfolio_certif_sous_titre_un_en);
    this.translation_fr.set("PORTFOLIO-CERTIF-SOUS-TITRE-DEUX", this.portfolio_certif_sous_titre_deux_fr);
    this.translation_en.set("PORTFOLIO-CERTIF-SOUS-TITRE-DEUX", this.portfolio_certif_sous_titre_deux_en);
    this.translation_fr.set("PORTFOLIO-CERTIF-SOUS-TITRE-TROIS", this.portfolio_certif_sous_titre_trois_fr);
    this.translation_en.set("PORTFOLIO-CERTIF-SOUS-TITRE-TROIS", this.portfolio_certif_sous_titre_trois_en);
    this.translation_fr.set("PORTFOLIO-CERTIF-TEXTE-UN", this.portfolio_certif_texte_un_fr);
    this.translation_en.set("PORTFOLIO-CERTIF-TEXTE-UN", this.portfolio_certif_texte_un_en);
    this.translation_fr.set("PORTFOLIO-CERTIF-TEXTE-DEUX", this.portfolio_certif_texte_deux_fr);
    this.translation_en.set("PORTFOLIO-CERTIF-TEXTE-DEUX", this.portfolio_certif_texte_deux_en);
    this.translation_fr.set("PORTFOLIO-CERTIF-TEXTE-TROIS", this.portfolio_certif_texte_trois_fr);
    this.translation_en.set("PORTFOLIO-CERTIF-TEXTE-TROIS", this.portfolio_certif_texte_trois_en);
    //projetbut
    this.translation_fr.set("PROJETBUT-TITRE", this.projetbut_titre_fr);
    this.translation_en.set("PROJETBUT-TITRE", this.projetbut_titre_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-UN", this.projetbut_presentation_un_fr);
    this.translation_en.set("PROJETBUT-PRESENTATION-UN", this.projetbut_presentation_un_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-UE-UN", this.projetbut_presentation_ue_un_fr);
    this.translation_en.set("PROJETBUT-PRESENTATION-UE-UN", this.projetbut_presentation_ue_un_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-UE-DEUX", this.projetbut_presentation_ue_deux_fr);
    this.translation_en.set("PROJETBUT-PRESENTATION-UE-DEUX", this.projetbut_presentation_ue_deux_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-UE-TROIS", this.projetbut_presentation_ue_trois_fr);
    this.translation_en.set("PROJETBUT-PRESENTATION-UE-TROIS", this.projetbut_presentation_ue_trois_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-DEUX", this.projetbut_presentation_deux_fr);
    this.translation_en.set("PROJETBUT-PRESENTATION-DEUX", this.projetbut_presentation_deux_en);
    this.translation_fr.set("PROJETBUT-CYBERSECURITE", this.projetbut_cybersecurite_fr);
    this.translation_en.set("PROJETBUT-CYBERSECURITE", this.projetbut_cybersecurite_en);
    this.translation_fr.set("PROJETBUT-IOT", this.projetbut_iot_fr);
    this.translation_en.set("PROJETBUT-IOT", this.projetbut_iot_en);
    this.translation_fr.set("PROJETBUT-PILPRO", this.projetbut_pilpro_fr);
    this.translation_en.set("PROJETBUT-PILPRO", this.projetbut_pilpro_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-TROIS", this.projet_but_presentation_trois_fr);
    this.translation_en.set("PROJETBUT-PRESENTATION-TROIS", this.projet_but_presentation_trois_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-UE-QUATRE", this.projetbut_presentation_ue_quatre_fr);
    this.translation_en.set("PROJETBUT-PRESENTATION-UE-QUATRE", this.projetbut_presentation_ue_quatre_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-UE-CINQ", this.projetbut_presentation_ue_cinq_fr);
    this.translation_en.set("PROJETBUT-PRESENTATION-UE-CINQ", this.projetbut_presentation_ue_cinq_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-QUATRE", this.projetbut_presentation_quatre_fr);
    this.translation_en.set("PROJETBUT-PRESENTATION-QUATRE", this.projetbut_presentation_quatre_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-CINQ", this.projetbut_presentation_cinq_fr),
      this.translation_en.set("PROJETBUT-PRESENTATION-CINQ", this.projetbut_presentation_cinq_en);
    this.translation_fr.set("PROJETBUT-PRESENTATION-SIX", this.projetbut_presentation_six_fr);
    this.translation_en.set("PROJETBUT-PRESENTATION-SIX", this.projetbut_presentation_six_en);
    this.translation_fr.set("PROJETBUT-COMPTEUR-CYBER", this.projetbut_compteur_cyber_fr);
    this.translation_en.set("PROJETBUT-COMPTEUR-CYBER", this.projetbut_compteur_cyber_en);
    this.translation_fr.set("PROJETBUT-COMPTEUR-ADMIN", this.projetbut_compteur_admin_fr);
    this.translation_en.set("PROJETBUT-COMPTEUR-ADMIN", this.projetbut_compteur_admin_en);
    this.translation_fr.set("PROJETBUT-COMPTEUR-DEV", this.projetbut_compteur_dev_fr);
    this.translation_en.set("PROJETBUT-COMPTEUR-DEV", this.projetbut_compteur_dev_en);
    this.translation_fr.set("PROJETBUT-COMPTEUR-TELECOM", this.projetbut_compteur_telecom_fr);
    this.translation_en.set("PROJETBUT-COMPTEUR-TELECOM", this.projetbut_compteur_telecom_en);
    this.translation_fr.set("PROJETBUT-COMPTEUR-GP", this.projetbut_compteur_gp_fr);
    this.translation_en.set("PROJETBUT-COMPTEUR-GP", this.projetbut_compteur_gp_en);
    this.translation_fr.set("PROJETBUT-CHOIX-SPE", this.projetbut_choix_spe_fr);
    this.translation_en.set("PROJETBUT-CHOIX-SPE", this.projetbut_choix_spe_en);
    this.translation_fr.set("PROJETBUT-LABEL-BACKGROUND-TEXTE", this.projetbut_label_background_texte_fr);
    this.translation_en.set("PROJETBUT-LABEL-BACKGROUND-TEXTE", this.projetbut_label_background_texte_en);
    this.translation_fr.set("PROJETBUT-CHOIX-LABEL-UN", this.projetbut_choix_label_un_fr);
    this.translation_en.set("PROJETBUT-CHOIX-LABEL-UN", this.projetbut_choix_label_un_en);
    this.translation_fr.set("PROJETBUT-CHOIX-LABEL-DEUX", this.projetbut_choix_label_deux_fr);
    this.translation_en.set("PROJETBUT-CHOIX-LABEL-DEUX", this.projetbut_choix_label_deux_en);
    this.translation_fr.set("PROJETBUT-CHOIX-LABEL-TROIS", this.projetbut_choix_label_trois_fr);
    this.translation_en.set("PROJETBUT-CHOIX-LABEL-TROIS", this.projetbut_choix_label_trois_en);
    this.translation_fr.set("PROJETBUT-CHOIX-LABEL-QUATRE", this.projetbut_choix_label_quatre_fr);
    this.translation_en.set("PROJETBUT-CHOIX-LABEL-QUATRE", this.projetbut_choix_label_quatre_en);
    this.translation_fr.set("PROJETBUT-CHOIX-LABEL-CINQ", this.projetbut_choix_label_cinq_fr);
    this.translation_en.set("PROJETBUT-CHOIX-LABEL-CINQ", this.projetbut_choix_label_cinq_en);
    this.translation_fr.set("PROJETBUT-TITRE-SAE301", this.projetbut_titre_sae301_fr);
    this.translation_en.set("PROJETBUT-TITRE-SAE301", this.projetbut_titre_sae301_en);
    this.translation_fr.set("PROJETBUT-DESCRIPTION-SAE301", this.projetbut_description_sae301_fr);
    this.translation_en.set("PROJETBUT-DESCRIPTION-SAE301", this.projetbut_description_sae301_en);
    this.translation_fr.set("PROJETBUT-TITRE-SAE302", this.projetbut_titre_sae302_fr);
    this.translation_en.set("PROJETBUT-TITRE-SAE302", this.projetbut_titre_sae302_en);
    this.translation_fr.set("PROJETBUT-DESCRIPTION-SAE302", this.projetbut_description_sae302_fr);
    this.translation_en.set("PROJETBUT-DESCRIPTION-SAE302", this.projetbut_description_sae302_en);
    this.translation_fr.set("PROJETBUT-TITRE-SAE303", this.projetbut_titre_sae303_fr);
    this.translation_en.set("PROJETBUT-TITRE-SAE303", this.projetbut_titre_sae303_en);
    this.translation_fr.set("PROJETBUT-DESCRIPTION-SAE303", this.projetbut_description_sae303_fr);
    this.translation_en.set("PROJETBUT-DESCRIPTION-SAE303", this.projetbut_description_sae303_en);
    this.translation_fr.set("PROJETBUT-TITRE-SAE501", this.projetbut_titre_sae501_fr);
    this.translation_en.set("PROJETBUT-TITRE-SAE501", this.projetbut_titre_sae501_en);
    this.translation_fr.set("PROJETBUT-DESCRIPTION-SAE501", this.projetbut_description_sae501_fr);
    this.translation_en.set("PROJETBUT-DESCRIPTION-SAE501", this.projetbut_description_sae501_en);
    this.translation_fr.set("PROJETBUT-TITRE-SAE4-CYB-01", this.projetbut_titre_sae4_cyb_01_fr);
    this.translation_en.set("PROJETBUT-TITRE-SAE4-CYB-01", this.projetbut_titre_sae4_cyb_01_en);
    this.translation_fr.set("PROJETBUT-DESCRIPTION-SAE4-CYB-01", this.projetbut_description_sae4_cyb_01_fr);
    this.translation_en.set("PROJETBUT-DESCRIPTION-SAE4-CYB-01", this.projetbut_description_sae4_cyb_01_en);
    this.translation_fr.set("PROJETBUT-TITRE-SAE5-CYB-03", this.projetbut_titre_sae5_cyb_03_fr);
    this.translation_en.set("PROJETBUT-TITRE-SAE5-CYB-03", this.projetbut_titre_sae5_cyb_03_en);
    this.translation_fr.set("PROJETBUT-DESCRIPTION-SAE5-CYB-03", this.projetbut_description_sae5_cyb_03_fr);
    this.translation_en.set("PROJETBUT-DESCRIPTION-SAE5-CYB-03", this.projetbut_description_sae5_cyb_03_en);
    this.translation_fr.set("PROJETBUT-TITRE-SAE502", this.projetbut_titre_sae502_fr);
    this.translation_en.set("PROJETBUT-TITRE-SAE502", this.projetbut_titre_sae502_en);
    this.translation_fr.set("PROJETBUT-DESCRIPTION-SAE502", this.projetbut_description_sae502_fr);
    this.translation_en.set("PROJETBUT-DESCRIPTION-SAE502", this.projetbut_description_sae502_en);
    this.translation_fr.set("PROJETBUT-TITRE-SAE301-ATTACHE", "SAE301 - Mettre en oeuvre un système de transmission");
    this.translation_en.set("PROJETBUT-TITRE-SAE301-ATTACHE", "SAE301 - Implementing a transmission system");
    this.translation_fr.set("PROJETBUT-TITRE-SAE302-ATTACHE", "SAE302 - Développer des applications communicantes");
    this.translation_en.set("PROJETBUT-TITRE-SAE302-ATTACHE", "SAE302 - Developing communicating applications");
    this.translation_fr.set("PROJETBUT-TITRE-SAE303-ATTACHE", "SAE303 - Concevoir un réseau multi-sites sécurisé");
    this.translation_en.set("PROJETBUT-TITRE-SAE303-ATTACHE", "SAE303 - Designing a secure multi-site network");
    this.translation_fr.set("PROJETBUT-TITRE-SAE502-ATTACHE", "SAE502 - Piloter un projet informatique");
    this.translation_en.set("PROJETBUT-TITRE-SAE502-ATTACHE", "SAE502 - Managing an IT project");
    this.translation_fr.set("PROJETBUT-TITRE-SAE5-CYB-03-ATTACHE", "SAE5-CYB-03 - Sécurisation et supervision avancée");
    this.translation_en.set("PROJETBUT-TITRE-SAE5-CYB-03-ATTACHE", "SAE5-CYB-03 - Advanced securing and monitoring");
    this.translation_fr.set("PROJETBUT-TITRE-SAE4-CYB-01-ATTACHE", "SAE4-CYB-01 - Sécuriser un système d'information");
    this.translation_en.set("PROJETBUT-TITRE-SAE4-CYB-01-ATTACHE", "SAE4-CYB-01 - Securing an Information System");
    this.translation_fr.set("PROJETBUT-TAG-ADMIN", "Administrer les réseaux et les systèmes");
    this.translation_en.set("PROJETBUT-TAG-ADMIN", "Systems and networks administrations");
    this.translation_fr.set("PROJETBUT-TAG-SURVEILLER", "Surveiller");
    this.translation_en.set("PROJETBUT-TAG-SURVEILLER", "Monitore");
    this.translation_fr.set("PROJETBUT-TAG-SECURISER", "Sécuriser");
    this.translation_en.set("PROJETBUT-TAG-SECURISER", "Secure");
    this.translation_fr.set("PROJETBUT-TAG-CREER-OUTIL", "Créer des outils et des applications pour les R&T");
    this.translation_en.set("PROJETBUT-TAG-CREER-OUTIL", "Web development and programming");
    this.translation_fr.set("PROJETBUT-TAG-PILOT", "Pilotage de Projet");
    this.translation_en.set("PROJETBUT-TAG-PILOT", "Project management");
    this.translation_fr.set("PROJETBUT-TAG-HOP", "Hôpital de campagne");
    this.translation_en.set("PROJETBUT-TAG-HOP", "Field hospital")
    this.translation_fr.set("PROJETBUT-TAG-SYSTEM-INFO", "Système d'Information");
    this.translation_en.set("PROJETBUT-TAG-SYSTEM-INFO", "Information System");
    this.translation_fr.set("PROJETBUT-TAG-CONNECTER", "Connecter les usagers et les entreprises");
    this.translation_en.set("PROJETBUT-TAG-CONNECTER", "Connect companies and users");
    this.translation_fr.set("PROJETBUT-TAG-TRANS", "Transmission vidéo");
    this.translation_en.set("PROJETBUT-TAG-TRANS", "Video transmission");
    this.translation_fr.set("PROJETBUT-TAG-TELE", "Télécommunications");
    this.translation_en.set("PROJETBUT-TAG-TELE", "Telecommunications");
    this.translation_fr.set("PROJETBUT-TAG-SYS-AN", "Systèmes d'analyses de débits");
    this.translation_en.set("PROJETBUT-TAG-SYS-AN", "Flow analysis systems");
    this.translation_fr.set("PROJETBUT-TAG-APP", "Application de type réseau socal");
    this.translation_en.set("PROJETBUT-TAG-APP", "Social media based application");
    this.translation_fr.set("PROJETBUT-TAG-MAIL", "Serveur mail");
    this.translation_en.set("PROJETBUT-TAG-MAIL", "Mail Server");
    this.translation_fr.set("BTN-CLOSE", "Fermer");
    this.translation_en.set("BTN-CLOSE", "Close");
    //sae301 fr
    this.translation_fr.set("SAE301-PRESENTATION", this.sae301_presentation_fr);
    this.translation_fr.set("SAE301-P1", this.sae301_p1_fr);
    this.translation_fr.set("SAE301-P2", this.sae301_p2_fr);
    this.translation_fr.set("SAE301-P3", this.sae301_p3_fr);
    this.translation_fr.set("SAE301-P4-A", this.sae301_p4_a_fr);
    this.translation_fr.set("SAE301-P4-B", this.sae301_p4_b_fr);
    this.translation_fr.set("SAE301-P4-C", this.sae301_p4_c_fr);
    this.translation_fr.set("SAE301-OBJECTIF", this.sae301_objectif_fr);
    this.translation_fr.set("SAE301-OBJ1", this.sae301_obj1_fr);
    this.translation_fr.set("SAE301-OBJ2", this.sae301_obj2_fr);
    this.translation_fr.set("SAE301-OBJ3", this.sae301_obj3_fr);
    this.translation_fr.set("SAE301-OBJ4", this.sae301_obj4_fr);
    this.translation_fr.set("SAE301-OBJ5", this.sae301_obj5_fr);
    this.translation_fr.set("SAE301-PRESENTATION-MATOS", this.sae301_presentation_matos_fr);
    this.translation_fr.set("SAE301-MATOS1", this.sae301_matos1_fr);
    this.translation_fr.set("SAE301-MATOS2", this.sae301_matos2_fr);
    this.translation_fr.set("SAE301-MATOS3", this.sae301_matos3_fr);
    this.translation_fr.set("SAE301-PRESENTATION-INFRA-RES", this.sae301_presentation_infra_res_fr);
    this.translation_fr.set("SAE301-PRESENTATION-TACHE", this.sae301_presentation_tache_fr);
    this.translation_fr.set("SAE301-ETAPE1", this.sae301_etape1_fr);
    this.translation_fr.set("SAE301-ETAPE2", this.sae301_etape2_fr);
    this.translation_fr.set("SAE301-PARTIE3-TITRE", this.sae301_partie3_titre_fr);
    this.translation_fr.set("SAE301-PARTIE3-OBJ1", this.sae301_partie3_obj1_fr);
    this.translation_fr.set("SAE301-PARTIE3-OBJ2", this.sae301_partie3_obj2_fr);
    this.translation_fr.set("SAE301-PARTIE3-OBJ3", this.sae301_partie3_obj3_fr);
    this.translation_fr.set("SAE301-PARTIE3-OBJ4", this.sae301_partie3_obj4_fr);
    this.translation_fr.set("SAE301-PRBLM1", this.sae301_prblm1_fr);
    this.translation_fr.set("SAE301-DEUXIEME-PARTIE", this.sae301_deuxieme_partie_fr);
    this.translation_fr.set("SAE301-PARTIE4-A-TITRE", this.sae301_partie4_a_titre_fr);
    this.translation_fr.set("SAE301-PARTIE4-A-OBJ1", this.sae301_partie4_a_obj1_fr);
    this.translation_fr.set("SAE301-PARTIE4-A-OBJ2", this.sae301_partie4_a_obj2_fr);
    this.translation_fr.set("SAE301-PARTIE4-A-OBJ3", this.sae301_partie4_a_obj3_fr);
    this.translation_fr.set("SAE301-PARTIE4-A-OBJ4", this.sae301_partie4_a_obj4_fr);
    this.translation_fr.set("SAE301-PARTIE4-B-TITRE", this.sae301_partie4_b_titre_fr);
    this.translation_fr.set("SAE301-PARTIE4-B-PRES", this.sae301_partie4_b_pres_fr);
    this.translation_fr.set("SAE301-TITRE-RETEX", this.sae301_titre_retex_fr);
    this.translation_fr.set("SAE301-RETEX1", this.sae301_retex1_fr);
    this.translation_fr.set("SAE301-RETEX2", this.sae301_retex2_fr);
    this.translation_fr.set("SAE301-RETEX3", this.sae301_retex3_fr);
    this.translation_fr.set("SAE301-RETEX4", this.sae301_retex4_fr);
    this.translation_fr.set("SAE301-LIEN-GITHUB", this.sae301_lien_github_fr);
    //sae301 en

    this.translation_en.set("SAE301-PRESENTATION", this.sae301_presentation_en);
    this.translation_en.set("SAE301-P1", this.sae301_p1_en);
    this.translation_en.set("SAE301-P2", this.sae301_p2_en);
    this.translation_en.set("SAE301-P3", this.sae301_p3_en);
    this.translation_en.set("SAE301-P4-A", this.sae301_p4_a_en);
    this.translation_en.set("SAE301-P4-B", this.sae301_p4_b_en);
    this.translation_en.set("SAE301-P4-C", this.sae301_p4_c_en);
    this.translation_en.set("SAE301-OBJECTIF", this.sae301_objectif_en);
    this.translation_en.set("SAE301-OBJ1", this.sae301_obj1_en);
    this.translation_en.set("SAE301-OBJ2", this.sae301_obj2_en);
    this.translation_en.set("SAE301-OBJ3", this.sae301_obj3_en);
    this.translation_en.set("SAE301-OBJ4", this.sae301_obj4_en);
    this.translation_en.set("SAE301-OBJ5", this.sae301_obj5_en);
    this.translation_en.set("SAE301-PRESENTATION-MATOS", this.sae301_presentation_matos_en);
    this.translation_en.set("SAE301-MATOS1", this.sae301_matos1_en);
    this.translation_en.set("SAE301-MATOS2", this.sae301_matos2_en);
    this.translation_en.set("SAE301-MATOS3", this.sae301_matos3_en);
    this.translation_en.set("SAE301-PRESENTATION-INFRA-RES", this.sae301_presentation_infra_res_en);
    this.translation_en.set("SAE301-PRESENTATION-TACHE", this.sae301_presentation_tache_en);
    this.translation_en.set("SAE301-ETAPE1", this.sae301_etape1_en);
    this.translation_en.set("SAE301-ETAPE2", this.sae301_etape2_en);
    this.translation_en.set("SAE301-PARTIE3-TITRE", this.sae301_partie3_titre_en);
    this.translation_en.set("SAE301-PARTIE3-OBJ1", this.sae301_partie3_obj1_en);
    this.translation_en.set("SAE301-PARTIE3-OBJ2", this.sae301_partie3_obj2_en);
    this.translation_en.set("SAE301-PARTIE3-OBJ3", this.sae301_partie3_obj3_en);
    this.translation_en.set("SAE301-PARTIE3-OBJ4", this.sae301_partie3_obj4_en);
    this.translation_en.set("SAE301-PRBLM1", this.sae301_prblm1_en);
    this.translation_en.set("SAE301-DEUXIEME-PARTIE", this.sae301_deuxieme_partie_en);
    this.translation_en.set("SAE301-PARTIE4-A-TITRE", this.sae301_partie4_a_titre_en);
    this.translation_en.set("SAE301-PARTIE4-A-OBJ1", this.sae301_partie4_a_obj1_en);
    this.translation_en.set("SAE301-PARTIE4-A-OBJ2", this.sae301_partie4_a_obj2_en);
    this.translation_en.set("SAE301-PARTIE4-A-OBJ3", this.sae301_partie4_a_obj3_en);
    this.translation_en.set("SAE301-PARTIE4-A-OBJ4", this.sae301_partie4_a_obj4_en);
    this.translation_en.set("SAE301-PARTIE4-B-TITRE", this.sae301_partie4_b_titre_en);
    this.translation_en.set("SAE301-PARTIE4-B-PRES", this.sae301_partie4_b_pres_en);
    this.translation_en.set("SAE301-TITRE-RETEX", this.sae301_titre_retex_en);
    this.translation_en.set("SAE301-RETEX1", this.sae301_retex1_en);
    this.translation_en.set("SAE301-RETEX2", this.sae301_retex2_en);
    this.translation_en.set("SAE301-RETEX3", this.sae301_retex3_en);
    this.translation_en.set("SAE301-RETEX4", this.sae301_retex4_en);
    this.translation_en.set("SAE301-LIEN-GITHUB", this.sae301_lien_github_en);
    this.translation_fr.set("SAE302-PRESENTATION", this.sae302_presentation_fr);
    this.translation_fr.set("SAE302-PRESENTATION", this.sae302_presentation_fr);
    this.translation_en.set("SAE302-PRESENTATION", this.sae302_presentation_en);
    this.translation_fr.set("SAE302-OBJECTIF", this.sae302_objectif_fr);
    this.translation_en.set("SAE302-OBJECTIF", this.sae302_objectif_en);
    this.translation_fr.set("SAE302-DEF-FONCT", this.sae302_def_fonct_fr);
    this.translation_en.set("SAE302-DEF-FONCT", this.sae302_def_fonct_en);
    this.translation_fr.set("SAE302-FONCT1", this.sae302_fonct1_fr);
    this.translation_en.set("SAE302-FONCT1", this.sae302_fonct1_en);
    this.translation_fr.set("SAE302-FONCT2", this.sae302_fonct2_fr);
    this.translation_en.set("SAE302-FONCT2", this.sae302_fonct2_en);
    this.translation_fr.set("SAE302-FONCT3", this.sae302_fonct3_fr);
    this.translation_en.set("SAE302-FONCT3", this.sae302_fonct3_en);
    this.translation_fr.set("SAE302-FONCT4", this.sae302_fonct4_fr);
    this.translation_en.set("SAE302-FONCT4", this.sae302_fonct4_en);
    this.translation_fr.set("SAE302-CONTRAINTE", this.sae302_contrainte_fr);
    this.translation_en.set("SAE302-CONTRAINTE", this.sae302_contrainte_en);
    this.translation_fr.set("SAE302-CONT1", this.sae302_cont1_fr);
    this.translation_en.set("SAE302-CONT1", this.sae302_cont1_en);
    this.translation_fr.set("SAE302-CONT2", this.sae302_cont2_fr);
    this.translation_en.set("SAE302-CONT2", this.sae302_cont2_en);
    this.translation_fr.set("SAE302-CONT3", this.sae302_cont3_fr);
    this.translation_en.set("SAE302-CONT3", this.sae302_cont3_en);
    this.translation_fr.set("SAE302-TACHE", this.sae302_tache_fr);
    this.translation_en.set("SAE302-TACHE", this.sae302_tache_en);
    this.translation_fr.set("SAE302-TACHE1", this.sae302_tache1_fr);
    this.translation_en.set("SAE302-TACHE1", this.sae302_tache1_en);
    this.translation_fr.set("SAE302-TACHE2", this.sae302_tache2_fr);
    this.translation_en.set("SAE302-TACHE2", this.sae302_tache2_en);
    this.translation_fr.set("SAE302-TACHE3", this.sae302_tache3_fr);
    this.translation_en.set("SAE302-TACHE3", this.sae302_tache3_en);
    this.translation_fr.set("SAE302-MATACHE", this.sae302_matache_fr);
    this.translation_en.set("SAE302-MATACHE", this.sae302_matache_en);
    this.translation_fr.set("SAE302-RAISON1", this.sae302_raison1_fr);
    this.translation_en.set("SAE302-RAISON1", this.sae302_raison1_en);
    this.translation_fr.set("SAE302-RAISON2", this.sae302_raison2_fr);
    this.translation_en.set("SAE302-RAISON2", this.sae302_raison2_en);
    this.translation_fr.set("SAE302-ARCHI", this.sae302_archi_fr);
    this.translation_en.set("SAE302-ARCHI", this.sae302_archi_en);
    this.translation_fr.set("SAE302-VIDEO", this.sae302_video_fr);
    this.translation_en.set("SAE302-VIDEO", this.sae302_video_en);
    this.translation_fr.set("SAE302-TITRE-RETEX", this.sae302_titre_retex_fr);
    this.translation_en.set("SAE302-TITRE-RETEX", this.sae302_titre_retex_en);
    this.translation_fr.set("SAE302-RETEX1", this.sae302_retex1_fr);
    this.translation_en.set("SAE302-RETEX1", this.sae302_retex1_en);
    this.translation_fr.set("SAE302-RETEX2", this.sae302_retex2_fr);
    this.translation_en.set("SAE302-RETEX2", this.sae302_retex2_en);
    this.translation_fr.set("SAE302-RETEX3", this.sae302_retex3_fr);
    this.translation_en.set("SAE302-RETEX3", this.sae302_retex3_en);
    this.translation_fr.set("SAE302-RETEX4", this.sae302_retex4_fr);
    this.translation_en.set("SAE302-RETEX4", this.sae302_retex4_en);
    this.translation_fr.set("SAE302-RETEX5", this.sae302_retex5_fr);
    this.translation_en.set("SAE302-RETEX5", this.sae302_retex5_en);
    this.translation_fr.set("SAE302-LIEN-GITHUB", this.sae302_lien_github_fr);
    this.translation_en.set("SAE302-LIEN-GITHUB", this.sae302_lien_github_en);



    this.checkAllKeys();
  }

  private checkAllKeys() {
    for (let i = 0; i < TRANSLATION_KEY.length; i++) {
      const key = TRANSLATION_KEY[i];
      if (!this.translation_fr.has(key)) {
        console.warn("La clé " + key + " n'est pas mise dans la traduction française");
      }
      if (!this.translation_en.has(key)) {
        console.warn("The key " + key + " is not set in the english translation");
      }
    }
  }

  public translate(key: TRANSLATION_KEY, ...args: string[]) {
    // récupère la bonne ma pour ne pas les différencier plus tard dans le code
    var choosenLang: Map<TRANSLATION_KEY, string>;
    switch (this.choosenLanguage()) {
      case 'fr':
        choosenLang = this.translation_fr;
        break;
      case 'en':
        choosenLang = this.translation_en;
        break;
    }

    // applique les arguments à la réponse, si il y en a
    let res = choosenLang.get(key) || "";
    if (args != undefined && args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        res = res.replaceAll("%" + (i + 1), args[i]);
      }
    }

    return res;
  }

  public t(key: TRANSLATION_KEY, ...args: string[]) {
    return this.translate(key, ...args);
  }

  motive = "Motivé";
  motivated = "Motivated";
  whoami_text_fr = ` Etienne, 21 ans, étudiant en première année de formation Ingénieur informatique et réseaux en 
  apprentissage à l'IMT Mines Alès. J'effectue cette formation en alternance et je suis accueilli par le Conseil Départemental
   de l'Ain à Bourg-en-Bresse au sein de la Direction de la Transition et des Solutions Numériques (DTSN). `;
  whoami_text_en = `Etienne, 21 years old, first year student at IMT Mines Alès studying computer science and network 
  engineering as an apprentice. I was welcomed by the Conseil Départemental de l'Ain in Bourg-en-Bresse, 
  within the Transition and Digital Solutions Direction.`;
  formation_first_fr = `IUT Nord Franche Comté à Montbéliard - Formation en alternance spécialisée autour de 3
                        compétences
                        communes : systèmes et réseaux, télécommunications et programmation. Mes compétences spécifiques
                        à mon parcours en cybersécurité sont : Sécuriser et Surveiller le SI`;
  formation_first_en = `IUT Nord Franche Comté at Montbéliard - Work-study education program structured in three main area of expertise : 
  Systems and Networks, telecommunication and programming. I had the opportunity to specialise myself in cybersecurity 
  (Ensure security: Firewall/Pentesting and Monitor systems: IDS/Supervision)`;
  formation_second_fr = `Lycée Saint Pierre à Bourg en Bresse - obtenu avec les mentions assez bien et section européenne.`;
  formation_second_en = `Lycée Saint Pierre at Bourg en Bresse - degree obtained with a European Section distinction (enhanced English program)`;
  formation_third_fr = `IMT Mines Alès à Alès - Formation en alternance en Informatique et Réseaux avec une spécialisation en Systèmes et Réseaux`;
  formation_third_en = `IMT Mines Alès at Alès - Work-study programm in Computer Science and Network with a specialisation in Systems and Networks`;
  temoignage_fr = `Depuis trois ans maintenant, j'ai la chance de travailler avec
            Etienne en classe, mais aussi
            lors de projets conséquents que nous avons réalisés ensemble. Etienne est une personne
            compétente et sérieuse dans son travail, il est toujours pleinement impliqué dans ce qu'il fait
            et toujours soucieux de faire de son mieux. Depuis que je le connais il n'a jamais cessé de
            produire du travail conséquent et toujours de bonne qualité. De plus, il aime aider les autres
            et leur expliquer les choses qu'ils ne comprennent pas ne lui a jamais fait peur. En bref,
            Etienne est une personne qualifiée techniquement, mais aussi humainement, cela a toujours été un
            plaisir de travailler avec lui.`
  temoignage_en = `For three years now, I’ve had the pleasure of working with Etienne, both in class and on major projects we completed together.
  Etienne is a competent and reliable person; he is always fully committed to what he does and consistently strives to give his best.
   Since I’ve known him, he has continuously delivered substantial work of high quality.
Moreover, he enjoys helping others, and explaining things to those who don’t understand has never been an issue for him.
In short, Etienne is not only technically skilled but also an excellent person to work with. It has always been a pleasure collaborating with him.`;
  exp_pro_un_sommaire_fr = "Depuis septembre 2024 – Alternance : Conseil Départemental de l’Ain";
  exp_pro_un_poste_fr = "Direction de la Transition et des Solutions Numériques – Service Infrastructure et Cybersécurité. - Bourg en Bresse";
  exp_pro_un_mission_fr = "Exploitation et participation aux projets d'infrastructures systèmes et réseaux";
  exp_pro_un_time_fr = "02/09/2024 – Aujourd’hui";

  exp_pro_un_sommaire_en = "2024 - Present : Apprenticeship at Conseil Départemental de l'Ain";
  exp_pro_un_poste_en = "Transition and Digital Solutions Direction - Infrastructure and Cybersecurity Department - Bourg en Bresse";
  exp_pro_un_mission_en = `Implementation of a testing environment to reproduce the real infrastructure
in order to test newly solutions`;
  exp_pro_un_time_en = "September 2024 - Present";

  exp_pro_deux_sommaire_fr = "Stage – Préfecture de l’Ain (BISIC)";
  exp_pro_deux_poste_fr = "Stage au Bureau Interministériel des Systèmes d’Information et de Communication. - Bourg en Bresse";
  exp_pro_deux_mission_fr = "Étude de renouvellement de l’infrastructure informatique.";
  exp_pro_deux_time_fr = "15/04/2024 – 07/06/2024";

  exp_pro_deux_sommaire_en = "Internship - Préfecture de l'Ain";
  exp_pro_deux_poste_en = "Interministerial Office for Information and Communication Systems - Bourg en Bresse";
  exp_pro_deux_mission_en = "Study about the renewal of the IT infrastructure of the Préfecture de l’Ain";
  exp_pro_deux_time_en = "04/15/2024 - 06/07/2024";

  exp_pro_trois_sommaire_fr = "Juillet 2024 – Ripeur";
  exp_pro_trois_poste_fr = "Intérimaire - Bourg en Bresse";
  exp_pro_trois_mission_fr = "Travail en intérim dans la collecte des déchets.";
  exp_pro_trois_time_fr = "Juillet 2024";

  exp_pro_trois_sommaire_en = "July 2024 : garbage collector";
  exp_pro_trois_poste_en = "Temporary job - Bourg en Bresse";
  exp_pro_trois_mission_en = "temporary job in garbage collection";
  exp_pro_trois_time_en = "July 2024";

  exp_pro_quatre_sommaire_fr = "Juillet 2023 – Direction Générale des Finances Publiques";
  exp_pro_quatre_poste_fr = "Service de la Publicité Foncière et de l’Enregistrement - Bourg en Bresse.";
  exp_pro_quatre_mission_fr = "Archivage, suivi administratif.";
  exp_pro_quatre_time_fr = "Juillet 2023 - (1 mois)";

  exp_pro_quatre_sommaire_en = "July 2023 - Direction Générale des Finances Publiques";
  exp_pro_quatre_poste_en = "Property Registration and Recording Service - Bourg en Bresse";
  exp_pro_quatre_mission_en = "Archiving, administrative follow-up";
  exp_pro_quatre_time_en = "July 2023";

  exp_pro_cinq_sommaire_fr = "Juillet 2022 – Direction Générale des Finances Publiques";
  exp_pro_cinq_poste_fr = "Trésorerie Publique Hospitalière - Bourg en Bresse";
  exp_pro_cinq_mission_fr = "Découverte de l’environnement administratif, appui à la gestion documentaire.";
  exp_pro_cinq_time_fr = "Juillet 2022 - (1 mois)";

  exp_pro_cinq_sommaire_en = "July 2022 - Direction Générale des Finances Publiques";
  exp_pro_cinq_poste_en = "Public Treasurery for Hospital";
  exp_pro_cinq_mission_en = "Archiving, administrative follow-up";
  exp_pro_cinq_time_en = "July 2022";

  projet_pro_en = `I am a first year IT Engineering Apprentice at IMT Mines Alès. Currently
working at the Conseil Départemental de l’Ain. Autonomous, serious and
reliable, I managed successfully a multitude of studies projects. I am seeking
a challenging experience abroad to leverage my technical expertise.`;
  projet_pro_fr = `Mon projet professionnel est de pouvoir réaliser un stage à l'étranger 
afin d'obtenir une expérience professionnelle stimulante et approfondir mes compétences techniques.`;
  chessclassement = "https://www.chess.com/member/sotrf";
  cyber_texte_fr = `<p>Durant, notre formation en BUT R&T, on a eu un choix de spécialité à réaliser et j'ai choisi cybersécurité. 
        La cybersécurité englobe de nombreuses facettes : sécurisation du système d'information (SI), hacking éthique des infrastructure (pentesting) pour détecter les failles potentielles.
        J'apprécie particulièrement la sécurisation du SI avec l'utilisation de pare-feux : Stormshield, pfSense. 
        Je n'apprécie pas le pentesting pour ce que c'est, mais je trouve que c'est important de savoir en faire afin d'effectuer soi-même 
        un diagnostic du système d'information. En effet, cela permet de voir les premières failles et de pouvoir les corriger avant 
        de potentielles cyberattaques qui pourraient causer d'importants dommages dans le cas contraire.
         </p>`;
  cyber_texte_en = `During our BUT R&T training, we had to choose a specialisation, and I chose cybersecurity. 
        <br> <br>Cybersecurity covers many areas: securing information systems (IS), ethical hacking of infrastructure (pentesting) to detect potential vulnerabilities.
        I particularly enjoy securing IS using firewalls such as Stormshield and pfSense. 
        I'm not especially interested in pentesting, but I think it's important to know how to do it in order to diagnose information systems yourself. This allows you to see the initial vulnerabilities and correct them before potential cyberattacks that could cause significant damage if left unchecked.
`;
  auto_texte_fr = `<p>
La création de scripts d’automatisation m’était encore inconnue il y a peu. 
J’ai découvert que cette facette de l’administration système est particulièrement intéressante, 
car elle permet d’améliorer l’efficacité, d’automatiser des tâches répétitives et d’ajouter une 
réelle valeur au travail quotidien. Le dernier script d'automatisation que j'ai créé permet de synchroniser 
les comptes utilisateurs de l'Active Directory et ceux présents sur le serveur de messagerie Zimbra, pour que 
chaque utilisateur puisse avoir automatiquement une adresse email avec son mot de passe Active Directory.
 Ce script ne prend cependant pas encore en compte le chiffrement pour éviter qu'une attaque MITM puisse 
 récupérer les différents identifiants via le réseau.
  </p>
        `;
  auto_texte_en = `Until recently, I was not familiar with creating automation scripts.
   I discovered that this aspect of system administration is particularly interesting because it improves efficiency,
    automates repetitive tasks, and adds real value to daily work. 
    The latest automation script I created synchronises Active Directory user accounts with those on the Zimbra mail server, 
    so that each user can automatically have an email address with their Active Directory password. 
    However, this script does not yet take into account encryption to prevent a MITM attack from retrieving the various identifiers
     via the network.`;
  admsys_texte_fr = `<p>À titre professionnel, j'apprécie plus l’administration système et la sécurisation du SI, mais j'aime également faire de l'administration réseau : lors des projets universitaires, dans mon temps libre pour explorer de nouvelles technologies.
J’aime approfondir les connaissances acquises lors des TPs et des cours, que ce soit pendant mon temps libre 
ou dans le cadre des missions qui me sont confiées en entreprise. 
Par ailleurs, ma participation aux sélections régionales des WorldSkills en Bourgogne-Franche-Comté 
m'a permis de réaliser différents projets dans un laps de temps très cours, 
me permettant ainsi de travailler sous pression et condition de résultat. 
Je considère cette expérience enrichissante et bénéfique car elle m'a permis de tester mes capacités à résoudre rapidement des problèmes 
ou la réalisation des facettes (Administration systèmes, administration réseau) d'un SI dans un laps de temps très cours. 
        </p>`;
  admsys_texte_en = `Professionally, I enjoy system administration and IT security more, but I also like doing network administration: during university projects, in my spare time to explore new technologies.
<br> <br>I like to deepen the knowledge I have acquired during practical work and lectures, whether in my spare time 
or as part of the tasks assigned to me at work. 
In addition, my participation in the WorldSkills regional selections in Bourgogne-Franche-Comté 
was an opportunity to carry out various projects in a very short period of time, 
allowing me to work under pressure and in a results-oriented environment. 
I consider this experience to be enriching and beneficial because it allowed me to test my ability to quickly solve problems
 or carry out various aspects (systems administration, network administration) of an information system within a very short time frame. `;
  devweb_texte_fr = `<p>Le développement web n’a pas toujours été au cœur de mes intérêts. 
        Cependant, souhaitant renforcer mes compétences dans ce domaine, j’ai décidé, durant l’été 2024 et après une discussion avec un ami,
         de me lancer dans la création de ce site web en utilisant le framework Angular. Ce projet a été entièrement réalisé avec Angular,
          offrant une grande flexibilité dans son développement. J’ai pris beaucoup de plaisir à travailler sur ce projet et, depuis,
           je continue à approfondir mes connaissances en programmation web, notamment avec Angular, pour toujours m'améliorer.
           Ce projet m’a ainsi permis d’entrevoir de nombreuses idées pour d’autres réalisations. 
           Les compétences que j’ai développées à cette occasion me seront précieuses à l’avenir pour mener à bien de futurs projets
            </p>`;
  devweb_texte_en = `<p> Web development has not always been one of my main interests. 
        However, wanting to strengthen my skills in this area, I decided, during the summer of 2024 and after a discussion with a friend,
         to start creating this website using the Angular framework. This project was entirely built with Angular,
          which offered great flexibility in its development. I really enjoyed working on this project and, since then,
           I have continued to deepen my knowledge of web programming, particularly with Angular, in order to constantly improve.
           This project has given me many ideas for other projects. 
           The skills I developed during this project will be invaluable to me in the future when carrying out future projects.

</p>`;
  bike_texte_fr = `<p> Je pratique cette activité physique de manière occasionnelle. 
        J'apprécie aussi bien les trajets en VTT sur des chemins variés que les parcours sur route, souvent sur de longues distances,
         autour de 40 km. Ce qui me plaît particulièrement, c'est la diversité des paysages que l'on peut découvrir au fil des balades, 
         ainsi que les sorties en famille sur les voies vertes. Cette activité me permet non seulement de profiter de la nature, 
         mais aussi de renforcer mon endurance et d'améliorer ma condition physique. Cette activité me sensibilise également à l'importance que pourrait avoir le
          vélo dans les transports quotidiens, à condition d'une météo clémente.  </p>
      `;
  bike_texte_en = `I practise this physical activity occasionally. 
        I enjoy mountain biking on varied trails as well as road cycling, often over long distances of
         around 40 km. What I particularly like is the diversity of landscapes that can be discovered during the rides, 
         as well as family outings on greenways. This activity not only allows me to enjoy nature, 
         but also to build up my stamina and improve my physical condition. It also makes me aware of the importance that cycling could have
          in everyday transport, provided the weather is favourable. `;
  guitare_texte_fr = `<p>Je joue de la guitare depuis le CE2, où j'ai commencé à prendre des cours.
        Depuis, j'ai alterné entre des périodes d'apprentissage autodidacte et des phases encadrées par un professeur. 
        J'ai exploré de nombreux genres musicaux, mais depuis 2020, je me consacre principalement au métal et plus particulièrement à la partie rythmique des morceaux de métal.
         J'apprécie particulièrement ce style,
         qui me permet
 de me détendre après une journée bien remplie et de m'évader pendant quelques instants. 
         Je n'évolue pas pour l'instant dans un groupe de musique, mais je ne m'interdis rien. Mes artistes préférés sont : Rammstein, Metallica, Powerwolf, Green Day, Volbeat, Linkin Park. 
         Je possède 2 guitares : une électrique et une électro-acoustique que je me suis acheté pour mes 18 ans. </p>
        `;
  guitare_texte_en = `I have been playing guitar since Year 5, when I started taking lessons.
Since then, I have alternated between periods of self-teaching and phases supervised by a teacher.
I have explored many musical genres, but since 2020, I have mainly devoted myself to metal and more specifically to the rhythmic part of metal songs.
         I particularly enjoy this style,
which allows me
to relax after a busy day and escape for a few moments.
I am not currently playing in a band, but I am open to the possibility. My favourite artists are: Rammstein, Metallica, Powerwolf, Green Day, Volbeat, Linkin Park. 
         I own two guitars: an electric and an electro-acoustic, which I bought for myself when I turned 18. `;
  chess_texte_fr = `<p>Les échecs est une activité que je pratique souvent avec des amis en ligne sur chess.com ou sur plateau lorsqu'on a l'occasion de se voir.
         Cette activité me permet de développer ma capacité à réfléchir dans des situations différentes 
         les unes des autres et m'adapter constamment aux coups de l'adversaire. De plus, sur le site chess.com, un système d'élo (système permettant de définir le classement des joueurs) 
         et de problème sur mesure est fonctionnel et j'aime beaucoup résoudre les énigmes de coups pour faire mat. Ce système d'élo permet également de défier des joueurs ayant un élo plus ou moins égal au mien. 
         Actuellement, j'ai 900 d'elo environ j'entreprends l'objectif d'arriver a 1300 elo.
        J’ai toujours apprécié jouer aux échecs, tant pour la richesse des stratégies à élaborer que pour le sentiment de sérénité que procure cette discipline intellectuelle.</p>
        <a target="_blank" href="${this.chessclassement}">Retrouvez mon classement ici</a>`;
  chess_texte_en = `Chess is an activity that I often play with friends online on chess.com or on a board when we have the opportunity to meet up.
This activity allows me to develop my ability to think in different situations 
and constantly adapt to my opponent's moves. In addition, on chess.com, there is an Elo rating system (a system for ranking players) 
         and customised problems, and I really enjoy solving the puzzles to checkmate. The Elo rating system also allows me to challenge players with a rating similar to mine. 
         Currently, I have an Elo rating of around 900, and my goal is to reach 1300.
I have always enjoyed playing chess, both for the wealth of strategies to be developed and for the sense of serenity that this intellectual discipline provides.
<a target="_blank" href="${this.chessclassement}">You can find my ranking here</a>
`;

  tennis_texte_fr = `<p>Le tennis est un sport que je pratique depuis plus de 12 ans. Je m’entraîne chaque semaine et, cette année, je me suis fixé l’objectif d’atteindre un classement 30/3–30/2 afin de mesurer ma progression.
Ce sport m’aide à sortir de ma zone de confort grâce aux compétitions, qui me poussent à me confronter à de nouveaux adversaires et à gérer la pression.
Bien qu’il soit individuel, le tennis développe aussi l’esprit de collaboration : on progresse grâce à l’adversaire, et les échanges permettent parfois de créer des liens.
Au-delà de la technique, le tennis m’a appris la rigueur, la patience et une certaine discipline mentale, des qualités que j’applique aussi dans mon travail.</p>`;
  tennis_texte_en = `I have been playing tennis for over 12 years. I train every week and this year I have set myself the goal of reaching a 30/3–30/2 ranking to measure my progress.
This sport helps me step outside my comfort zone thanks to competitions, which push me to face new opponents and manage pressure.
Although it is an individual sport, I think tennis also develops a spirit of collaboration: you progress thanks to your opponent, and exchanges sometimes allow you to form bonds.
Beyond technique, tennis has taught me rigour, patience and a certain mental discipline, qualities that I also apply in my work.`;
  jeuxvideo_texte_fr = `<p>J'ai commencé à jouer aux jeux vidéos à l'adolescence au collège quand mes parents ont acheté une WII.
         Depuis, je n'ai jamais arrêté de jouer mais j'ai diminué ma présence sur ceux ci durantr certaines périodes.
          Je suis particulièrement fan des jeux de stratégie, qu'ils soient en temps réel, 
          comme Conflict of Nations, ou au tour par tour avec des options multijoueurs, comme Civilization V.
           J'apprécie également les jeux de type GTA V, tels que Far Cry 5, ainsi que les jeux de survie, comme Sons of the Forest.
          Toujours curieux, je n'hésite pas à explorer de nouveaux jeux, étant constamment en quête de découvertes et de nouveautés.</p>
        `;
  jeuxvideox_texte_en = `I started playing video games as a teenager in secondary school when my parents bought a Wii.
Since then, I have never stopped playing, but I have reduced my playing time during certain periods.
          I am particularly fond of strategy games, whether they are real-time, 
          such as Conflict of Nations, or turn-based with multiplayer options, such as Civilisation V.
           I also enjoy GTA V-style games, such as Far Cry 5, as well as survival games, such as Sons of the Forest.
          Always curious, I don't hesitate to explore new games, constantly seeking discoveries and novelties.`;
  linkedin_texte_fr = ` LinkedIn est un réseau social professionnel largement utilisé dans le monde entier, conçu pour
                favoriser
                le
                développement de relations professionnelles, le partage d'expertises et la mise en valeur des
                compétences.`;
  linkedin_first_texte_fr = `Cette plateforme permet aux individus de créer un profil détaillé mettant en avant leur parcours
                académique,
                leurs expériences professionnelles, leurs compétences et leurs réalisations. Les membres peuvent élargir
                leur réseau en se connectant avec des collègues, des recruteurs, des partenaires commerciaux et des
                experts
                de divers secteurs d'activité.`;
  linkedin_second_texte_fr = `LinkedIn est également un outil puissant pour :`;
  linkedin_recherche_fr = `Rechercher des opportunités d'emploi : Offres publiées par des entreprises et recrutement direct
                        via la plateforme.`
  linkedin_dev_fr = `Développer une image de marque personnelle : Publication d'articles, partage de projets et
                        interactions avec des publications d'autres professionnels.`;
  linkedin_collab_fr = `  Collaborer et échanger : Participation à des groupes de discussion et forums thématiques.`;
  linkedin_last_texte_fr = `Vous y trouverez dans le lien suivant mon profil LinkedIn :`;
  linkedin_button_fr = `Retrouvez mon profil sur LinkedIn : Contactez-moi !`;
  github_texte_fr = `GitHub est une plateforme de gestion de code et de collaboration largement utilisée
                par les développeurs et les équipes pour héberger, versionner et partager leurs projets. Elle permet le
                dépôt et le stockage de projets sous forme de repositories (ou répertoires), facilitant ainsi la gestion
                des versions et la collaboration sur le code source`;
  github_first_texte_fr = `Principalement utilisée pour le développement d'applications et de logiciels, GitHub prend en charge le
                système de contrôle de version Git, qui permet de suivre l'historique des modifications apportées au
                code.`;
  github_second_texte_fr = `Parmi ses fonctionnalités clés :`;
  github_collab_texte_fr = `Collaboration : Possibilité de travailler à plusieurs sur un même projet via les pull requests et
                        les branches.`;
  github_suivi_texte_fr = `Suivi des modifications : Chaque changement est historisé, permettant de revenir à des versions
                        antérieures du projet.`;
  github_gestion_texte_fr = `Gestion des projets : Outils intégrés comme les issues, projets et wikis pour organiser le
                        travail et suivre l'avancement.`;
  github_open_texte_fr = `Open-source et privé : GitHub héberge aussi bien des projets open-source que des projets privés.`;
  github_last_texte_fr = `Vous trouverez dans le lien suivant mes différents répertoires où sont exposés les différents projets que
                j'ai réalisés au BUT Réseaux et Télécommunications de Montbéliard.`;
  github_button_texte_fr = `Retrouvez mes projets sur GitHub`;
  linkedin_texte_en = ` LinkedIn is a professional social network widely used around the world, designed to
                promote
                the
                development of professional relationships, the sharing of expertise and the promotion of
                skills.`;
  linkedin_first_texte_en = `This platform allows individuals to create a detailed profile highlighting their academic background,
                professional experience, skills and achievements. Members can expand
                their network by connecting with colleagues, recruiters, business partners and
                experts
                from various industries.`;
  linkedin_second_texte_en = `LinkedIn is also a powerful tool for:`;
  linkedin_recherche_en = `Search for job opportunities: Job offers published by companies and direct recruitment
via the platform.`
  linkedin_dev_en = `Developing a personal brand image: Publishing articles, sharing projects, and
interacting with other professionals' publications.`;
  linkedin_collab_en = `  Collaborate and exchange: Participation in discussion groups and thematic forums.`;
  linkedin_last_texte_en = `You can find my LinkedIn profile at the following link:`;
  linkedin_button_en = `Find my profile on LinkedIn: Get in touch!`;
  github_texte_en = `GitHub is a widely used code management and collaboration platform
                used by developers and teams to host, version control and share their projects. It allows
                projects to be deposited and stored in the form of repositories (or directories), thereby facilitating version management
                and collaboration on source code.`;
  github_first_texte_en = `Primarily used for application and software development, GitHub supports the
                Git version control system, which tracks the history of changes made to the
                code.`;
  github_second_texte_en = `Key features include:`;
  github_collab_texte_en = `Collaboration: Ability to work with others on the same project via pull requests and
                        branches.`;
  github_suivi_texte_en = `Change tracking: Every change is logged, allowing you to revert to previous versions
of the project.`;
  github_gestion_texte_en = `Project management: Integrated tools such as issues, projects, and wikis to organise work and track progress.`;
  github_open_texte_en = `Open-source and private: GitHub hosts both open-source and private projects.`;
  github_last_texte_en = `You will find in the following link my various portfolios showcasing the different projects I
                have completed at BUT Réseaux et Télécommunications in Montbéliard.`;
  github_button_texte_en = `Find my projects on GitHub`;
  portfolio_titre_fr = `Mes compétences`;
  portfolio_presentation_fr = `Voici une synthèse de mes compétences développées au cours de ma formation, vous trouverez dans l'onglet projet leur mise en œuvre `;
  portfolio_titre_competence_un_fr = `Administrer les réseaux et Internet`;
  portfolio_competence_un_tag1_fr = `Windows`;
  portfolio_competence_un_tag2_fr = `Linux`;
  portfolio_titre_competence_un_sous_competence_un_fr = `Administration systèmes`;
  portfolio_titre_un_competence_un_sous_competence_un_fr = `Windows Server 2019/2022/2025`;
  portfolio_titre_deux_competence_un_sous_competence_un_fr = `Windows Client (10//11)`;
  portfolio_titre_trois_competence_un_sous_competence_un_fr = `Linux`;
  portfolio_texte_un_competence_un_sous_competence_un_fr = `Active Directory, GPO, DHCP, DNS, Partages réseaux, DFS`;
  portfolio_texte_deux_competence_un_sous_competence_un_fr = `Installation, Configuration, Utilisation`;
  portfolio_texte_trois_competence_un_sous_competence_un_fr = `DNS, Samba, ftp, tftp, ssh, Apache 2, DHCP`;
  portfolio_titre_competence_un_sous_competence_deux_fr = `Réseaux`;
  portfolio_titre_un_competence_un_sous_competence_deux_fr = `Switchs (L2/L3)`;
  portfolio_titre_deux_competence_un_sous_competence_deux_fr = `Routeur`;
  portfolio_texte_un_competence_un_sous_competence_deux_fr = `Configuration de Switch et de routeurs physiques et virtuels.`;
  portfolio_texte_deux_competence_un_sous_competence_deux_fr = `Routage statique (RIPv1, RIPv2)`;
  portfolio_texte_trois_competence_un_sous_competence_deux_fr = `Routage dynamique (OSPF, BGP, MPLS)`;
  portfolio_texte_quatre_competence_un_sous_competence_deux_fr = `Routage Inter-Vlan`;
  portfolio_texte_cinq_competence_un_sous_competence_deux_fr = `Gestion de VLAN`;
  portfolio_titre_competence_un_sous_competence_trois_fr = `Virtualisation`;
  portfolio_titre_un_competence_un_sous_competence_trois_fr = `GNS3/Packet Tracer`;
  portfolio_titre_deux_competence_un_sous_competence_trois_fr = `ESXi`;
  portfolio_titre_trois_competence_un_sous_competence_trois_fr = `Hyper-V`;
  portfolio_titre_quatre_competence_un_sous_competence_trois_fr = `Proxmox`;
  portfolio_texte_un_competence_un_sous_competence_trois_fr = `Création de réseaux d'entreprises complets (GNS3/Packet Tracer)`
  portfolio_texte_deux_competence_un_sous_competence_trois_fr = `Configuration de réseaux virtuels, configuration et création de VM, utilisation de vCenter`;
  portfolio_texte_trois_competence_un_sous_competence_trois_fr = `Création et configuration des VMs, mise en place de réseaux virtuels, mise en place de la réplication`;
  portfolio_texte_quatre_competence_un_sous_competence_trois_fr = `Installation, configuration et création de VMs, de réseaux virtuels (VLAN, Bridge, Bond), création et configuration de cluster, mise en place d'un stockage partagé (iSCSI sous Windows Server)`;
  portfolio_titre_competence_deux_fr = `Conecter les entreprises`;
  portfolio_competence_deux_tag1_fr = `Wifi`;
  portfolio_competence_deux_tag2_fr = `4G`;
  portfolio_competence_deux_tag3_fr = `Réseaux Fibre/Cuivre`;
  portfolio_competence_deux_tag4_fr = `ToIP`;
  portfolio_titre_un_competence_deux_sous_competence_un_fr = `Téléphonie sur IP`;
  portfolio_titre_competence_deux_sous_competence_un_fr = `Télécommunications`;
  portfolio_titre_deux_competence_deux_sous_competence_un_fr = `Réseaux Cellulaires`;
  portfolio_texte_un_competence_deux_sous_competence_un_fr = `Mise en place de réseaux téléphoniques`;
  portfolio_texte_deux_competence_deux_sous_competence_un_fr = `Asterisk : configuration et utilisation`;
  portfolio_texte_trois_competence_deux_sous_competence_un_fr = `Compréhension des réseaux internet (1G, GSM, UMTS, 4G LTE, 5G, Réseaux fibre/cuivre)`;
  portfolio_titre_competence_trois_fr = `Créer des outils et des applications informatiques pour les R&T`;
  portfolio_competence_trois_tag1_fr = `Web`;
  portfolio_competence_trois_tag2_fr = `Programmation (Objet et IHM)`;
  portfolio_competence_trois_tag3_fr = `Scripting`;
  portfolio_competence_trois_tag4_fr = `Bases de données`;
  portfolio_titre_competence_trois_sous_competence_un_fr = `Scripting & développement`;
  portfolio_titre_un_competence_trois_sous_competence_un_fr = `PowerShell/Bash`;
  portfolio_titre_deux_competence_trois_sous_competence_un_fr = `HTML/CSS/JavaScript/Angular`;
  portfolio_titre_trois_competence_trois_sous_competence_un_fr = `Python`;
  portfolio_titre_quatre_competence_trois_sous_competence_un_fr = `Java`;
  portfolio_texte_un_competence_trois_sous_competence_un_fr = `Création de script pour l'administration système`;
  portfolio_texte_deux_competence_trois_sous_competence_un_fr = `Création de site web statique/dynamique`;
  portfolio_texte_trois_competence_trois_sous_competence_un_fr = `Création de script d'automatisation`;
  portfolio_texte_quatre_competence_trois_sous_competence_un_fr = `Création d'une application basique de Chat`;
  portfolio_titre_competence_trois_sous_competence_deux_fr = `Bases de données`;
  portfolio_titre_un_competence_trois_sous_competence_deux_fr = `SQL`;
  portfolio_texte_un_competence_trois_sous_competence_deux_fr = `Création et modélisation de bases de données`;
  portfolio_texte_deux_competence_trois_sous_competence_deux_fr = `Réalisation de requêtes SQL simples`;
  portfolio_titre_competence_quatre_fr = `Sécuriser`;
  portfolio_competence_quatre_tag1_fr = `Pare-feux`;
  portfolio_competence_quatre_tag2_fr = `IDS`;
  portfolio_titre_competence_quatre_sous_competence_un_fr = `Sécuriser`;
  portfolio_titre_un_competence_quatre_sous_competence_un_fr = `Firewall(Stormshield/pfSense)`;
  portfolio_titre_deux_competence_quatre_sous_competence_un_fr = `Pentesting`;
  portfolio_titre_trois_competence_quatre_sous_competence_un_fr = `Supervision réseau`;
  portfolio_texte_un_competence_quatre_sous_competence_un_fr = `Filtrage et NAT`;
  portfolio_texte_deux_competence_quatre_sous_competence_un_fr = `Gestion d'ACL`;
  portfolio_texte_trois_competence_quatre_sous_competence_un_fr = `Création d'autorité de certification`;
  portfolio_texte_quatre_competence_quatre_sous_competence_un_fr = `Authentification sur pare-feu : implicite (Certificat SSL), explicite (Portail captif : Mot de passe, LDAP, RADIUS)`;
  portfolio_texte_cinq_competence_quatre_sous_competence_un_fr = `Proxy HTTP/HTTPS`;
  portfolio_texte_six_competence_quatre_sous_competence_un_fr = `IDS/IPS`;
  portfolio_texte_sept_competence_quatre_sous_competence_un_fr = `Root-me, Try HackMe`;
  portfolio_texte_huit_competence_quatre_sous_competence_un_fr = `SNMP : supervision de la MiB`;
  portfolio_texte_neuf_competence_quatre_sous_competence_un_fr = `Zabbix : Supervision réseau`;
  portfolio_titre_competence_cinq_fr = `Surveiller`;
  portfolio_competence_cinq_tag1_fr = `Pare-feux`;
  portfolio_competence_cinq_tag2_fr = `IDS`;
  portfolio_titre_competence_cinq_sous_competence_un_fr = `Surveiller`;
  portfolio_titre_un_competence_cinq_sous_competence_un_fr = `Firewall(Stormshield/pfSense)`;
  portfolio_titre_deux_competence_cinq_sous_competence_un_fr = `Pentesting`;
  portfolio_titre_trois_competence_cinq_sous_competence_un_fr = `Supervision réseau`;
  portfolio_texte_un_competence_cinq_sous_competence_un_fr = `Filtrage et NAT`;
  portfolio_texte_deux_competence_cinq_sous_competence_un_fr = `Gestion d'ACL`;
  portfolio_texte_trois_competence_cinq_sous_competence_un_fr = `Création d'autorité de certification`;
  portfolio_texte_quatre_competence_cinq_sous_competence_un_fr = `Authentification sur pare-feu : implicite (Certificat SSL), explicite (Portail captif : Mot de passe, LDAP, RADIUS)`;
  portfolio_texte_cinq_competence_cinq_sous_competence_un_fr = `Proxy HTTP/HTTPS`;
  portfolio_texte_six_competence_cinq_sous_competence_un_fr = `IDS/IPS`;
  portfolio_texte_sept_competence_cinq_sous_competence_un_fr = `Root-me, Try HackMe`;
  portfolio_texte_huit_competence_cinq_sous_competence_un_fr = `SNMP : supervision de la MiB`;
  portfolio_texte_neuf_competence_cinq_sous_competence_un_fr = `Zabbix : Supervision réseau`;
  portfolio_certif_titre_fr = `Certifications`;
  portfolio_certif_sous_titre_un_fr = `CCNAv7`;
  portfolio_certif_sous_titre_deux_fr = `CCNAv7`;
  portfolio_certif_sous_titre_trois_fr = `CCNAv7`;
  portfolio_certif_texte_un_fr = `Introduction aux réseaux`;
  portfolio_certif_texte_deux_fr = `Notions de base sur la commutation, le routage et le sans fil`;
  portfolio_certif_texte_trois_fr = `Mise en réseau, Sécurité et Automatisation et entreprises`;
  portfolio_presentation_en = `Here is a summary of the skills I developed during my training. You can find examples of how I applied them in the Projects tab.`;
  portfolio_titre_competence_un_en = `Information Systems administration`;
  portfolio_competence_un_tag1_en = `Windows`;
  portfolio_competence_un_tag2_en = `Linux`;
  portfolio_titre_competence_un_sous_competence_un_en = `Systems administration`;
  portfolio_titre_un_competence_un_sous_competence_un_en = `Windows Server 2019/2022/2025`;
  portfolio_titre_deux_competence_un_sous_competence_un_en = `Windows Client`;
  portfolio_titre_trois_competence_un_sous_competence_un_en = `Linux`;
  portfolio_texte_un_competence_un_sous_competence_un_en = `Active Directory, GPO, DHCP, DNS, Partages réseaux, DFS`;
  portfolio_texte_deux_competence_un_sous_competence_un_en = `Installation, Configuration, Utilisation`;
  portfolio_texte_trois_competence_un_sous_competence_un_en = `DNS, Samba, ftp, tftp, ssh, Apache 2, DHCP`;
  portfolio_titre_competence_un_sous_competence_deux_en = `Networks administrations`;
  portfolio_titre_un_competence_un_sous_competence_deux_en = `Switches (L2/L3)`;
  portfolio_titre_deux_competence_un_sous_competence_deux_en = `Routers`;
  portfolio_texte_un_competence_un_sous_competence_deux_en = `Switches and routers configuration`;
  portfolio_texte_deux_competence_un_sous_competence_deux_en = `VRRP/HSRP/VRF/STP`;
  portfolio_texte_trois_competence_un_sous_competence_deux_en = `Dynamic routing`;
  portfolio_texte_quatre_competence_un_sous_competence_deux_en = `Inter-VLAN routing`;
  portfolio_texte_cinq_competence_un_sous_competence_deux_en = `VLAN Managment`;
  portfolio_titre_competence_un_sous_competence_trois_en = `Virtualization`;
  portfolio_titre_un_competence_un_sous_competence_trois_en = `GNS3/Packet Tracer`;
  portfolio_titre_deux_competence_un_sous_competence_trois_en = `ESXi`;
  portfolio_titre_trois_competence_un_sous_competence_trois_en = `Hyper-V`;
  portfolio_titre_quatre_competence_un_sous_competence_trois_en = `Proxmox`;
  portfolio_texte_un_competence_un_sous_competence_trois_en = `Full company network's creation`;
  portfolio_texte_deux_competence_un_sous_competence_trois_en = `Configuring virtual networks, configuring and creating VMs, using vCenter;`;
  portfolio_texte_trois_competence_un_sous_competence_trois_en = `Creation and configuration of VMs, implementation of virtual networks, implementation of replication`;
  portfolio_texte_quatre_competence_un_sous_competence_trois_en = `Installation, configuration and creation of VMs, virtual networks (VLAN, Bridge, Bond), creation and configuration of clusters, implementation of shared storage (iSCSI under Windows Server)`;
  portfolio_titre_competence_deux_en = `Connecting Users and Companies`;
  portfolio_competence_deux_tag1_en = `Wi-Fi`;
  portfolio_competence_deux_tag2_en = `4G`;
  portfolio_competence_deux_tag3_en = `Fibre and Copper networks`;
  portfolio_competence_deux_tag4_en = `5G`;
  portfolio_titre_un_competence_deux_sous_competence_un_en = `Telephony over Internet Protocol`;
  portfolio_titre_competence_deux_sous_competence_un_en = `Telecommunications`;
  portfolio_titre_deux_competence_deux_sous_competence_un_en = `Mobile networks`;
  portfolio_texte_un_competence_deux_sous_competence_un_en = `Installation of telephone systems`;
  portfolio_texte_deux_competence_deux_sous_competence_un_en = `Asterisk: configuration and use`;
  portfolio_texte_trois_competence_deux_sous_competence_un_en = `Understanding internet networks (1G, GSM, UMTS, 4G LTE, 5G, fibre/copper networks)`;
  portfolio_titre_competence_trois_en = `Programming - Web development`;
  portfolio_competence_trois_tag1_en = `Web`;
  portfolio_competence_trois_tag2_en = `Programming (Object-oriented - HMI)`;
  portfolio_competence_trois_tag3_en = `Scripting`;
  portfolio_competence_trois_tag4_en = `Databases`;
  portfolio_titre_competence_trois_sous_competence_un_en = `Scripting & Development`;
  portfolio_titre_un_competence_trois_sous_competence_un_en = `PowerShell/Bash`;
  portfolio_titre_deux_competence_trois_sous_competence_un_en = `HTML/CSS/JavaScript/Angular`;
  portfolio_titre_trois_competence_trois_sous_competence_un_en = `Python`;
  portfolio_titre_quatre_competence_trois_sous_competence_un_en = `Java`;
  portfolio_texte_un_competence_trois_sous_competence_un_en = `Script creation for system administration`;
  portfolio_texte_deux_competence_trois_sous_competence_un_en = `Static/dynamic website creation`;
  portfolio_texte_trois_competence_trois_sous_competence_un_en = `Automation Scripting`;
  portfolio_texte_quatre_competence_trois_sous_competence_un_en = `Creating a basic chat application.`;
  portfolio_titre_competence_trois_sous_competence_deux_en = `Databases`;
  portfolio_titre_un_competence_trois_sous_competence_deux_en = `SQL`;
  portfolio_texte_un_competence_trois_sous_competence_deux_en = `Database Creation and Modeling`;
  portfolio_texte_deux_competence_trois_sous_competence_deux_en = `Executing simple SQL queries`;
  portfolio_titre_competence_quatre_en = `Secure`;
  portfolio_competence_quatre_tag1_en = `Firewall`;
  portfolio_competence_quatre_tag2_en = `IDS/IPS`;
  portfolio_titre_competence_quatre_sous_competence_un_en = `Secure`;
  portfolio_titre_un_competence_quatre_sous_competence_un_en = `Firewall (Stormshield/pfSense)`;
  portfolio_titre_deux_competence_quatre_sous_competence_un_en = `Pentesting`;
  portfolio_titre_trois_competence_quatre_sous_competence_un_en = `Supervision`;
  portfolio_texte_un_competence_quatre_sous_competence_un_en = `Filtering and NAT`;
  portfolio_texte_deux_competence_quatre_sous_competence_un_en = `ACL management`;
  portfolio_texte_trois_competence_quatre_sous_competence_un_en = `Authority certification's creationg`;
  portfolio_texte_quatre_competence_quatre_sous_competence_un_en = `Authentication: implicit (SSL certificate) and explicit (captive portal: LDAP, Radius)`;
  portfolio_texte_cinq_competence_quatre_sous_competence_un_en = `Proxies HTTP/HTTPS`;
  portfolio_texte_six_competence_quatre_sous_competence_un_en = `IDS/IPS`;
  portfolio_texte_sept_competence_quatre_sous_competence_un_en = `Root-Me, TryHackMe`;
  portfolio_texte_huit_competence_quatre_sous_competence_un_en = `SNMP : MiB's supervision`;
  portfolio_texte_neuf_competence_quatre_sous_competence_un_en = `Zabbix : supervision`;
  portfolio_titre_competence_cinq_en = `Monitore`;
  portfolio_competence_cinq_tag1_en = `Firewall`;
  portfolio_competence_cinq_tag2_en = `IDS/IPS`;
  portfolio_titre_competence_cinq_sous_competence_un_en = `Monitore`;
  portfolio_titre_un_competence_cinq_sous_competence_un_en = `Firewall (Stormshield/pfSense)`;
  portfolio_titre_deux_competence_cinq_sous_competence_un_en = `Pentesting`;
  portfolio_titre_trois_competence_cinq_sous_competence_un_en = `Supervision`;
  portfolio_texte_un_competence_cinq_sous_competence_un_en = `Filtering and NAT`;
  portfolio_texte_deux_competence_cinq_sous_competence_un_en = `ACL management`;
  portfolio_texte_trois_competence_cinq_sous_competence_un_en = `Authority certification's creationg`;
  portfolio_texte_quatre_competence_cinq_sous_competence_un_en = `Authentication: implicit (SSL certificate) and explicit (captive portal: LDAP, Radius)`;
  portfolio_texte_cinq_competence_cinq_sous_competence_un_en = `Proxies HTTP/HTTPS`;
  portfolio_texte_six_competence_cinq_sous_competence_un_en = `IDS/IPS`;
  portfolio_texte_sept_competence_cinq_sous_competence_un_en = `Root-Me, TryHackMe`;
  portfolio_texte_huit_competence_cinq_sous_competence_un_en = `SNMP : MiB's supervision`;
  portfolio_texte_neuf_competence_cinq_sous_competence_un_en = `Zabbix : supervision`;
  portfolio_certif_titre_en = `Certifications`;
  portfolio_certif_sous_titre_un_en = `CCNAv7`;
  portfolio_certif_sous_titre_deux_en = `CCNAv7`;
  portfolio_certif_sous_titre_trois_en = `CCNAv7`;
  portfolio_certif_texte_un_en = `Introduction to Networks`;
  portfolio_certif_texte_deux_en = `Switching, Routing, Wireless Essentials`;
  portfolio_certif_texte_trois_en = `Enterprise-Networking-Security-Automation`;

  projetbut_titre_fr = `Mes projets effectués en BUT`;
  projetbut_presentation_un_fr = `La formation du BUT Réseaux et Télécommunications se dispense en 6 semestres. Pour obtenir le BUT,
    il faut acquérir 180 ECTS en validant toutes les UEs (Unité d'Enseignement). Les deux premiers semestres
    sont composés de 3 UEs tandis que les 4 semestres qui suivent ont, par choix de parcours, 5 UEs. Voici les 3 UEs
    communes à tous les parcours
    :`;
  projetbut_presentation_ue_un_fr = `UE1 : Administrer les réseaux et internet`;
  projetbut_presentation_ue_deux_fr = `UE2 : Connecter les entreprises et les usagers`;
  projetbut_presentation_ue_trois_fr = `UE3 : Créer des outils et applications informatiques pour les R&T`;
  projetbut_presentation_deux_fr = `Dès la
    deuxième année, nous avons eu la possibilité de choisir un parcours parmi les suivants :`;
  projetbut_cybersecurite_fr = `Cybersécurité`;
  projetbut_iot_fr = `Internet des Objets et Mobilité (IoM)`;
  projetbut_pilpro_fr = `Pilotage de Projet Réseaux (PilPro)`;
  projet_but_presentation_trois_fr = `Ces parcours rajoutent 2 UEs chacuns à chaque semestre. J'ai choisi le parcours Cybersécurité et les deux
    UEs spécifiques qui se rajoutent sont donc :`;
  projetbut_presentation_ue_quatre_fr = `UE4 : Surveiller`;
  projetbut_presentation_ue_cinq_fr = `UE5 : Sécuriser`;
  projetbut_presentation_quatre_fr = `Je vais donc vous présenter quelques SAEs que j'ai effectuées durant mes deux premières années de ma
    scolarité
    au BUT. Une SAE, Situation d'Evaluation et d'Apprentissage, est unprojet dont le sujet englobe l'ensemble des
    connaissances
    reçues par les ressources enseignées dans son UE. IL y a une SAE minimum par UE. Une SAE se déroule généralement sur
    une
    semaine mais la durée peut varier en fonction de l'intensité et de la difficulté du projet. Pour les SAEs de
    deuxième année,
    elles se sont toutes déroulées sur une semaine entière.`;
  projetbut_presentation_cinq_fr = `Pour préciser les modalités de réalisation de ces SAE, Elles se sont effectuées seules ou en groupe de 2,
    3, 4
    ou 5. Deux d'entre elles étaient spécialisées en cybersécurité`;
  projetbut_presentation_six_fr = `Utilisez le bouton ci-dessous pour explorer nos projets en fonction de leur UE (catégorie). Voici les
    catégories disponibles :`;
  projetbut_compteur_cyber_fr = `Cybersécurité: 2 projets`;
  projetbut_compteur_admin_fr = `Administration système et réseau : 2 projets`;
  projetbut_compteur_dev_fr = `Développement d'application : 1 projet`;
  projetbut_compteur_telecom_fr = `Télécommunication : 1 projet`;
  projetbut_compteur_gp_fr = `Gestion de projet : 1 projet`;
  projetbut_choix_spe_fr = `Choisissez une spécialité et découvrez les projets associés !`;
  projetbut_label_background_texte_fr = `Mes projets en :`;
  projetbut_choix_label_un_fr = `Administration système et réseau`;
  projetbut_choix_label_deux_fr = `Cybersécurité `;
  projetbut_choix_label_trois_fr = `Développement d'application`;
  projetbut_choix_label_quatre_fr = `Télécommunication`;
  projetbut_choix_label_cinq_fr = `Piloter un projet technique`;
  projetbut_titre_sae301_fr = `SAE301`;
  projetbut_description_sae301_fr = `Mettre en oeuvre un systèmes de transmission`;
  projetbut_titre_sae302_fr = `SAE302`;
  projetbut_description_sae302_fr = `Développer des applications communicantes`;
  projetbut_titre_sae303_fr = `SAE303`;
  projetbut_description_sae303_fr = `Concevoir un réseau multi-sites sécurisé`;
  projetbut_titre_sae501_fr = `SAE501`;
  projetbut_description_sae501_fr = `Concevoir une solution technique`;
  projetbut_titre_sae4_cyb_01_fr = `SAE4-Cyber-01`;
  projetbut_description_sae4_cyb_01_fr = `Sécuriser un système d'information`;
  projetbut_titre_sae5_cyb_03_fr = `SAE5-Cyber-03`;
  projetbut_description_sae5_cyb_03_fr = `Sécurisation et supervision avancée`;
  projetbut_titre_sae502_fr = `SAE502`;
  projetbut_description_sae502_fr = `Piloter un projet informatique`;
  //anglais 
  projetbut_titre_en = `Showcase of my projects`;
  projetbut_presentation_un_en = `The Bachelor of Science (BS) in Networks and Telecommunications programme is delivered over six semesters. To obtain this BS,
    students must acquire 180 ECTS credits by passing all teaching units (UEs). The first two semesters
    consist of three teaching units, while the following four semesters consist of five teaching units, depending on the course chosen. Here are the three teaching units
    common to all courses`;
  projetbut_presentation_ue_un_en = `UE1: Network and Systems Administration`;
  projetbut_presentation_ue_deux_en = `UE2: Connecting Companies and Users`;
  projetbut_presentation_ue_trois_en = `UE3: Web development and programming`;
  projetbut_presentation_deux_en = `From the second year onwards, we had the opportunity to choose a pathway among the following:`;
  projetbut_cybersecurite_en = `Cybersecurity`;
  projetbut_iot_en = `Internet of Things and Mobility (IoM)`;
  projetbut_pilpro_en = `Network Project Management (PilPro)`;
  projet_but_presentation_trois_en = `These pathways add 2 UEs each semester. I chose the Cybersecurity pathway, so the two additional specific UEs are:`;
  projetbut_presentation_ue_quatre_en = `UE4: Monitoring`;
  projetbut_presentation_ue_cinq_en = `UE5: Securing`;
  projetbut_presentation_quatre_en = `I will now present some SAEs that I completed during my first two years at BUT. A SAE, Evaluation and Learning Situation, is a project whose topic covers all the knowledge taught in its UE. There is at least one SAE per UE. A SAE usually lasts one week, but the duration may vary depending on the intensity and difficulty of the project. For second-year SAEs, all of them were conducted over a full week.`;
  projetbut_presentation_cinq_en = `To clarify the working conditions of these SAEs: they were carried out individually or in groups of 2, 3, 4, or 5. Two of them were specialised in cybersecurity.`;
  projetbut_presentation_six_en = `Use the button below to explore our projects according to their UE (category). The available categories are:`;
  projetbut_compteur_cyber_en = `Cybersecurity: 2 projects`;
  projetbut_compteur_admin_en = `System and Network Administration: 2 projects`;
  projetbut_compteur_dev_en = `Application Development: 1 project`;
  projetbut_compteur_telecom_en = `Telecommunications: 1 project`;
  projetbut_compteur_gp_en = `Project Management: 1 project`;
  projetbut_choix_spe_en = `Choose a specialisation and discover the associated projects!`;
  projetbut_label_background_texte_en = `My projects in:`;
  projetbut_choix_label_un_en = `System and Network Administration`;
  projetbut_choix_label_deux_en = `Cybersecurity`;
  projetbut_choix_label_trois_en = `Application Development`;
  projetbut_choix_label_quatre_en = `Telecommunications`;
  projetbut_choix_label_cinq_en = `Technical Project Management`;
  projetbut_titre_sae301_en = `SAE301`;
  projetbut_description_sae301_en = `Implementing a Transmission System`;
  projetbut_titre_sae302_en = `SAE302`;
  projetbut_description_sae302_en = `Developing Communicating Applications`;
  projetbut_titre_sae303_en = `SAE303`;
  projetbut_description_sae303_en = `Designing a Secure Multi-Site Network`;
  projetbut_titre_sae501_en = `SAE501`;
  projetbut_description_sae501_en = `Designing a Technical Solution`;
  projetbut_titre_sae4_cyb_01_en = `SAE4-Cyber-01`;
  projetbut_description_sae4_cyb_01_en = `Securing an Information System`;
  projetbut_titre_sae5_cyb_03_en = `SAE5-Cyber-03`;
  projetbut_description_sae5_cyb_03_en = `Advanced Security and Monitoring`;
  projetbut_titre_sae502_en = `SAE502`;
  projetbut_description_sae502_en = `Managing an IT Project`;

  sae301_presentation_fr = `Cette SAE concernait l'ensemble des étudiants en formation initiale et a été
            réalisée par groupe de 2 ou 3
            étudiants. Cette SAE était relié à l'UE "Connecter". J'ai été en binôme dans cette
            SAE. Ce projet se décomposait en plusieurs parties :`;
  sae301_p1_fr = `Partie 1: Plateforme d'apprentissage: Raspberry pi, machine virtuelle`;
  sae301_p2_fr = `Partie 2: Débit d'une source d'information`;
  sae301_p3_fr = `Partie 3: Systèmes d'analyse de débit (iperf, Munin)`;
  sae301_p4_a_fr = `Partie 4: Application: Transmission vidéo: Serveur vidéo à débit adaptatif DASH`;
  sae301_p4_b_fr = `Partie 4: Application: Transmission sécurisée: Serveur VPN Wireguard, OpenVPN`;
  sae301_p4_c_fr = `Partie 4: Application: Transmission multimédia: Serveur NAS OMV`;
  sae301_objectif_fr = ` Les objectifs de cette SAE étaient les suivants :`;
  sae301_obj1_fr = `Mesurer le débit d'une source d'information en utilisant différents outils et sur différents
                types de transmissions.`;
  sae301_obj2_fr = `Initier à la mise en place de services réseau en lien avec les transmissions
            `;
  sae301_obj3_fr = `Sensibiliser à la qualité de des transmissions`;
  sae301_obj4_fr = `faire des interprétations comme un technicien dans le domaine des Réseaux et Télécommunications.`;
  sae301_obj5_fr = `Développer notre autonomie`;
  sae301_presentation_matos_fr = `Le matériel utilisé au cours de cette SAE comprend :`;
  sae301_matos1_fr = `Un Raspberry Pi 4, doté de son alimentation, d'une carte micro-SD et d'un
                câble Ethernet pour la mise en réseau.`;
  sae301_matos2_fr = `Un PC de l'IUT équipé de VirtualBox, permettant d'exécuter des machines
                virtuelles.`;
  sae301_matos3_fr = `L'un de nos propres PC, utilisé en remplacement d'un ordinateur de l'IUT qui
                ne prenait pas en charge les machines virtuelles faisait l’hôte de l’autre VM
                nécessaire.`;
  sae301_presentation_infra_res_fr = `Voici l'infrastructure réseaux que nous avions mis en place`;
  sae301_presentation_tache_fr = `Afin d'être efficace et de ne pas perdre de temps dans la réalisation du projet,
            nous nous sommes répartit les tâches et j'ai été assignés aux tâches suivantes : Partie 3 : Systèmes
            d'analyse de débit (Iperf, Munin). J'ai également réalisé la partie 4 dédié au Serveur vidéo à
            débit adaptatif DASH et au Serveur VPN Wireguard et OpenVPN `;
  sae301_etape1_fr = `La première étape consistait à mettre en place l'infrastructure réseau évoquée
            précédemment
            ainsi que de rassembler des données sur les composants du Raspberry Pi tels que la carte réseau, le
            type du Rapsberry pi, le débit des informations... Cette partie a été réalisée par mon binôme.`;
  sae301_etape2_fr = `Une fois les deux première parties réalisées par mon camarade, j'ai réalisé la partie 3 :
            Système d'analyse de débit.`;
  sae301_partie3_titre_fr = `Partie 3 : Système d'analyse de débit : Munin`;
  sae301_partie3_obj1_fr = ` Le but de cette partie était d'utiliser le logiciel Munin afin de relever le débit des cartes
            réseaux.`;
  sae301_partie3_obj2_fr = `Munin est un système complet de monitoring (ou métrologie) de machine. Il permet
            de générer une série de graphes à partir des informations envoyées par les autres
            machines : utilisation de la mémoire vive, « load average », utilisation du processeur,
            réeaux...`;
  sae301_partie3_obj3_fr = `Une fois l'installation et la configuration réalisé, nous avons pu voir que le logiciel
            était
            fonctionnel et relevait le trafic sur la carte réseau du Raspberry-pi distant. `;
  sae301_partie3_obj4_fr = `Voici la page
            web
            de Munin où nous avons pu relever le trafic passant par la carte réseau du Raspberry Pi`;
  sae301_prblm1_fr = `Un des problèmes que nous avons rencontré lors de l'installation de cet outil est
            l'intervalle de mise à jour des graphique qui était de 5 minutes. Afin de réduire ce temps, nous
            avons utilisé Fast Common Gateway Interface (FCGI) afin de mettre les données à jour en temps et en
            heure.`;
  sae301_deuxieme_partie_fr = `La deuxième partie que j'ai réalisé dans cette SAE fut la partie 4 : `;
  sae301_partie4_a_titre_fr = `Partie 4 : Application a une transmission
            multimédia :
            Serveur DASH`;
  sae301_partie4_a_obj1_fr = `Dans cette partie, l’objectif était de produire un résultat similaire à YouTube à propos du
            changement de résolution : lorsqu’on clique sur YouTube sur la résolution a 720p, la
            qualité vidéo change et la fluidité de celle-ci également. Nous nous sommes basé sur
            notre VM déjà installée avec 4 processeurs.`;
  sae301_partie4_a_obj2_fr = `Afin de réaliser ceci, nous avons téléchargé 2
            vidéos Youtube en 1080p. Puis, nous
            avons utilisé l’utilitaire ffmpeg afin de segmenter ces vidéos en différents segment de
            différentes qualités chacun afin de pouvoir la changer plus tard.`;
  sae301_partie4_a_obj3_fr = `ffmpeg est une collection
            de logiciels
            libres destinés au traitement de flux audio ou vidéo. Cette bibliothèque est utilisée par de
            nombreux autres logiciels ou services comme VLC, iTunes ou YouTube `;
  sae301_partie4_a_obj4_fr = `Après avoir fragmenté la vidéo en trois résolutions différentes, nous avons utilisé l’utilitaire
            MP4Box pour créer des segments adaptés à chaque résolution. Ainsi, la vidéo peut s'ajuster
            automatiquement à la résolution la plus appropriée en fonction du débit disponible sur l’appareil de
            l'utilisateur, assurant une lecture optimisée et sans interruption.`;
  sae301_partie4_b_titre_fr = `Partie 4 : Application a une transmission
            sécurisé :
            Serveur VPN`;
  sae301_partie4_b_pres_fr = `Dans cette partie, j'ai eu la charge de mettre en place un tunnel VPN. Le principe
            d'un tunnel VPN
            est d'encapsuler des données puis de les chiffrer pour empêcher des personnes externes
            d'accéder aux échanges. Je n'ai mis en place qu'un seul serveur VPN : Wireguard, et
            j'ai commencé à configurer un deuxième serveur VPN, OpenVPN. Cependant celui-ci na pas fonctionné,
            surement dû à des erreurs de configurations. Le temps impartis au projet étant écoulé, je n'ai pas
            eu le temps de modifier la configuration pour que celui-ci soit fonctionnel. On peut voir dans la
            capture wireshark suivante que le ping passe à travers l'interface du VPN wireguard nouvellement
            créée.`;
  sae301_titre_retex_fr = `Ce que j'ai appris durant ce projet`;
  sae301_retex1_fr = `Comment mettre en place la résolution automatique des vidéos`;
  sae301_retex2_fr = `Comment mettre en oeuvre un VPN`;
  sae301_retex3_fr = `Renforcer mon aptitude à travailler en équipe`;
  sae301_retex4_fr = `Résoudre des problèmes en totale autonomie tout en étant sous pression`;
  sae301_lien_github_fr = `Pour en savoir plus sur ce projet, n'hésitez pas à jeter un &oelig;il à notre
            rapport :`;

  sae301_presentation_en = `This SAE involved all students in initial training and was carried out in groups of two or three students. This SAE was linked to the Connect companies and users's UE. I worked in pairs on this SAE. The project was divided into several parts:`;
  sae301_p1_en = `Part 1: Learning platform: Raspberry Pi, virtual machine`;
  sae301_p2_en = `Part 2: Information source throughput`;
  sae301_p3_en = `Part 3: Throughput analysis systems (iperf, Munin)`;
  sae301_p4_a_en = `Part 4: Application: Video transmission: DASH adaptive bitrate video server`;
  sae301_p4_b_en = `Part 4: Application: Secure transmission: Wireguard VPN server, OpenVPN`;
  sae301_p4_c_en = `Part 4: Application: Multimedia transmission: OMV NAS server`;
  sae301_objectif_en = `The objectives of this SAE were as follows:`;
  sae301_obj1_en = `Measure the throughput of an information source using different tools and different types of transmission.`;
  sae301_obj2_en = `Introduce the implementation of network services related to transmission.`;
  sae301_obj3_en = `Raise awareness of transmission quality.`;
  sae301_obj4_en = `Make interpretations like a technician in the field of Networks and Telecommunications.`;
  sae301_obj5_en = `Develop our autonomy.`;
  sae301_presentation_matos_en = `The equipment used during this SAE included:`;
  sae301_matos1_en = `A Raspberry Pi 4, equipped with its power supply, a micro-SD card and an Ethernet cable for networking.`;
  sae301_matos2_en = `An IUT PC equipped with VirtualBox, allowing virtual machines to be run.`;
  sae301_matos3_en = `One of our own PCs, used as a replacement for an IUT computer that did not support virtual machines, hosted the other necessary VM.`;
  sae301_presentation_infra_res_en = `Here is the network infrastructure we had set up.

`;
  sae301_presentation_tache_en = `In order to be efficient and not waste time in carrying out the project, we divided up the tasks and I was assigned the following tasks: Part 3: Flow analysis systems (Iperf, Munin). I also completed Part 4, dedicated to the DASH adaptive bitrate video server and the Wireguard and OpenVPN VPN server.
`;
  sae301_etape1_en = `The first step was to set up the network infrastructure mentioned above and gather data on the Raspberry Pi components, such as the network card, the type of Raspberry Pi, the data flow, etc. This part was completed by my partner.`;
  sae301_etape2_en = `Once my partner had completed the first two parts, I worked on part 3: the flow analysis system.`;
  sae301_partie3_titre_en = `Part 3: Flow analysis system: Munin`;
  sae301_partie3_obj1_en = `The aim of this part was to use Munin software to measure the flow of the network cards.`;
  sae301_partie3_obj2_en = `Munin is a comprehensive machine monitoring (or metrology) system. It generates a series of graphs based on information sent by other machines: RAM usage, load average, CPU usage, networks, etc.`;
  sae301_partie3_obj3_en = `Once installation and configuration were complete, we were able to see that the software was functional and was recording traffic on the remote Raspberry Pi's network card.`;
  sae301_partie3_obj4_en = `Here is the Munin web page where we were able to record the traffic passing through the Raspberry Pi's network card.`;
  sae301_prblm1_en = `One of the problems we encountered when installing this tool was the graph update interval, which was 5 minutes. In order to reduce this time, we used Fast Common Gateway Interface (FCGI) to update the data in real time.`;
  sae301_deuxieme_partie_en = `The second part I completed in this SAE was part 4:`;
  sae301_partie4_a_titre_en = `Part 4: Multimedia transmission application: DASH server`;
  sae301_partie4_a_obj1_en = `In this part, the objective was to produce a result similar to YouTube in terms of resolution change: when you click on YouTube at 720p resolution, the video quality changes and so does its fluidity. We based our work on our already installed VM with 4 processors.`;
  sae301_partie4_a_obj2_en = `To achieve this, we downloaded two YouTube videos in 1080p. Then, we used the ffmpeg utility to segment these videos into different segments of different qualities so that we could change them later.`;
  sae301_partie4_a_obj3_en = `ffmpeg is a collection of free software for processing audio or video streams. This library is used by many other software programmes and services such as VLC, iTunes and YouTube.`;
  sae301_partie4_a_obj4_en = `After splitting the video into three different resolutions, we used the MP4Box utility to create segments adapted to each resolution. This allows the video to automatically adjust to the most appropriate resolution based on the available bandwidth on the user's device, ensuring optimised, uninterrupted playback.`;
  sae301_partie4_b_titre_en = `Part 4: Secure transmission application: VPN server`;
  sae301_partie4_b_pres_en = `In this part, I was responsible for setting up a VPN tunnel. The principle of a VPN tunnel is to encapsulate data and then encrypt it to prevent external parties from accessing the exchanges. I set up only one VPN server: Wireguard, and I started to configure a second VPN server, OpenVPN. However, this did not work, probably due to configuration errors. As the time allocated to the project had run out, I did not have time to modify the configuration to make it functional. The following Wireshark capture shows that the ping passes through the newly created Wireguard VPN interface.
`;
  sae301_titre_retex_en = `What I learned during this project`;
  sae301_retex1_en = `How to set up automatic video resolution`;
  sae301_retex2_en = `How to implement a VPN`;
  sae301_retex3_en = `Strengthening my ability to work in a team`;
  sae301_retex4_en = `Solving problems independently while under pressure`;
  sae301_lien_github_en = `To learn more about this project, feel free to take a look at our report: (French only, the report has not been translated yet)`;

  //sae302


  sae302_presentation_fr = `Cette SAE concernait l'ensemble des étudiants en formation initiale et a été
            réalisée par groupe de 3
            étudiants. La SAE 302 « Développer des applications communicantes » à débuté le
            lundi 11 décembre 2023 et s’est terminé le 15 décembre 2023.L'objectif de se projet est le suivant :`;
  sae302_objectif_fr = `Créer une application de type "réseau social" en java utilisant des fonctions de communication
                pour créer un protocole applicatif au dessus de la pile TCP/IP`;
  sae302_def_fonct_fr = `Pour réaliser ce projet, nous avons commencé par définir les différentes
            fonctionnalités que notre application devrait avoir :`;
  sae302_fonct1_fr = `Inscription`;
  sae302_fonct2_fr = `Connexion`;
  sae302_fonct3_fr = `Demande d'amis`;
  sae302_fonct4_fr = `Envois de message en temps réel`;
  sae302_contrainte_fr = `Il y avait également des contraintes à respecter : `;
  sae302_cont1_fr = `100 utilisateurs maximum`;
  sae302_cont2_fr = `10 amis par utilisateur`;
  sae302_cont3_fr = `les messages sont stockés en RAM`;
  sae302_tache_fr = `Nous avons ensuite définis les différentes tâches entre les membres du groupe et
            j'ai ainsi
            principalement réalisé les tâches
            suivantes : `;
  sae302_tache1_fr = `Conception de l'architecture`;
  sae302_tache2_fr = `Requête inscription`;
  sae302_tache3_fr = `Requête connexion`;
  sae302_matache_fr = `J'ai eu la tâche de définir l'architecture réseau que nous avons mis en place et
            l'architecture de l'application au niveau de la pile TCP/IP. J'ai ainsi choisi d'utiliser le
            protocole de communication UDP entre le serveur et le client pour plusieurs raisons : `;
  sae302_raison1_fr = `simplicité de la syntaxe`;
  sae302_raison2_fr = `rapidité de l'envoi et de la réception des sockets.`;
  sae302_archi_fr = `Notre application (client et serveur) étant stocké sur un seul ordinateur, nous
            avons fait le choix de l'architecture suivante :`;
  sae302_video_fr = `Nous avons également réalisé une vidéo de démonstration de l'application : `;
  sae302_titre_retex_fr = `Ce que j'ai appris durant ce projet`;
  sae302_retex1_fr = `Utilisation du protocole UDP dans un cas concret`;
  sae302_retex2_fr = `Création d'une application sous java`;
  sae302_retex3_fr = `Renforcer mon aptitude à travailler en équipe`;
  sae302_retex4_fr = `être rigoureux dans le codage d'une application`;
  sae302_retex5_fr = `Résoudre des problèmes en totale autonomie tout en étant sous pression `;
  sae302_lien_github_fr = `Pour en savoir plus sur ce projet, n'hésitez pas à jeter un &oelig;il à notre
            rapport : `;


  sae302_presentation_en = `This SAE concerned all students in initial training and was carried out in groups of three students. SAE 302, ‘Developing Communication Applications,’ began on Monday, 11 December 2023, and ended on 15 December 2023. The objective of this project is as follows:`;
  sae302_objectif_en = `Create a ‘social network’ application in Java using communication functions to create an application protocol on top of the TCP/IP stack.`;
  sae302_def_fonct_en = `To carry out this project, we began by defining the various features that our application should have:`;
  sae302_fonct1_en = `Registration`;
  sae302_fonct2_en = `Login`;
  sae302_fonct3_en = `Friend request`;
  sae302_fonct4_en = `Live chat`;
  sae302_contrainte_en = `There were also some constraints to respect`;
  sae302_cont1_en = `100 maximum users`;
  sae302_cont2_en = `10 friends per user`;
  sae302_cont3_en = `Messages are stored in the RAM`;
  sae302_tache_en = `We then divided the various tasks among the group members, and I mainly carried out the following tasks:`;
  sae302_tache1_en = `Architecture's conception`;
  sae302_tache2_en = `Registration's request`;
  sae302_tache3_en = `Login's request`;
  sae302_matache_en = `I was tasked with defining the network architecture we implemented and the application architecture at the TCP/IP stack level. I chose to use the UDP communication protocol between the server and the client for several reasons:`;
  sae302_raison1_en = `Simplicity of syntax`;
  sae302_raison2_en = `Speed of sending and receiving sockets`;
  sae302_archi_en = `As our application (client and server) is stored on a single computer, we have opted for the following architecture:`;
  sae302_video_en = `We have also produced a video demonstration of the application:`;
  sae302_titre_retex_en = `What i learned during this project`;
  sae302_retex1_en = `Using the UDP protocol in a specific case`;
  sae302_retex2_en = `Creating an application in Java`;
  sae302_retex3_en = `Strengthen my ability to work in a team`;
  sae302_retex4_en = `be rigorous in coding an application`;
  sae302_retex5_en = `Solve problems independently while under pressure`;
  sae302_lien_github_en = `To learn more about this project, feel free to take a look at our report: (French only, the report has not been translated yet)`;


}
