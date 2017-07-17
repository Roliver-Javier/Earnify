import { NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';

export abstract class PageManager{
	navCtrl: NavController;

  	constructor(navCtrl: NavController){
  		this.navCtrl = navCtrl;
  	}	

  	
    goToHome = function(){
    	this.navCtrl.push(HomePage);
    }

    goBack = function(){
      this.navCtrl.pop();
    }

    goFoward = function(){

    }

    goPageDirect = function(page:any){
    	 this.navCtrl.setRoot(page);
    }

    goPage = function(page:any){
       this.navCtrl.push(page);
    }

}