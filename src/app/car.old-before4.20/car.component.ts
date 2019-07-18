import {
  Component,
  Input,
  ElementRef,
  ContentChild,
  OnInit, OnChanges,
  SimpleChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

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
export class CarComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('carDataCarComponent') carsData: { name: string, year: number };
  @Input('name') name: string;
  @ContentChild('carHeading', {static: true}) carHeading: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  // carName = 'Ford';
  // carYear = '2017';
  //
  // getName() {
  //   return this.carName;
  // }

  // private carDataCarComponent = false; // example
}

