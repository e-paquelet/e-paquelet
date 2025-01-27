import { Component, Inject, Type } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { NgComponentOutlet, NgStyle } from '@angular/common';


export type DialogDataType = {
    // btnOk?: string;
    btnNotOk?: string; //Message du bouton annuler/refuser
    title?: string; //titre
    text?: string; //texte
    component?: Type<any>; //composant
    // warn?: boolean;
    data?: any; //tout type de données
    note?: string;
    tag1?: string;
    tag2?: string;
    tag3?: string;
    tag4?: string;
};

@Component({
    selector: 'app-dialog',
    imports: [
        MatDialogModule, //faire fonctionner le dialog
        NgComponentOutlet, //permettre l'affichage d'un composant dans un autre composant car on peut pas afficher un composant sans ca
        MatButton,
    ],
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.css'
})
export class DialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DialogDataType, //passer des paramètres plus complexe 
        private dialogRef: MatDialogRef<DialogComponent, any> //le composant qui permet d'envoyer les signaux : fermer/ouvrir
    ) {
        if (!data) data = {}; //si pas d'objet data, data vide
        // if (!data.btnNotOk) data.btnNotOk = "Fermer";
        if (!data.title) data.title = "Dialog"; //si il y a pas de titre a data, le titre = Dialog
    }

    output: any = undefined; //la chimère des données que peut renvoyer le composant dans le data. Si il y a des retours, ca sera dans output

    getOuput(o: any) { //afficher le retour du composant si il y en a
        this.output = o;
    }

    validate() { //gère lorsque je ferme le dialog
        if (this.output == undefined) {
            this.dialogRef.close(0); //on ferme avec 0 = équivalent de false
        } else {
            this.dialogRef.close(this.output); // renvoi les données du composants
        }
    }
}
