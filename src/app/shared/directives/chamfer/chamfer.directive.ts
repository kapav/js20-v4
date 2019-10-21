import {Directive, Input, ElementRef, HostListener} from '@angular/core'

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }

  constructor(private el: ElementRef) {}

}
