import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProdutosPage } from '../pages/produtos/produtos';
import { DescricaoPage } from '../pages/descricao/descricao';
import { ArrozPage } from '../pages/arroz/arroz';
import { OleoPage } from '../pages/oleo/oleo';
import { FeijaoPage } from '../pages/feijao/feijao';
import { VejaPage } from '../pages/veja/veja';
import { DetergentePage } from '../pages/detergente/detergente';
import { AlcoolPage } from '../pages/alcool/alcool';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProdutosPage,
    DescricaoPage,
    ArrozPage,
    OleoPage,
    FeijaoPage,
    VejaPage,
    DetergentePage,
    AlcoolPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProdutosPage,
    DescricaoPage,
    ArrozPage,
    OleoPage,
    FeijaoPage,
    VejaPage,
    DetergentePage,
    AlcoolPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
