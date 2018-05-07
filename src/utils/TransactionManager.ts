import {Group} from '../models/Group';
import {User} from '../models/User';
import {Participant} from '../models/Participant';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';


export class TransactionManager{

	  today : any;
  	currentGroup : object;
		groupDB : FirebaseListObservable<any>;

		userAuthFromGoogle : User;


  	constructor(public af: AngularFireDatabase){
  		this.today = new Date().toLocaleDateString();
			this.signIn();
			this.groupDB = this.af.list('/groups');

  	}

		generateHashGroup = function(name):string{
				return name+'-'+'1312374738';
		}

		signIn= function():void{
			this.userAuthFromGoogle = new User();
			this.userAuthFromGoogle.id = '123ABC';
			this.userAuthFromGoogle.name = 'Roliver Javier Rodriguez';
			this.userAuthFromGoogle.email ='roliverjavier@gmail.com';
			this.userAuthFromGoogle.phoneNumber = '8292171998';
		}

		get user_singed():object{
			return this.userAuthFromGoogle;
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


		createGroup = function(group:Group): boolean{
				try{
					this.groupDB.push({
						 amountPart: group.amountPart,
						 currencyTotal:group.currencyTotal,
						 currentTurn: group.currentTurn,
						 dateCreated: group.dateCreated,
						 debtors:group.debtors,
						 idAdmin:group.idAdmin,
						 imageGroup:group.imageGroup,
						 isAdminParticipant:group.isAdminParticipant,
						 name:group.nameGroup,
						 nextPaymentDate:group.nextPaymentDate,
						 participants:group.participants,
						 startDate:group.startDate,
						 status: group.status,
						 totalAmount:group.totalAmount,
						 waitTurns:group.waitTurns,
						 groupId:group.groupId
					});
				}catch(ex){
						return false;
				}
				return true;

		}

		findUserGroups = function(): Array<Group>{
			var groupArr = new Array<Group>();
			this.groupDB.forEach(values=>{
				values.forEach(item=>{
					if((item.isAdminParticipant && item.idAdmin === this.userAuthFromGoogle.id) ||
						 this.isUserAParticipant(item.participants)){
						var group = new Group();
								group.groupId=item.groupId;
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

		findGroupByCode = function(code:string): Group{
			var groupArr = new Array<Group>();
			this.groupDB.forEach(values=>{
					values.forEach(item=>{
						if(item.groupId === code){
							var group = new Group();
									group.groupId=item.groupId;
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
							return group;
						}
					});
			});
			return null;
		}

  	filterContactsByTurn = function():Group{
  		if(this.today === this.currentGroup.nextPaymentDate){
  				this.currentGroup.currentTurn = this.currentGroup.waitTurns[0];
  				this.currentGroup.waitTurns.splice(0,1);
  		}
  		return this.currentGroup;
  	}


}
