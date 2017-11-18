import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-level-one',
  templateUrl: 'level-one.html',
})
export class LevelOnePage {
   name: string;
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
   action: any = ["As you slowly come to with the sound of tires crunching over gravel, you're jarred into reality with a splitting pain in  your head and the realization that you are in the trunk of a car. The last thing your remember is pulling over to the side of the road to help what seemed to be a woman in distress. The car screaches to a halt, two doors open and close with a loud heavy thud. Brief footsteps thud and then stop. Total silence... until the trunk is violently opened.", "You're carried for a 10 feet and dropped to the ground into long, cold wet grass, the male attacker tells the female attacker to go get the supplies"]
   response: any = [];
   //Outcomes are the reactions to the actions taken
   outcome1: any = ['"Looks like you cracked this one good, they are still out" says one of the attackers. They grab your arms and legs and hoist you out of the car. You make sure to keep your eyes tightly closed.', 'As soon as the trunk is lifted, you are immediatly blinded by light, The attackers grab you as you begin to kick at your attackers. You immediatly realize your hands seem to be taped but with with your legs free you continue to kick wildly. You stike the attacker with the flashlight and the light ejects there hands into the grass, The attention of the attackers is drawn to the location of the light. With both legs you violently kick the midsection of the larger attacker, sending them to the ground.', 'As soon as the trunk opens you kick wildly, with the heads of the attackers leaning over the trunk you strike the larger attacher in the neck with your foot. The attacker steps back holding his throat. The smaller attacker hesitates and steps back. with your feet planted on solid ground you run', '' ];
   //scene is the action response displayed in the ui

   //Scene is what is dispalyed in the UI dynamically
   scene: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.health = 65;
    this.scene = this.action[0];
    this.scene1 =  true;
    this.name = "Josh";
  }

  scene1action(action: any){
    console.log(action);
    if(action == 'dead'){
      let response = this.outcome1[0]
      let alert = this.alertCtrl.create({
       title: "Play Dead",
       subTitle: response + ' Health +5',
       buttons: [ {text: "OK", handler: () => {  let loading = this.loadingCtrl.create({});
         loading.present();
         setTimeout(() => {
          loading.dismiss();
          this.scene1 =  false;
          this.scene2 = true;
          this.scene = this.action[1];
          this.health = this.health + 5;
        }, 2000);}}],
     });
      alert.present();
    }

    if(action == "attack") {
      let theNumber = Math.floor(Math.random() * 2) + 1;
      let response = this.outcome1[theNumber];
      let alert = this.alertCtrl.create({
       title: "Attack",
       subTitle: response + ' Health -10',
       buttons: [ {text: "OK", handler: () => {  let loading = this.loadingCtrl.create({});
         loading.present();
         setTimeout(() => {
          loading.dismiss();
          this.scene1 =  false;
          this.scene2 = true;
          this.scene = this.action[1];
        }, 2000);}}],
     });
      alert.present();
      this.health = this.health - 5;
    }

    if(action == "scream"){

    }

  }

    scene2action(action: any){

    }


}
