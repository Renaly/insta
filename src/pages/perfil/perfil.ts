import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PostPage } from '../post/post';
import { EdtPerfilPage } from '../edt-perfil/edt-perfil';
import { PerfilMarcadoPage } from '../perfil-marcado/perfil-marcado';
import { OpcaoPerfilPage } from '../opcao-perfil/opcao-perfil';
import { PerfilSalvoPage } from '../perfil-salvo/perfil-salvo';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public segmento_de_perfil: string;

  public imagens = [
    {
      id: 1,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/f243dc0dc4be3db69dcfe367820e9109/5CF32C3E/t51.2885-15/e35/20766535_109369893111048_1987360657250451456_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 2,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/23eceae3dbbc935eb0a9c7a834e9e61e/5CDE86C1/t51.2885-15/sh0.08/e35/s750x750/17333528_572776239591542_7044954178963111936_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 3,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/8b783868d111c9a6463de805391c74b7/5CDC2302/t51.2885-15/e35/44260934_2095803047397874_4884408858553169193_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 4,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 5,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/5611bc2bcfd47a39aa1efa137c30661a/5CDFC525/t51.2885-15/e35/12519367_115820425483869_502692806_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 6,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 7,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 8,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 9,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 10,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 11,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
    {
      id: 12,
      usuario: 'naly.ry',
      perfil_do_usuario: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      imagem_postada: 'https://instagram.fcpv3-1.fna.fbcdn.net/vp/c01b38eb63e2c5fb9502f4933af45914/5CDD6726/t51.2885-15/e35/13108827_1367897793235627_382387958_n.jpg?_nc_ht=instagram.fcpv3-1.fna.fbcdn.net'
    },
  ];

  public stories = [
    {
      id: 1,
      img: 'https://image.flaticon.com/icons/svg/149/149156.svg',
      comentario: 'adicionar'
    },
    {
      id: 2,
      img: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      comentario: 'feliz'
    },
    {
      id: 3,
      img: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      comentario: 'comida'
    },
    {
      id: 4,
      img: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      comentario: 'doce'
    },
    {
      id: 5,
      img: 'https://avatars2.githubusercontent.com/u/43497999?s=400&u=6b7710bd68036fd793eac868ccb059567cc86455&v=4',
      comentario: 'laranja'
    }

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  // Definir segmento para toda vez que a página de perfil estiver ativa
  ionViewWillEnter() {
    this.segmento_de_perfil = 'grade';
  }
  goEdtPerfil() {
    // abre como uma pag. modal
    let modal = this.modalCtrl.create(EdtPerfilPage);
    modal.present();
  }
  goOps() {
    this.navCtrl.push(OpcaoPerfilPage, {});
  }
  goPerfilMarcado() {
    this.navCtrl.push(PerfilMarcadoPage);
  }
  goPerfilSalvo() {
    this.navCtrl.push(PerfilSalvoPage);
  }
  // Aciona quando o usuário pressiona uma postagem
  pressionaFoto(id: number, usuario: string, perfil_do_usuario: string, imagem_postada: string) {
    this.presentModal(id, usuario, perfil_do_usuario, imagem_postada);
  }
  presentModal(id: number, usuario: string, perfil_do_usuario: string, imagem_postada: string) {
    let modal = this.modalCtrl.create(PostPage,
      {
        id: id,
        usuario: usuario,
        perfil_do_usuario: perfil_do_usuario,
        imagem_postada: imagem_postada
      },
      { showBackdrop : true, enableBackdropDismiss : true}); 
      modal.present();
  }
}

