import { Component, OnInit } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlaceService } from "../../services/places.service";
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from "ionic-angular";

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage implements OnInit {
  location:{lat:number,lng:number}={lat:0,lng:0};
  ngOnInit(): void {
    console.log("NewPlacePage ngOnInit()......");
  }

  constructor(public placeService: PlaceService, private geolocation: Geolocation, private navCtrl: NavController) {
  }

  onAddPlace(value: { title: string }) {
    this.placeService.addPlace({title:value.title,location:this.location});
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onLocateUser() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.location.lat=resp.coords.latitude;
      this.location.lng=resp.coords.longitude;
      console.log("lat"+resp.coords.latitude);
       console.log("lng"+resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
