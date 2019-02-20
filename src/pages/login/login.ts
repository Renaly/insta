import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private afAuth: AngularFireAuth) {
  }
  


  loginIns(user: User) {

    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(data => {
      console.log('Bem Vindo', data);
      this.navCtrl.push(TabsPage);
    });
  }
  catch (e) {
    console.error(e);
  }
  
  goCadastro() {
    this.navCtrl.push(CadastroPrincipalPage)
  }
  goAjuda() {
    // this.navCtrl.push(central-de-ajuda)
  }

}
