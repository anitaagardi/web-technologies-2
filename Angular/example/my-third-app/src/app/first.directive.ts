import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by changeText Directive.";
  }

}
