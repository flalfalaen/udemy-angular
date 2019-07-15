import { Component } from '@angular/core';

@Component({
  selector: 'app-cars', //selector
  // selector: '[app-cars]', //attribute
  // selector: '.app-cars', //class
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  // canAddCar = false; //lesson 2.6

  addCarStatus = false;

  constructor() {

  }

  addCar() {
    // this.addCarStatus = 'Car added';
    this.addCarStatus = true;
  }

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
