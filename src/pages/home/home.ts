import { Component } from '@angular/core';
import { GroupData } from '../../patterns/GroupData';
import { ContactsDataUpdate } from '../../patterns/ContactsDataUpdate';
import { Participant } from '../../models/Participant';
import { Group } from '../../models/Group';
import { TransactionManager } from '../../utils/TransactionManager';
import {ActionSheetController,NavController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { PageManager } from '../../utils/PageManager';
import { GroupPage } from '../group/group';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends PageManager{
    groups : Array<Group>;

  	constructor(public navCtrl: NavController,
          public af: AngularFireDatabase,
  				public actShtCtr: ActionSheetController) {

  		super(navCtrl);
      var transactionManager = new TransactionManager(af);
      this.groups = transactionManager.findUserGroups();

    }

  getTotalExpected = function():number{
     var total = 0;
      this.groups.forEach(item=>{
        total += item.totalAmount;
      });
      return total;
  }

	openMenu = function() {
    	let actionSheet = this.actShtCtr.create({
	      	title: '',
	      	cssClass: 'action-sheets-basic-page',
	      	buttons: [
		        {
		        	text: 'Create new group',
		        	icon: 'ios-people',
		          	handler: () => {
		            		this.goPageDirect(RegisterPage);
		          	}
		        },

	      	]
    	});
    	actionSheet.present();
	}

	openGroup = function(group){
		console.log(group);
		this.goPage(GroupPage,group);
	}

  getAllGroups = function():Array<Group>{
  	return this.groups;
  }



}
