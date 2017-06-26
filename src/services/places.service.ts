import {Storage} from '@ionic/storage';
import { Injectable } from "@angular/core";
import { Place } from "../model/place.model";

@Injectable()
export class PlaceService{
    private places:Place[]=[];

    constructor(private storage:Storage){

    }

    addPlace(place:Place){
        this.places.push(place);
        this.storage.set('places',this.places);
    }

    getPlaces(){
        
        //it will return a Promise - > then will return a promise
       return this.storage.get('places').then(
            (places)=>{
                this.places = places == null? []: places;
                return this.places.slice();
            }
        );
    }

}