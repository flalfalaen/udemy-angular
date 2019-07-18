import { Component } from '@angular/core';

@Component({
  selector: 'app-cars', //selector
  // selector: '[app-cars]', //attribute
  // selector: '.app-cars', //class
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  // 2.11 lesson
  // objectsArray1 = [ {id: 42, name: 'simpleName1'}, {id: 48, name: 'simpleName2'}, {id: 47, name: 'simpleName3'} ];

  constructor() {

  }

  // canAddCar = false; //lesson 2.6
  addCarStatus = false;

  carNameInput = null;
  // carYear = '';
  carsArray = ['Ford', 'Pontiac', 'Dodge', 'Chevrolet', 'Mazda', 'KIA'];
  carsYears = [1980, 1970, 1990, 2000];
  // 2.13 lesson
  dateArray = [
    new Date(2012, 1, 1),
    new Date(2015, 2, 2),
    new Date(2017, 7, 5),
    new Date(2019, 7, 1)
  ];

  addCar() {
    // this.addCarStatus = 'Car added';
    this.addCarStatus = true;
    this.carsArray.push(this.carNameInput);
    this.carNameInput = null;
  }
  // 2.12 lesson
  // carBigNameFiltering(carName: string) {
  //   return carName.length > 5;
  // }
  // carSmallNameFiltering(carName: string) {
  //   return carName.length < 4;
  // }
  // 2.7 - 2.9
  // inputText = 'please enter your text here';

  // 2.8 var3.2
  // onKeyUp(event) {
  //   console.log(event);
  //   this.inputText = event.target.value;
  // }
  // 2.8 var3.1
  // onKeyUp(event) {
  //   console.log(event);
  //   if (event.code === 'Enter') {
  //     this.inputText = event.target.value;
  //   }
  // }
  // 2.8 var2
  // onKeyUp(value) {
  //   console.log(value);
  //   this.inputText = value;
  // }
    // 2.8 var1
  // onKeyUp(event: Event) {
  //   console.log(event);
  //   this.inputText = (event.target as HTMLInputElement).value;
  // }
        // lesson 2.6
  // constructor() {
  //   setTimeout(() => {
  //     this.canAddCar = true;
  //   }, 4000);
  // }

}
