import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GodzillaPage } from '../filmes/Godzilla/godzilla';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  paginaGodzilla = Godzillapage;

  constructor(public navCtrl: NavController) {

  }

}
