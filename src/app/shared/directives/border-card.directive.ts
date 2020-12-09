import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private element: ElementRef) {
    this.GREYCOLOR = '#808080';
    this.GREENCOLOR = '#008000';
    this.setBorder(this.GREYCOLOR);
    this.setHeight(180);
  }

  GREYCOLOR: string ;
  GREENCOLOR: string ;

  @Input('appBorderCard') borderColor;
  private setBorder(color: string) {
    const border = ' solid 4px ' + color;
    this.element.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.element.nativeElement.style.height = height + 'px';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || '#008000');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.GREYCOLOR);
  }
}
