import { Component } from '@angular/core';
import { GroupData } from '../../patterns/GroupData';
import { ContactsDataUpdate } from '../../patterns/ContactsDataUpdate';
import { Participant } from '../../models/Participant';
import { Group } from '../../models/Group';
import { TransactionManager } from '../../utils/TransactionManager';
import {ActionSheetController,NavController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { PageManager } from '../../utils/PageManager';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends PageManager{
	groups = new Array<Group>();
  	constructor(public navCtrl: NavController,
  				public actShtCtr: ActionSheetController) {

  		super(navCtrl);
  		var eventsGroup = new GroupData();
  		var currentDisplay = new ContactsDataUpdate(eventsGroup),
  		/*Have to call the push notification to get changes automatically and set
  		* set this changes on setChanges method */
	  	/*	var sessionData = {
	  			userID: 'ASDASDHHHFFVBBBG',
	  			name: 'Roliver Javier',
	  			email: 'roliverjavier@gmail.com',
	  			earnedTotal: ['0','00'],
	  			groupBeing: ['#1000033f','#20332345']
	  		},
		*/
	  		contact1 = new Participant({
			  								id: 'HGHGFGHFGH333w33',
			  								name: 'Luis Henz',
			  								email: 'luisHenz@gmail.com',
			  								amountPartStatus: 'waiting'
			  							}),
	  		contact2 = new Participant({
	  										id: 'KJKHKH867644KH',
	  										name: 'Cristian Matos',
	  										email: 'cristianmatos@gmail.com',
	  										amountPartStatus: 'waiting'

										});


		  		
		/***  SCENERAIO REGISTRANDO GRUPO  **/
		this.loadDummyGroups([contact1,contact2]);
		  		

		/***  SCENERAIO CAMBIOS HECHO POR LOS PARTICIPANTES EN LA APP.
			Hay usuarios que han pagado y lo notifican en la app y otros que aun no.
		**/
		  			//CONTACTO1 PAGO 
		  			
		  			eventsGroup.test();
		
  	}
  	loadDummyGroups = function(participants){
  		var groupDummy1 = new Group();
		  			groupDummy1.nameGroup = 'San de la Fabrica';
		  			groupDummy1.groupId = '#1000033f';
					groupDummy1.status = 'in process';
					groupDummy1.dateCreated = '1/7/2017';
					groupDummy1.nextPaymentDate = '12/7/2017';
					groupDummy1.waitTurns = participants;
					groupDummy1.participants =participants;
					groupDummy1.totalAmount = 50000;
					groupDummy1.imageGroup =  'url(../assets/img/img3.jpg)';
					groupDummy1.currentTurn = {};
					groupDummy1.debtors = participants;
					groupDummy1.currencyTotal = 'RD $';

				var groupDummy2 = new Group();
		  			groupDummy2.nameGroup = 'San de la Fabrica';
		  			groupDummy2.groupId = '#1000033f';
					groupDummy2.status = 'in process';
					groupDummy2.dateCreated = '1/7/2017';
					groupDummy2.nextPaymentDate = '12/7/2017';
					groupDummy2.waitTurns = participants;
					groupDummy2.participants = participants;
					groupDummy2.totalAmount = 50000;
					groupDummy2.imageGroup = 'url(../assets/img/img5.jpg)';
					groupDummy2.currentTurn = {};
					groupDummy2.debtors = participants;
					groupDummy2.currencyTotal = 'RD $';

				var groupDummy3 = new Group();
		  			groupDummy3.nameGroup = 'San de la Fabrica';
		  			groupDummy3.groupId = '#1000033f';
					groupDummy3.status = 'in process';
					groupDummy3.dateCreated = '1/7/2017';
					groupDummy3.nextPaymentDate = '12/7/2017';
					groupDummy3.waitTurns = participants;
					groupDummy3.participants = participants;
					groupDummy3.totalAmount = 50000;
					groupDummy3.imageGroup = 'url(../assets/img/img8.jpg)';
					groupDummy3.currentTurn = {};
					groupDummy3.debtors = participants;
					groupDummy3.currencyTotal = 'RD $';	

					//agregando contacto al grupo se toma en cuenta lo siguiente:
		  			
		  			/*
		   			- El numero MAXIMO de participantes en el grupo
		  			- Clase transactionManager cuadra cuando cambia los estados segun actualizacion 
		  			del contacto*/
		  			//const MAX_PARTICIPANTS = 4;
		  			var transactionManager = new TransactionManager(groupDummy1);
		  				
		  			/*VERIFICA SI LA FECHA DE HOY CORRESPONDE CON EL SIGUIENTE PAGO
					Si aplica entonces se coloca al contacto que le toca en la casilla currentTurn
					y se elimina de la casilla de turnos de espera.
					*/
					/*Aunque la fecha sea del turno de X usuario este aun sigue formando parte de los deudores 
					   se estaria autodebiendo a si mismo.
		  			*/
		  			groupDummy1 = transactionManager.filterContactsByTurn(); 
		  		//SE CREA EL GRUPO
		  			groupDummy1.startGroup('30/8/2017');
		  			this.groups.push(groupDummy1);
		  			this.groups.push(groupDummy2);
		  			this.groups.push(groupDummy3);
		  			//eventsGroup.setChanges(groupDummy1);
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
		            		this.goPage(RegisterPage);
		          	}
		        },
	        	
	      	]
    	});
    	actionSheet.present();
	}

  	getAllGroups = function():Array<Group>{
  		return this.groups;
  	}

}
