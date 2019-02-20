import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Button } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  formulario: FormGroup;

  user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private fb: FormBuilder, public alertCtrl: AlertController) {
    this.formulario = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]]
    });
  }



  login() {
    this.navCtrl.push(LoginPage);
  }

  goCadastrar() {

    this.afAuth.auth.createUserWithEmailAndPassword(
      //Cria uma nova conta de usuário associada ao endereço de e-mail e senha especificados.
      this.formulario.value.email, this.formulario.value.password)
      .then(() => {
        this.navCtrl.push(LoginPage);
      })
      .catch((error) => {
        this.presentAlert();
        console.log('Deu erro!', error);
      })
  }

  validaCampo(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  //validação do campo caso não seja digitado nada
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Usuário',
      subTitle: 'Usuário já cadastrado',
      buttons: ['OK']
    });
    alert.present();
  }

}
