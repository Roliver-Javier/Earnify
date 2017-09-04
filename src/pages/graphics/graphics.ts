import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Group } from '../../models/Group';

/**
 * Generated class for the GraphicsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-graphics',
  templateUrl: 'graphics.html',
})
export class GraphicsPage {

  imageSelected : string;
  imageMark : boolean;
  group : Group;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imageMark = false;
    this.group = navParams.data;
  }

  setImageGroup = function(imgUrl,$event){
      if(!this.imageMark){
        this.imageMark = true;
        this.imageSelected = $event.target.attributes[0].nodeValue;
        $event.target.attributes[0].nodeValue = '/assets/img/mark.png';
      }
  }

  registerImageGroup = function(){
      this.group.imageGroup = this.imageSelected;
      console.log(this.group);
      this.navCtrl.pop();
  }


}
