

export class Participant{
	private _id : string;
	private _name: string;
	private _email: string;
	private _amountPartStatus: string;
    private _phoneNumber: string;
    private _turnDate: string
    private _turnNumber: number;

	constructor(){
	}

	get id():string {
        return this._id;
    }
    set id(id:string) {
        this._id = id;
    }

    get turnNumber():number {
        return this._turnNumber;
    }
    set turnNumber(turnNumber:number) {
        this._turnNumber = turnNumber;
    }

    get turnDate():string {
        return this._turnDate;
    }
    set turnDate(turnDate:string) {
        this._turnDate = turnDate;
    }


    get name():string {
        return this._name;
    }
    set name(name:string) {
        this._name = name;
    }


    get email():string {
        return this._email;
    }
    set email(email:string) {
        this._email = email;
    }

    get amountPartStatus():string {
        return this._amountPartStatus;
    }
    set amountPartStatus(amountPartStatus:string) {
        this._amountPartStatus = amountPartStatus;
    }

    get phoneNumber():string{
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber:string){
        this._phoneNumber = phoneNumber;
    }

}