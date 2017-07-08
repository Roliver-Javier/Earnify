import {Observer} from '../patterns/interfaces/Observer';
import {Subject} from '../patterns/interfaces/Subject';

export class ContactsDataUpdate implements Observer{
	contactInfo: object;
    concatGroup: Subject;

    constructor(concatGroup: Subject) {
        this.concatGroup = concatGroup;
        concatGroup.registerObserver(this);
    }

    update = function (contactInfo: object): object{
        return this.contactInfo = contactInfo;
    }

}