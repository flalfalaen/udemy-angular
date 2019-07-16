import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  addCarStatus = false;
  inputCarName = null;
  inputCarYear = null;
  @Output('addCarDataToArray') carsData = new EventEmitter<{name: string, year: number}>();

  addCar() {
    this.addCarStatus = true;
    this.carsData.emit({
      name: this.inputCarName,
      year: this.inputCarYear
    });
    this.inputCarName = null;
    this.inputCarYear = null;
  }

  constructor() { }

}
