import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-level-one',
  templateUrl: 'level-one.html',
})
export class LevelOnePage {
   health: number;
   scene1: boolean;
   scene2: boolean;
   scene3: boolean;
   scene4: boolean;
   scene5: boolean;
   scene6: boolean;
   scene7: boolean;
   scene8: boolean;
   scene9: boolean;
   scene10: boolean;

   action: any = ["Wake up in a trunk, the car stopps", "another thing happens"]
   response: any = [];
   outcome: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.health =  Math.floor((Math.random() * 13) + 60);
    this.outcome = this.action[0];
    this.scene1 =  true;
  }

  scene1action(action: any){
    console.log(action);
    this.outcome = this.action[1];
    this.scene1 =  false;
    this.scene2 = true;
    this.health = this.health - 10;

  }




}
