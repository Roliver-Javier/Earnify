import {Group} from '../models/Group';
import {User} from '../models/User';
import {Participant} from '../models/Participant';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';

export class TransactionManager{

	  today : any;
  	currentGroup : object;
		data : FirebaseListObservable<any>;

		userAuthFromGoogle : User;


  	constructor(public af: AngularFireDatabase){
  		this.today = new Date().toLocaleDateString();
			this.signIn();
			this.data = this.af.list('/groups');

  	}

		generateHashGroup = function(name):string{
				return name+'-'+'1312374738';
		}

		signIn= function(){
			this.userAuthFromGoogle = new User();
			this.userAuthFromGoogle.id = '123ABC';
			this.userAuthFromGoogle.name = 'Roliver Javier Rodriguez';
			this.userAuthFromGoogle.email ='roliverjavier@gmail.com';
			this.userAuthFromGoogle.phoneNumber = '8292171998';
		}

		setCurrentGroup = function(currentGroup):void{
			this.currentGroup = currentGroup;
		}


		isUserAParticipant = function(participants: Array<Participant>): boolean{
				participants.forEach(values=>{
						if(values.id === this.userAuthFromGoogle.id){
							return true;
						}
				});
				return false;
		}


		findUserGroups = function(): Array<Group>{
			var groupArr = new Array<Group>();
			this.data.forEach(values=>{
				values.forEach(item=>{
					if((item.isAdminParticipant && item.idAdmin === this.userAuthFromGoogle.id) ||
						 this.isUserAParticipant(item.participants)){
						var group = new Group();
								group.nameGroup=item.name;
								group.status=item.status;
								group.dateCreated=item.dateCreated;
								group.nextPaymentDate=item.nextPaymentDate;
								group.waitTurns=item.waitTurns;
								group.participants=item.participants;
								group.currentTurn=item.currentTurn;
								group.debtors=item.debtors;
								group.amountPart=item.amountPart;
								group.startDate=item.startDate;
								group.endDate=item.endDate;
								group.totalAmount=item.totalAmount;
								group.currencyTotal=item.currencyTotal;
								group.imageGroup=item.imageGroup;
								group.isAdminParticipant=item.isAdminParticipant;

						groupArr.push(group);
					}
				});
			});
			return groupArr;
		}


  	filterContactsByTurn = function():Group{
  		if(this.today === this.currentGroup.nextPaymentDate){
  				this.currentGroup.currentTurn = this.currentGroup.waitTurns[0];
  				this.currentGroup.waitTurns.splice(0,1);
  		}
  		return this.currentGroup;
  	}


}
