import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map!: L.Map;
  basemaps!: string | any;

  constructor() {}
  // ngOnInit() { 

  //   });
  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView(
      [51.505, -0.09],
      13
    );
    

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

     //Marker
     const markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Ganti dengan URL ikon marker default dari CDN
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png', // Ganti dengan URL ikon marker default 2x dari CDN
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', // Ganti dengan URL bayangan marker default dari CDN
      iconSize: [45, 61], // Sesuaikan dengan ukuran ikon Anda
      iconAnchor: [21, 41], // Sesuaikan dengan titik penunjuk ikon Anda
    });
    

    //Pop-up information
    const marker = L.marker([51.505, -0.09], { icon: markerIcon }).addTo(this.map).bindPopup('London').openPopup();


    //Basemap
    const baseMaps = {
      OpenStreetMap: L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ),
      Satellite: L.tileLayer(
        'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution:
            '&copy; <a href="https://maps.google.com">Google Maps</a>',
        }
      ),
      Watercolor: L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
        maxZoom: 17,
        attribution:
          '&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors',
      })
    };
    //LayerControl
    L.control.layers(baseMaps).addTo(this.map);

  }
}
