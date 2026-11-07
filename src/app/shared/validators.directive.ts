import { Directive, ElementRef } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValidators]',
  standalone: true
})
export class ValidatorsDirective {

  constructor(el:ElementRef) {
    console.log(el);
    console.log(el.nativeElement);
    el.nativeElement.style.background="red"
    
   }
  
}
