import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  addCarStatus = false;

  @Output('addCarDataToArray') carsData = new EventEmitter<{name: string, year: number}>();
  @ViewChild('carYearInput', {static: true}) carYearInput: ElementRef;

  addCar(carNameElement: HTMLInputElement) {
    this.addCarStatus = true;
    this.carsData.emit({
      name: carNameElement.value,
      year: +this.carYearInput.nativeElement.value
    });
    carNameElement.value = null;
    this.carYearInput.nativeElement.value = null;
  }

  constructor() { }

}
