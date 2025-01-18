import { DialogRef } from '@angular/cdk/dialog';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export type DialogDataType = {

  titre: String;
  headerpicture: String;
  frontpicture: String;
  texte: String;
  }

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor (
    @Inject(MAT_DIALOG_DATA) public data: DialogDataType,
    private dialogref:DialogRef,
  ){
    if (!data) {
      data = {
        titre:"titre",
        headerpicture: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        frontpicture: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        texte: "texte",
      };
    }
  }
}
