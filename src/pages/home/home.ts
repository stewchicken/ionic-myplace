import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewPlacePage } from "../new-place/new-place";
import { PlaceService } from "../../services/places.service";
import { PlacePage } from "../place/place";
import { Place } from "../../model/place.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  ngOnInit(): void {
    console.log("HomePage ngOnInit is called...");
  }
  places: { title: String }[];
  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public placeService: PlaceService) {  }

  ionViewWillEnter() {
    this.placeService.getPlaces().then(
      (places) => {
        this.places = places;
      }
    );
  }
  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place:Place) {

    this.modalCtrl.create(PlacePage,place).present();
  }

}
