import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  // template: `
  // <h1>Single Car</h1>
  // <p>Lorem ipsum</p>
  // `,
  styleUrls: ['./car.component.css']
  // styles: [`
  //   h1 {
  //     color: aqua;
  //   }
  // `]
})
export class CarComponent  {
  carName = 'Ford';
  carYear = '2017';

  getName() {
    return this.carName;
  }
}

