import {Observer} from '../../patterns/interfaces/Observer';
export interface Subject{
    registerObserver: (o: Observer)=>void;
    removeObserver: (o: Observer)=>void;
    notifyObserver:()=> void;
}