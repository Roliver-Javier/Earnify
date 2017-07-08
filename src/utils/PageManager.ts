import { NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';

export abstract class PageManager{
	navCtrl: NavController;

  	constructor(navCtrl: NavController){
  		this.navCtrl = navCtrl;
  	}	

  	
    goToHome = function(){
    	this.navCtrl.setRoot(HomePage);
    }

    goBack = function(){

    }

    goFoward = function(){

    }

    goPage = function(page:any){
    	 this.navCtrl.setRoot(page);
    }

}