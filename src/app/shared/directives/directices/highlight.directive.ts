import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = '#607c63';
  }

  @Input() backgroundColor: string;
  @Input() color: string;

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    this.element.nativeElement.style.backgroundColor = this.color;
  }
}
