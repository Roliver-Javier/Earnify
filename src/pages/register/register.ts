import { Component } from '@angular/core';
import { NavController, Platform, ToastController,AlertController } from 'ionic-angular';
import { GroupData } from '../../patterns/GroupData';
import { ContactsDataUpdate } from '../../patterns/ContactsDataUpdate';
import { Participant } from '../../models/Participant';
import { TransactionManager } from '../../utils/TransactionManager';
import { Group } from '../../models/Group';
import { HomePage } from '../home/home';
import { PageManager } from '../../utils/PageManager';
import {Contacts} from 'ionic-native';
import { RoulettePage } from '../roulette/roulette';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage extends PageManager{
	private _group:Group;
	private contactlist: any;


  	constructor(public navCtrl: NavController,
                public platform: Platform,
                public toastCtrl: ToastController,
                public alertCtrl: AlertController) {
  		super(navCtrl);
  		this._group = new Group();
  		this._group.imageGroup = 'assets/img/default-san.jpg';
      this.contactlist = [];
      this._group.isAdminParticipant = false;
  	}

    addParticipant = function() {
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
    }


  	public get group(){
  		return this._group;
  	}

    private validateForm = function():boolean{
      var returnValue = true, message;
      console.log(this.group.startDate);
      if(typeof this.group.nameGroup === 'undefined' ||
        typeof this.group.currencyTotal === 'undefined'||
        this.group.totalAmount <= 0 ||
        typeof this.group.totalAmount === 'undefined'){
        returnValue = false;
        message = 'Favor ingresar los datos correctamente.';
      }
      else 
      if(typeof this.group.endDate !== 'undefined' &&
         typeof this.group.startDate !== 'undefined'){
          if(new Date(this.group.endDate) <= new Date(this.group.startDate)){

              returnValue = false;
              message = 'La fecha final no puede ser menor o igual que la fecha inicial.';
          }else{
            returnValue = true;
          }
      }
      else     
      if(this.contactlist.length <=0){
        message = 'Este grupo no posee participantes.';
        returnValue = false;
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


  	public registerGroupForm = function(){
      if(this.validateForm()){
  		 let prompt = this.alertCtrl.create({
        title:'Desea rifar los turnos?',
        message: "Al rifar los turnos se establecera el orden de pago de los participantes",
        buttons:[{
          text: 'Yes',
          handler: data => {
            var messageError,hasFailed=false;
            if(this.validateForm()){     
              this.goPage(RoulettePage);
            }
            
            
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
     }
  	}

}