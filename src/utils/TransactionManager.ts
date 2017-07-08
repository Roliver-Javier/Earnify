import {Group} from '../models/Group';


export class TransactionManager{
	
	  today : any;
  	currentGroup : object;

  	constructor(currentGroup: object){
  		this.today = new Date().toLocaleDateString();
  		this.currentGroup = currentGroup;
  	}	

	
  	filterContactsByTurn = function():Group{
  		if(this.today === this.currentGroup.nextPaymentDate){
  				this.currentGroup.currentTurn = this.currentGroup.waitTurns[0];
  				this.currentGroup.waitTurns.splice(0,1);
  		}
  		return this.currentGroup;
  	}


}