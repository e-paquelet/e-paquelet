import { Injectable, signal } from '@angular/core';

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

  constructor() {
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
    this.translation_fr.set("ACCUEIL-FORMATION_SUB_TEXTE", `Apprenti en première année en
            formation Ingénieur Informatique et Réseaux à l'IMT Mines Alès.`);
    this.translation_en.set("ACCUEIL-FORMATION_SUB_TEXTE", `First year apprentice studying 
              computer science and networks at IMT Mines Alès`)
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
      this.translation_en.set("HEADER2-RS", "My social media"),
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
}
