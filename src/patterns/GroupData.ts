
import {Observer} from '../patterns/interfaces/Observer';

import {Subject} from '../patterns/interfaces/Subject';



export class GroupData implements Subject{
    observer : Observer[];
    contactInfo : object;
    groupsinfo : object[];

    constructor() {
        this.observer = Array<Observer>();
        this.groupsinfo = Array<object>();
    }

    registerObserver= function(o: Observer): void{
        this.observer.push(o);
    }
    removeObserver = function (o: Observer): void{
        
    }
    notifyObserver = function (): void{
        var observerInfo;
        for (var i = 0; i < this.observer.length; i++){
          observerInfo = this.observer[i].update(this.contactInfo);
            this.groupsinfo.push(observerInfo);
        }
    }

    setChanges = function (contactInfo: object): void{
        this.contactInfo = contactInfo;
        this.notifyObserver();
    }

    test = function(){
        console.log(this.groupsinfo);
    }
}