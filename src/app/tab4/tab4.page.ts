import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


declare var google;

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  
  // @ts-ignore
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  address: string;

  constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('tilesloaded', () => {
        console.log('accuracy', this.map);
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
      });

    }).catch((error) => {
      console.log('Erro na localização', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log('getAddressFromCoords ' + lattitude + ' ' + longitude);
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
        .then((result: NativeGeocoderResult[]) => {
          this.address = '';
          const responseAddress = [];
          for (const [key, value] of Object.entries(result[0])) {
            if (value.length > 0) {
              responseAddress.push(value);
            }

          }
          responseAddress.reverse();
          for (const value of responseAddress) {
            this.address += value + ', ';
          }
          this.address = this.address.slice(0, -2);
        })
        .catch((error: any) => {
          this.address = 'Endereço não disponível!';
        });

  }



}