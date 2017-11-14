import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LevelOnePage } from '../level-one/level-one';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toLevel1(){
    this.navCtrl.push(LevelOnePage);
  }


}
