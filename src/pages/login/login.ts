import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { CadastroPrincipalPage } from '../cadastro-principal/cadastro-principal';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public alertCtrl: AlertController) {
  }
  


  loginIns(user: User) {
    //Assincronamente faz login usando um email e uma senha.
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
      this.navCtrl.push(TabsPage);
      
    })
    .catch((error) => {
      this.presentAlert();
      console.log('Error', error);
    })
  }
  
  
  goCadastro() {
    this.navCtrl.push(CadastroPrincipalPage)
  }
  goAjuda() {
    // this.navCtrl.push(central-de-ajuda)
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Usuário',
      subTitle: 'Usuário não cadastrado',
      buttons: ['OK']
    });
    alert.present();
  }

}
