import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

   //Action is the situation that needs to be reacted to
   action: any = ["Wake up in a trunk, the car stops", "another thing happens"]
   response: any = [];
   //Outcomes are the reactions to the actions taken
   outcome1: any = ["The attackers grab your hands and feet and cary you out of the car"];
   //scene is the action response displayed in the ui

   //Scene is what is dispalyed in the UI dynamically 
   scene: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.health = 65;
    this.scene = this.action[0];
    this.scene1 =  true;
  }

  scene1action(action: any){
    console.log(action);
    if(action == 'dead'){
      let response = this.outcome1[0]
     let alert = this.alertCtrl.create({
       title: "Playing Dead",
       subTitle: response,
       buttons: ['OK']
     });
      alert.present();
      this.health = this.health + 5;
    }
    this.scene1 =  false;
    this.scene2 = true;
  }




}
