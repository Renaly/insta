import { Component } from '@angular/core';
import { ViewController, ToastController } from 'ionic-angular';

@Component({
    template: `
    <ion-list>
        <button ion-item (click)="close()">Relatorio</button>
        <button ion-item (click)="close()">Copiar Compartilhar Url</button>
        <button ion-item (click)="close()">Ativar notificações de postagem</button>
        <button ion-item (click)="close()">Compartilhar no Messenger</button>
    </ion-list>
    `
})
export class PostarPopover{
    constructor(public viewCtrl: ViewController, public toastCtrl: ToastController){}

    close(){
        this.present();
        this.viewCtrl.dismiss();
    }

    present(){
        let tost = this.toastCtrl.create({
            message: 'Notificação',
            duration: 2000
        });
    }
}