import { Component } from '@angular/core';

@Component({
  selector: 'app-cars', //selector
  // selector: '[app-cars]', //attribute
  // selector: '.app-cars', //class
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddCar = false;

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);
  }

}
