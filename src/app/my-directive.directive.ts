import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color = 'red';
   }

}
