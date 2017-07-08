

export class Participant{
	private _id : string;
	private _name: string;
	private _email: string;
	private _amountPartStatus: string;

	constructor(object){
		this._id = object.id;
		this._name = object.name;
		this._email = object.email;
		this._amountPartStatus = object.amountPartStatus;
	}

	get id():string {
        return this._id;
    }
    set id(id:string) {
        this._id = id;
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

}