import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onMapClick(event: google.maps.MouseEvent | google.maps.IconMouseEvent) {
    console.log(event);
  }
}
