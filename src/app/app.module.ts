import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PerfilMarcadoPage } from '../pages/perfil-marcado/perfil-marcado';
import { PesquisaPage } from '../pages/pesquisa/pesquisa';
import { PerfilPage } from '../pages/perfil/perfil';
import { InicialPage } from '../pages/inicial/inicial';
import { EdtPerfilPage } from '../pages/edt-perfil/edt-perfil';
import { OpcaoPerfilPage } from '../pages/opcao-perfil/opcao-perfil';
import { Camera } from '@ionic-native/camera/ngx';
import { MenssagemPage } from '../pages/menssagem/menssagem';
import { TabsPage } from '../pages/tabs/tabs';
import { NotificacaoPage } from '../pages/notificacao/notificacao';
import { NovaMenssagemPage } from '../pages/nova-menssagem/nova-menssagem';
import { DetalheMenssagemPage } from '../pages/detalhe-menssagem/detalhe-menssagem';
import { PostarPopover } from '../pages/inicial/postar-popover';
import { PerfilSalvoPage } from '../pages/perfil-salvo/perfil-salvo';
@NgModule({
  declarations: [
    MyApp,
    PerfilMarcadoPage,
    PesquisaPage,
    PerfilPage,
    InicialPage,
    EdtPerfilPage,
    OpcaoPerfilPage,
    MenssagemPage,
    TabsPage,
    NotificacaoPage,
    NovaMenssagemPage,
    DetalheMenssagemPage,
    PostarPopover, 
    PerfilSalvoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PerfilMarcadoPage,
    PesquisaPage,
    PerfilPage,
    InicialPage,
    EdtPerfilPage,
    OpcaoPerfilPage,
    MenssagemPage,
    TabsPage,
    NotificacaoPage,
    NovaMenssagemPage,
    DetalheMenssagemPage,
    PostarPopover,
    PerfilSalvoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
