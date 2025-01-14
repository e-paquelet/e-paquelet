import { Component, isDevMode, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

enum BoardCaseType {
    Bomb = -1,
    Empty,
    Num1,
    Num2,
    Num3,
    Num4,
    Num5,
    Num6,
    Num7,
    Num8,
}

@Component({
    selector: 'app-deminer',
    imports: [
        MatRadioModule,
        MatButtonModule,
    ],
    templateUrl: './deminer.component.html',
    styleUrl: './deminer.component.css'
})
export class DeminerComponent implements OnInit {
    // correspond à un plateau de 10 * difficulte +1
    difficulte: 1 | 2 | 3 = 1;
    // -1 est une bombe, 0 est empty, 1 à 8 est numN
    board: number[] = [];
    revele: number[] = [];
    bombs: number[] = [];
    end = false;
    message = "";
    caseHidden = 0;

    readonly isMobile = (navigator as any).userAgentData.mobile;

    ngOnInit(): void {
        // construit le jeux au démarage
        this.buildGame();
    }

    changeDifficulte(num: 1 | 2 | 3) {
        // change la difficulté
        this.difficulte = num;
        // remet la partie à 0
        this.resetGame();
    }

    buildGame() {
        // récupère le plateau
        const Plateau = document.getElementById("game");
        if (!Plateau) return;
        // ajoute les cases
        const largeur = (10 * this.difficulte + 1);
        for (let i = 0; i < largeur * largeur; i++) {
            // ajoute les cases du plateau en mémoire
            this.board.push(0);

            // crée l'html
            const div = document.createElement("div");
            div.classList.add("hidden", "case");
            // ajout les écoutes d'événemetns
            div.addEventListener("click", (ev) => {
                this.reveleCase(ev, div, i);
            });

            // TODO trouver un moyen pour flag sur téléphone (maintient?)
            div.addEventListener("contextmenu", (ev) => {
                this.flagCase(ev, div, i);
            });

            Plateau.appendChild(div);
        }

        // ajoute la bonne classe au plateau
        Plateau.classList.remove("large", "medium", "small");
        switch (this.difficulte) {
            case 1:
                Plateau.classList.add("small");
                break;
            case 2:
                Plateau.classList.add("medium");
                break;
            case 3:
                Plateau.classList.add("large");
                break;
        }

        // ajoute un nombre de bombes selon la difficulté plus un nombre aléatoire qui est lié à la difficulté aussi
        let bombAPlace = Math.floor(this.difficulte * this.difficulte * 10 + Math.random() * this.difficulte * this.difficulte * 3);
        const centre = Math.floor(largeur * largeur / 2);
        // boucle pour les ajoutés alléatoirement dans le tableau
        while (bombAPlace > 0) {
            // position aléatoir dans le plateau
            const bombPosition = Math.floor(Math.random() * largeur * largeur);
            // on vérifie qu'il ne peut pas y en avoir sur les neuf cases centrale (le centre doit être de type vide)
            if (
                ![
                    centre, centre + 1, centre - 1,
                    centre - largeur, centre - largeur + 1, centre - largeur - 1,
                    centre + largeur, centre + largeur + 1, centre + largeur - 1,
                ].includes(bombPosition) &&
                this.board[bombPosition] != BoardCaseType.Bomb
            ) {
                this.board[bombPosition] = BoardCaseType.Bomb;
                this.bombs.push(bombPosition);
                bombAPlace--;
            }
        }

        // ajoute le nombre de case à découvrir
        this.caseHidden = largeur * largeur - this.bombs.length;

        // ajoute les nombres autour des bombes
        this.bombs.forEach(i => {
            this.checkAroundBomb(i);
        })
        this.prettyLogBoard();
    }

    checkAroundBomb(numero: number) {
        const largeur = (10 * this.difficulte + 1);
        // vérif des paramètres
        if (numero < 0 || numero > largeur * largeur) throw new Error(`Invalid index: ${numero}`);
        // on récupère la colonne et la ligne de la case pour les contours
        const col = numero % largeur;
        const row = Math.floor(numero / largeur);
        let added = false;

        // on vérifie à chaque fois où l'on fait +1 que la case n'est pas une bombe
        if (col != 0 && !this.CHB(numero - 1)) {
            this.board[numero - 1] += 1;
            added = true;
        }
        if (col != largeur - 1 && !this.CHB(numero + 1)) {
            this.board[numero + 1] += 1;
            added = true;
        }

        if (row != 0 && !this.CHB(numero - largeur)) {
            this.board[numero - largeur] += 1;
            added = true;
        }
        if (row != largeur - 1 && !this.CHB(numero + largeur)) {
            this.board[numero + largeur] += 1;
            added = true;
        }

        if (col != 0 && row != 0 && !this.CHB(numero - largeur - 1)) {
            this.board[numero - largeur - 1] += 1;
            added = true;
        }
        if (col != 0 && row != largeur - 1 && !this.CHB(numero + largeur - 1)) {
            this.board[numero + largeur - 1] += 1;
            added = true;
        }

        if (col != largeur - 1 && row != 0 && !this.CHB(numero - largeur + 1)) {
            this.board[numero - largeur + 1] += 1;
            added = true;
        }
        if (col != largeur - 1 && row != largeur - 1 && !this.CHB(numero + largeur + 1)) {
            this.board[numero + largeur + 1] += 1;
            added = true;
        }

        if (!added) {
            console.error("Not added: " + row + ":" + col);
        }
    }

    // case has bomb
    CHB(numero: number) {
        return (this.board[numero] == BoardCaseType.Bomb ? 1 : 0)
    }

    prettyLogBoard() {
        // on n'affiche pas la carte si on est pas en mode développement
        if (!isDevMode()) return;

        const largeur = (10 * this.difficulte + 1);
        let r = "";
        for (let i = 0; i < largeur; i++) {
            let s = "";
            for (let j = 0; j < largeur; j++) {
                s += this.board[i * largeur + j] + (this.board[i * largeur + j] == -1 ? "," : " ,");
            }
            r += s + "\n";
        }
        console.log(r);
    }

    resetGame() {
        // récupère le plateau
        const Plateau = document.getElementById("game");
        if (!Plateau) return;
        // enlève tout les enfants
        Plateau.replaceChildren();

        // remetes les variables à 0
        this.board = [];
        this.revele = [];
        this.bombs = [];
        this.end = false;
        this.message = "";
        this.caseHidden = 0;

        this.buildGame();
    }

    bombEndGame() {
        // récupère le plateau
        const Plateau = document.getElementById("game");
        if (!Plateau) return;
        // révèle toute les bombes
        this.bombs.forEach(i => {
            const block = Plateau.children[i];
            if (!block) return;
            block.classList.remove("hidden", "empty");
            block.classList.add("bomb");
        });

        this.message = "Vous avez déclenché une mine! Perdu!";
        this.end = true;
    }

    endGame() {
        this.message = "Vous avez gagné!";
        this.end = true;
        // TODO ajouté dans un cookie pour garder les scores/temps?
        // TODO faire un timer pour avoir le temps?
        // TODO faire un compteur de score?
    }

    reveleCase(ev: MouseEvent, block: HTMLDivElement, numero: number) {
        // arrete si la case n'est pas caché, ou le jeu à pris fin
        if (!block.classList.contains("hidden") || this.end) return;
        block.classList.remove("hidden", "flag");

        switch (this.board[numero]) {
            case BoardCaseType.Bomb:
                block.classList.add("bomb");
                console.log("bomb");
                this.bombEndGame();
                return;
            case BoardCaseType.Empty:
                block.classList.add("empty");
                //  révèle la case selon celles autour
                this.cascade(numero);
                this.caseHidden++;
                break;
            default:
                block.classList.add("num" + this.board[numero]);
                break;
        }
        // if (this.bombs.includes(numero)) {
        //     // BUG des fois, sans cette condition, les bombes disparaisse de la grille
        //     console.log("Should contain bomb");
        //     block.classList.remove("empty");
        //     block.classList.add("bomb");
        //     this.bombEndGame();
        //     return;
        // }

        this.caseHidden--;
        console.log(this.caseHidden);
        if (this.caseHidden <= 0) {
            this.endGame()
        }
    }

    // vas réveler tout les cases autours des cases vides
    // base pour empecher de tourner en boucle
    cascade(numero: number, base = 1000) {
        // si la case est une bombe, u que base atteint, ou que case deja révélée, on arrete tout de suite
        if (this.CHB(numero) || base <= 0 || this.revele.includes(numero)) return;

        // on récupère l'élément
        const board = document.getElementById("game");
        if (!board) return;
        const block = board.children[numero];
        if (!block) return;

        // on révele la case
        block.classList.remove("hidden", "flag");
        this.caseHidden--;
        this.revele.push(numero);
        // met la bonne classe selon la case
        switch (this.board[numero]) {
            case BoardCaseType.Bomb:
                return;
            case 0:
                block.classList.add("empty");
                this.cascade(numero, 100);
                break;

            default:
                block.classList.add("num" + this.board[numero]);
                break;
        }

        // si la case est pas vide, fin
        if (this.board[numero] != BoardCaseType.Empty) return;

        // on vérifie les cotés et on continu
        const largeur = (10 * this.difficulte + 1);
        const col = numero % largeur;
        const row = Math.floor(numero / largeur);
        // console.log(row + ":" + col + " with: " + base);

        if (col != 0) {
            this.cascade(numero - 1, --base);
        }
        if (row != 0) {
            this.cascade(numero - largeur, --base);
        }
        if (col != 0 && row != 0) {
            this.cascade(numero - largeur - 1, --base);
        }
        if (col != 0 && row != largeur - 1) {
            this.cascade(numero + largeur - 1, --base);
        }

        if (col != largeur - 1) {
            this.cascade(numero + 1, --base);
        }
        if (row != largeur - 1) {
            this.cascade(numero + largeur, --base);
        }
        if (col != largeur - 1 && row != 0) {
            this.cascade(numero - largeur + 1, --base);
        }
        if (col != largeur - 1 && row != largeur - 1) {
            this.cascade(numero + largeur + 1, --base);
        }
    }

    flagCase(ev: MouseEvent, block: HTMLDivElement, numero: number) {
        // ne fait rien si le jeu à pris fin
        if (this.end) return;
        // annule le menu de s'afficher
        ev.preventDefault();
        // arrete si la case n'est pas caché
        if (!block.classList.contains("hidden")) return;
        // ajoute ou eneleve le flag
        if (block.classList.contains("flag")) {
            block.classList.remove("flag");
        } else {
            block.classList.add("flag");
        }
    }
}
