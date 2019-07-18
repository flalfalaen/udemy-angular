import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {
  @Input() hoverColor = 'green';
  @Input() defaultColor = 'transparent';

  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    // this.renderer.addClass(this.element.nativeElement, 'white-text');
    // this.element.nativeElement.style.backgroundColor = 'grey';
  }
  // @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
  //   console.log(event);
  // }
  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    // this.renderer.addClass(this.element.nativeElement, 'white-text');

    // this.background = 'red';

    this.background = this.hoverColor;
  }
  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    // this.renderer.removeClass(this.element.nativeElement, 'white-text');

    // this.background = 'transparent';

    this.background = this.defaultColor;
  }
}
