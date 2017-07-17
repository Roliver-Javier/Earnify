import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageManager } from '../../utils/PageManager';


@Component({
  selector: 'page-roulette',
  templateUrl: 'roulette.html',
})
export class RoulettePage extends PageManager{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	super(navCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoulettePage');
  }

  

}
