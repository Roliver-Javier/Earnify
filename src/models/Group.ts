
import {Participant} from '../models/Participant';
export class Group{
	
	private _nameGroup:string;
	private _groupId: string;
	private _status: string;
	private _dateCreated: string;
	private _nextPaymentDate: string;
	private _waitTurns: Array<Participant>;
	private _participants: Array<Participant>;
	private _currentTurn: object;
	private _debtors: Array<Participant>;
	private _amountPart: number;
	private _startDate : string;
	private _endDate : string;
	private _totalAmount : number;
	private _currencyTotal: string;
    private _imageGroup: string;

	constructor(){
		
	}

    

	startGroup = function(endDate:string) {
		this._startDate = new Date().toLocaleDateString();
		this._amountPart = this._totalAmount / this._participants.length;
		this._endDate = endDate;
	}

    set imageGroup(imageGroup:string){
        this._imageGroup = imageGroup;
    }

    get imageGroup():string{
        return this._imageGroup;
    }

	get currencyTotal(): string{
		return this._currencyTotal;
	}

	set currencyTotal(currencyTotal:string){
		this._currencyTotal = currencyTotal;
	}

	get nameGroup():string {
        return this._nameGroup;
    }
    set nameGroup(nameGroup:string) {
        this._nameGroup = nameGroup;
    }

    get groupId():string {
        return this._groupId;
    }
    set groupId(groupId:string) {
        this._groupId = groupId;
    }

    get status():string {
        return this._status;
    }
    set status(status:string) {
        this._status = status;
    }

    get dateCreated():string {
        return this._dateCreated;
    }
    set dateCreated(dateCreated:string) {
        this._dateCreated = dateCreated;
    }

    get nextPaymentDate():string {
        return this._nextPaymentDate;
    }
    set nextPaymentDate(nextPaymentDate:string) {
        this._nextPaymentDate = nextPaymentDate;
    }

    get waitTurns():Array<Participant>{
        return this._waitTurns;
    }
    set waitTurns(waitTurns:Array<Participant>) {
        this._waitTurns = waitTurns;
    }
	
    get participants():Array<Participant> {
        return this._participants;
    }
    set participants(participants:Array<Participant>) {
        this._participants = participants;
    }

    get currentTurn():object {
        return this._currentTurn;
    }
    set currentTurn(currentTurn:object) {
        this._currentTurn = currentTurn;
    }

    get debtors():Array<Participant> {
        return this._debtors;
    }
    set debtors(debtors:Array<Participant>) {
        this._debtors = debtors;
    }

    get amountPart():number {
        return this._amountPart;
    }
    set amountPart(amountPart:number) {
        this._amountPart = amountPart;
    }


	get startDate():string {
        return this._startDate;
    }
    set startDate(startDate:string) {
        this._startDate = startDate;
    }

    get endDate():string {
        return this._endDate;
    }
    set endDate(endDate:string) {
        this._endDate = endDate;
    }

 	get totalAmount():number {
        return this._totalAmount;
    }
    set totalAmount(totalAmount:number) {
        this._totalAmount = totalAmount;
    }

 
 










}