import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-angular';

  headerText = 'Создание собственной диррективы';
  items = [1, 2, 3, 4, 5];
  current = 1;

  onClick(switchedNumber: number) {
    this.current = switchedNumber;
  }
}
