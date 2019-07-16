import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  constructor() {

  }
  addCarStatus = false;
  inputCarName = null;
  inputCarYear = null;

  carsDataArray = [
    { name: 'Ford', year: 1980 },
    { name: 'Pontiac', year: 1970 },
    { name: 'Dodge', year: 1990 },
    { name: 'Chevrolet', year: 2000 }
  ];

  addCar() {
    this.addCarStatus = true;
    this.carsDataArray.push({
      name: this.inputCarName,
      year: this.inputCarYear
    });
    this.inputCarName = null;
    this.inputCarYear = null;
  }

}
