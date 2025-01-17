import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { AccueilComponent } from "../accueil/accueil.component";
import { MatMenuModule } from '@angular/material/menu';
import { Power4Component } from './games/power4/power4.component';
import { SnakeComponent } from './games/snake/snake.component';
import { TiktaktoeComponent } from './games/tiktaktoe/tiktaktoe.component';
import { DeminerComponent } from './games/deminer/deminer.component';


type MiniGameType = "Morpion" | "Snake" | "Puissance 4" | "Démineur" | "Aucun";

@Component({
    selector: 'app-notfound',
    imports: [CommonModule, MatTooltipModule, MatButtonModule,
        // AccueilComponent,
        MatMenuModule,
        Power4Component, SnakeComponent, TiktaktoeComponent,
        DeminerComponent,
    ],
    templateUrl: './notfound.component.html',
    styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
    bgImgUrl = "./assets/img/grdrouage.png";
    bgImgUrl2 = "./assets/img/rouage.png";
    bgImgUrl3 = "./assets/img/bg4.jpg";

    makeImgUrl(str: string): string {
        return "url('" + str + "')"
    }

    directory = window.location.pathname.split("/").pop()?.trim();

    miniGameListe: MiniGameType[] = ["Morpion", /* "Snake", "Puissance 4", */ "Aucun", 'Démineur'];
    miniGameChosen: MiniGameType = "Aucun";
}
