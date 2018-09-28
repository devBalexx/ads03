import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutosPage } from '../produtos/produtos';
import { DescricaoPage } from '../descricao/descricao';
import { ArrozPage } from '../arroz/arroz';
import { OleoPage } from '../oleo/oleo';
import { FeijaoPage } from '../feijao/feijao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'


})
export class HomePage {

  constructor(public nav: NavController) {}


  openProdutosPage(){
    this.nav.push(ProdutosPage);

  }

  openDescricaoPage(){
    this.nav.push(DescricaoPage);
  
  }

  openArrozPage(){
    this.nav.push(ArrozPage);
  
  }

  openOleoPage(){
    this.nav.push(OleoPage);
  
  }

  openFeijaoPage(){
    this.nav.push(FeijaoPage);
  
  }
}
