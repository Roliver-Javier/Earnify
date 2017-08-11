import {Group} from '../models/Group';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';

export class TransactionManager{

	  today : any;
  	currentGroup : object;
		data : FirebaseListObservable<any>;
  	constructor(public af: AngularFireDatabase){
  		this.today = new Date().toLocaleDateString();

  	}
		setCurrentGroup = function(currentGroup):void{
			this.currentGroup = currentGroup;
		}

		findAllGroups = function(): Array<Group>{
			var groupArr = new Array<Group>();
			this.data = this.af.list('/groups');


			this.data.forEach(values=>{
				values.forEach(item=>{
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
