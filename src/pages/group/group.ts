import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageManager } from '../../utils/PageManager';

/**
 * Generated class for the GroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage extends PageManager{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	super(navCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }

}
