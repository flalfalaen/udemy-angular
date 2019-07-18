import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent {

  constructor() {

  }
  // 3.14
  // addCarStatus = false;
  // inputCarName = null;
  // inputCarYear = null;

  carsDataArray = [
    { name: 'Ford', year: 1980 },
    // { name: 'Pontiac', year: 1970 },
    // { name: 'Dodge', year: 1990 },
    // { name: 'Chevrolet', year: 2000 }
  ];

  updateCarDataArray(carsData: { name: string, year: number}) {
    this.carsDataArray.push(carsData);
  }

  changeCarsName() {
    this.carsDataArray[0].name = 'New car name';
  }

  deleteCar() {
    this.carsDataArray.splice(0, 1);
  }
  // 3.14
  // addCar() {
  //   this.addCarStatus = true;
  //   this.carsDataArray.push({
  //     name: this.inputCarName,
  //     year: this.inputCarYear
  //   });
  //   this.inputCarName = null;
  //   this.inputCarYear = null;
  // }

}
