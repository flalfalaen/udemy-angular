import {Directive, ElementRef, OnInit, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {
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
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.renderer.addClass(this.element.nativeElement, 'white-text');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.renderer.removeClass(this.element.nativeElement, 'white-text');
  }
}
