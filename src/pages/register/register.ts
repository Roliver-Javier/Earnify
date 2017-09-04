import { Component } from '@angular/core';
import { NavController,ActionSheetController, Platform, ToastController,AlertController } from 'ionic-angular';
import { GroupData } from '../../patterns/GroupData';
import { ContactsDataUpdate } from '../../patterns/ContactsDataUpdate';
import { Participant } from '../../models/Participant';
import { TransactionManager } from '../../utils/TransactionManager';
import { Group } from '../../models/Group';
import { HomePage } from '../home/home';
import { PageManager } from '../../utils/PageManager';
import {Contacts} from 'ionic-native';
import { RoulettePage } from '../roulette/roulette';
import { ParticipantPage } from '../participant/participant';
import { GraphicsPage } from '../graphics/graphics';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage extends PageManager{
	private group:Group;
	private contactlist: any;
  private transactionManager: TransactionManager;

  	constructor(public navCtrl: NavController,
                public platform: Platform,
                public toastCtrl: ToastController,
                public af: AngularFireDatabase,
                public actShtCtr: ActionSheetController,
                public alertCtrl: AlertController) {

  		super(navCtrl);
  		this.group = new Group();
  		this.group.imageGroup = '';
      this.contactlist = [];
      this.group.isAdminParticipant = false;
      this.transactionManager = new TransactionManager(af);

  	}

    openGraphicsGroup = function(){
      this.goPage(GraphicsPage,this.group);
    }

    openCreateMenu = function() {
        var pageParam = {};
        this.group.groupId = this.transactionManager.generateHashGroup(this.group.name);

      	let actionSheet = this.actShtCtr.create({
  	      	title: '',
  	      	cssClass: 'action-sheets-basic-page',
  	      	buttons: [
              {
  		        	text: 'See all Participants',
  		        	icon: 'ios-eye-outline',
  		          	handler: () => {
                      pageParam = {
                        'showContacts':true,
                        'grouplist':this.contactlist,
                        'currentGroup':this.group
                      };
  		            		this.goPage(ParticipantPage,pageParam);
  		          	}
  		        },
  		        {
  		        	text: 'Create new Participant',
  		        	icon: 'ios-contact',
  		          	handler: () => {
                      pageParam = {
                        'showContact':false,
                        'grouplist':this.contactlist,
                        'currentGroup':this.group
                      };
  		            		this.goPage(ParticipantPage,pageParam);
  		          	}
  		        },
              {
  		        	text: 'Add participant from Contacts',
  		        	icon: 'ios-contacts',
  		          	handler: () => {
  		            		this.addParticipant();
  		          	}
  		        },
              {
  		        	text: 'Save Group',
  		        	icon: 'ios-contacts',
  		          	handler: () => {
  		            		this.addParticipant();
  		          	}
  		        },
  	      	]
      	});
      	actionSheet.present();
  	}

    addParticipant = function() {
        var contact1 = new Participant();
        contact1.id = 'HGHGFGHFGH333w33';
        contact1.name = 'Luis Henz';
        contact1.email = 'luisHenz@gmail.com';
        contact1.amountPartStatus= 'pending';
        contact1.phoneNumber1 = '809-483-1685';

        var contact2 = new Participant();
        contact2.id = 'HGHGFGHFGH333w33';
        contact2.name = 'Roliver';
        contact2.email = 'roliver@gmail.com';
        contact2.amountPartStatus= 'pending';
        contact2.phoneNumber1 = '809-483-1999';

        this.contactlist.push(contact1);
        this.contactlist.push(contact2);

        var group  = new Group();
        group.nameGroup='FaGroupSan';
    	  group.groupId= '123';
    	  group.status= 'in process';
    	  group.dateCreated= '1/7/2017';
    	  //group.nextPaymentDate: string;
    	  group.waitTurns= this.contactlist;
    	  group.participants= this.contactlist;
    	  //group.currentTurn: object;
    	  group.debtors= this.contactlist;
    	  group.amountPart= 3333.33;
    	  group.startDate= '1/2/2017';
    	  group.endDate= '1/3/2017';
    	  group.totalAmount= 10000.00;
    	  group.currencyTotal= 'RD$';
        group.imageGroup= 'assets/img/img5.jpg';
        group.isAdminParticipant = true;
        this.goPage(RoulettePage,group);
    }

    registerGroupForm = function() {
      if(this.validateForm()){
          this.group.groupId = '';
          this.group.status = '';
          this.group.nextPaymentDate = '';
          this.group.waitTurns = this.contactlist;
          this.group.currentTurn = {};
          this.group.debtors = this.contactlist;
          this.group.dateCreated = new Date().toLocaleDateString();
          this.group.participants = this.contactlist;
          this.group.amountPart = 0;

          this.openCreateMenu();

      }
    }

    /*
      Contacts.pickContact().then((contacts) => {
        if(typeof contacts.displayName !=='undefined' &&
          typeof contacts.phoneNumbers[0].value !=='undefined'){
          let participant = new Participant();
          participant.name = contacts.displayName;
          participant.email = '';
          participant.amountPartStatus = 'pending';
          participant.phoneNumber = contacts.phoneNumber[0];
          this.contactlist.push(participant);
        }else{
          let toast = this.toastCtrl.create({
          message: 'This contact did not complete requirements',
          duration: 3000
          });
          toast.present();
        }
      });
      */



    private hasUndefinedFields(fields: Array<any>):boolean{
        for(var i = 0; i < fields.length;i++){
            if(typeof fields[i] === 'undefined' || fields[i] <= 0){
                return true
            }
        }
        return false;
    }

    private validateForm = function():boolean{

      var returnValue = true, message,
      fields = [this.group.nameGroup,this.group.currencyTotal,
                this.group.totalAmount,this.group.totalAmount,
                this.group.endDate,this.group.startDate];

      if(this.hasUndefinedFields(fields)){
        returnValue = false;
        message = 'Favor ingresar los datos correctamente.';
      }
      else if(new Date(this.group.endDate) <= new Date(this.group.startDate)){
        returnValue = false;
        message = 'La fecha final no puede ser menor o igual que la fecha inicial.';
      }
      else
      if(this.contactlist.length <=0){
        message = 'Debe ingresar participantes al grupo.';
        returnValue = true;
        let toast = this.toastCtrl.create({
            message: message,
            duration:3000,
            position: 'top'
        });
      }


      if(!returnValue){
        let toast = this.toastCtrl.create({
            message: message,
            duration:3000,
            position: 'top'
        });
        toast.present();
      }
      return returnValue;
    }

/*
let prompt = this.alertCtrl.create({
 title:'Desea rifar los turnos?',
 message: "Al rifar los turnos se establecera el orden de pago de los participantes",
 buttons:[{
   text: 'Yes',
   handler: data => {
     var messageError,hasFailed=false;
     this.goPage(RoulettePage);
   }
 },
 {
   text: 'No',
   handler: data=>{
     if(this.validateForm()){
       this.group.groupId = '';
       this.group.status = '';
       this.group.nextPaymentDate = '';
       this.group.waitTurns = this.contactlist;
       this.group.currentTurn = {};
       this.group.debtors = this.contactlist;
       this.group.dateCreated = new Date().toLocaleDateString();
       this.group.participants = this.contactlist;
       this.group.amountPart = 0;

       let toast = this.toastCtrl.create({
             message: 'the group was created successfully',
             duration:3000,
             position: 'top'
           });
       toast.present();
     }
   }
 }]
});
prompt.present();
*/


}
