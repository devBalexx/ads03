import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VejaPage } from '../veja/veja';
import { DetergentePage } from '../detergente/detergente';
import { AlcoolPage } from '../alcool/alcool';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
  
})
export class AboutPage {

  constructor(public nav: NavController) {

  }

  openVejaPage(){
    this.nav.push(VejaPage);
  
  }

  openDetergentePage(){
    this.nav.push(DetergentePage);
  
  }

  openAlcoolPage(){
    this.nav.push(AlcoolPage);
  
  }
}
