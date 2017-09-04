

export class User{
	private _id : string;
	private _name: string;
	private _email: string;
  private _phoneNumber: string;


	constructor(){
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


    get phoneNumber():string{
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber:string){
        this._phoneNumber = phoneNumber;
    }

}
