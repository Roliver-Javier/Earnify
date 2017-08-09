import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageManager } from '../../utils/PageManager';
import { Group } from '../../models/Group';
import { Participant } from '../../models/Participant';

@Component({
  selector: 'page-roulette',
  templateUrl: 'roulette.html',
})
export class RoulettePage extends PageManager{
  loadingText : string;
  group : Group;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	super(navCtrl);
    this.group = new Group();
  	this.group = navParams.data;
    console.log(this.group.participants);
    console.log(JSON.stringify(this.group.participants));
  //  var arrTurns = this.shuffle(this.group.participants);
    //console.log(arrTurns);
  //  console.log(this.group.participants);
  }
/*
   shuffle = function(o:Array<Participant>):object {
      for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad RoulettePage');
    this.loadingText = 'This will be the order of your '+this.group.participants.length+' participants';


  }



}
