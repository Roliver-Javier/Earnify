import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageManager } from '../../utils/PageManager';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'page-participant',
  templateUrl: 'participant.html'

})
export class ParticipantPage extends PageManager{
	private showContactList : boolean;
	private contactlist: any;
  private titleDisplay: string;

	constructor(public nav: NavController, public navParams: NavParams) {
	  	super(nav);
      this.titleDisplay = 'New participant';
	  	this.showContactList = navParams.data.showContact;
	  	if(this.showContactList){
	  		this.contactlist = navParams.data.grouplist;
        this.titleDisplay = 'Group participants';
	  	}
	}



  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantPage');
  }

}
