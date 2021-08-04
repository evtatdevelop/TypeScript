export interface Markerable {
  location: {
    lat: number; 
    lng: number
  }
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
  
  addMarker(item: Markerable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: item.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    })
  }
}