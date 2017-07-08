import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GroupData } from '../../patterns/GroupData';
import { ContactsDataUpdate } from '../../patterns/ContactsDataUpdate';
import { Participant } from '../../models/Participant';
import { TransactionManager } from '../../utils/TransactionManager';
import { Group } from '../../models/Group';
import { HomePage } from '../home/home';
import { PageManager } from '../../utils/PageManager';
import {Contacts} from 'ionic-native';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage extends PageManager{
	private _group:Group;
	private contactlist: any;


  	constructor(public navCtrl: NavController, public platform: Platform) {
  		super(navCtrl);
  		this._group = new Group();
  		this._group.imageGroup = '../assets/img/default-san.jpg';
      this.contactlist = [];
  	}

    submitForm = function() {
    let contactsfound
    Contacts.pickContact().then((contacts) => {
      alert("INSIDE PROMISE");
      this.contactlist.push(contacts);
      contactsfound = contacts;
    })

  }


  	public get group(){
  		return this._group;
  	}

  	public registerGroupForm = function(){
  		
  	}

}