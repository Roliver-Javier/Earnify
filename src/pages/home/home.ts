import { Component } from '@angular/core';
import { GroupData } from '../../patterns/GroupData';
import { ContactsDataUpdate } from '../../patterns/ContactsDataUpdate';
import { Participant } from '../../models/Participant';
import { Group } from '../../models/Group';
import { TransactionManager } from '../../utils/TransactionManager';
import {ActionSheetController,NavController,AlertController,ToastController} from 'ionic-angular';
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
    transactionManager: TransactionManager;

  	constructor(public navCtrl: NavController,
          public af: AngularFireDatabase,
  				public actShtCtr: ActionSheetController,
          public toastCtrl: ToastController,
          public alertCtrl: AlertController) {
  		super(navCtrl);
      this.transactionManager = new TransactionManager(af);
      this.groups = this.transactionManager.findUserGroups();
    }

  isPartOfGroup = function(group:Group){
     return this.transactionManager.isUserAParticipant(group.participants);
  }

  getTotalExpected = function():number{
     var total = 0;
      this.groups.forEach(item=>{
        total += item.totalAmount;
      });
      return total;
  }

  goToRegisterPage = function(){
    this.goPageDirect(RegisterPage);
  }

  showSearchModal = function(){
      setTimeout(() => {
          var groupAlert = this.showPromptGroupCode();
              groupAlert.present();
      }, 400);          
  }

	openMenu = function() {
    	let actionSheet = this.actShtCtr.create({
	      	title: '',
	      	cssClass: 'action-sheets-basic-page',
	      	buttons: [
		        {
		        	text: 'Create new group',
		        	icon: 'md-add-circle',
		          	handler: () => {
		            		this.goPageDirect(RegisterPage);
		          	}
		        },
            {
		        	text: 'Search a group',
		        	icon: 'ios-search-outline',
		          	handler: () => {
                  setTimeout(() => {
                     var groupAlert = this.showPromptGroupCode();
                     groupAlert.present();
                   }, 400);
                }
		         }

	      	]
    	});
    	actionSheet.present();
	}

  showPromptGroupCode = function():any{
    let alert = this.alertCtrl.create({
        title: 'Search group',
        message: 'Enter the group code here!',
        inputs: [
          {
              name: 'groupCode',
              placeholder: 'Place your code here'
          },
        ],
        buttons: [
          {
              text: 'Cancel',
              role:'cancel'
          },
          {
            text: 'Save',
            handler: (data) => {
                console.log(data);
                if(data.groupCode.length > 0){
                  var group = new Group();
                  group = this.transactionManager.findGroupByCode(data.groupCode);
                }else{
                  let toast = this.toastCtrl.create({
                      message: "Cannot find this group",
                      duration:10000,
                      position: 'top'
                  });
                  toast.present();
                }
            }
          }
        ]
        });
        return alert;
  }
	openGroup = function(group){
		console.log(group);
		this.goPage(GroupPage,group);
	}

  getAllGroups = function():Array<Group>{
  	return this.groups;
  }



}
