import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-tiktaktoe',
    imports: [
        MatButtonModule,
    ],
    templateUrl: './tiktaktoe.component.html',
    styleUrl: './tiktaktoe.component.css'
})
export class TiktaktoeComponent {
    turnCross = false;
    finished = false;
    message = "";
    turnNumber = 0;

    check(zone: number, element: HTMLDivElement) {
        // vérif les paramètres
        if (zone < 0 || zone >= 9 || !element) return;
        // ne check pas si finis
        if (this.finished) return;
        // récupère la case
        const CaseClick = element.children[zone];
        // vérifie que la case n'est pas déjà pleine
        if (CaseClick.classList.contains("cross") || CaseClick.classList.contains("circle")) return;
        // ajoute la classe correspondante
        CaseClick.classList.add(this.turnCross ? "cross" : "circle");
        // change de tour
        this.turnCross = !this.turnCross;
        // compte les tours
        this.turnNumber++;
        // vérifie si il y a un gagnant, ou égalité, ou rien
        this.checkWin(element);
    }

    checkWin(element: HTMLDivElement) {
        // vérif les paramètres
        if (!element) return;
        const Cases = element.children;
        if (Cases.length != 9) return;
        // pas besoin de regarder si il y a moins de 5 tours
        if (this.turnNumber < 5) return;

        // regarde les lignes
        for (let y = 0; y < 3; y++) {
            if (Cases[y * 3].classList.value === Cases[y * 3 + 1].classList.value && Cases[y * 3].classList.value == Cases[y * 3 + 2].classList.value) {
                this.winnerSet(Cases[y * 3].classList.value);
            }
        }

        // regarde les colones
        for (let x = 0; x < 3; x++) {
            if (Cases[x].classList.value === Cases[x + 3].classList.value && Cases[x].classList.value == Cases[x + 6].classList.value) {
                this.winnerSet(Cases[x].classList.value);
            }
        }

        // les diagonales
        if (
            (Cases[0].classList.value === Cases[4].classList.value && Cases[0].classList.value == Cases[8].classList.value) ||
            (Cases[2].classList.value === Cases[4].classList.value && Cases[2].classList.value == Cases[6].classList.value)
        ) {
            this.winnerSet(Cases[4].classList.value);
        }

        // égalité si nombre de tour atteint
        if (this.turnNumber == 9 && !this.finished) {
            this.winnerSet("draw");
        }
    }

    reset() {
        // récupère la grille
        const grid = document.getElementById("grid");
        if (!grid) return;
        // remet le jeux à 0
        for (let i = 0; i < grid.children.length; i++) {
            grid.children[i].classList.value = "";
        }
        this.turnNumber = 0;
        this.turnCross = false;
        this.finished = false;
        this.message = "";
    }

    winnerSet(winner: string) {
        // ignore les cases non valides
        if (winner != "cross" && winner != "circle" && winner != "draw") return;
        console.log(`Winner is ${winner}`);
        this.finished = true;

        switch (winner) {
            case "circle":
                this.message = "Les gagnants sont les cercles!";
                break;
            case "cross":
                this.message = "Les gagnants sont les croix!";
                break;
            case "draw":
                this.message = "Il n'y a pas de gagnant!";
                break;
        }
    }
}
