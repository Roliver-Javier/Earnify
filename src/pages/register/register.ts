import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupData } from '../../patterns/GroupData';
import { ContactsDataUpdate } from '../../patterns/ContactsDataUpdate';
import { Participant } from '../../models/Participant';
import { TransactionManager } from '../../utils/TransactionManager';
import { Group } from '../../models/Group';
import { HomePage } from '../home/home';
import { PageManager } from '../../utils/PageManager';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage extends PageManager{
	private _group:Group;
	
  	constructor(public navCtrl: NavController) {
  		super(navCtrl);
  		this._group = new Group();
  		this._group.imageGroup = '../assets/img/default-san.jpg';


  	}

  	public get group(){
  		return this._group;
  	}

  	public registerGroupForm = function(){
  		
  	}

}