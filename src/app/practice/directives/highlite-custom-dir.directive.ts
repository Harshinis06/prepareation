import { style } from '@angular/animations';
import { Directive, ElementRef, Host, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Directive({
  selector: '[appHighliteCustomDir]',
  standalone: true
})
export class HighliteCustomDirDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    //  this.elementRef.nativeElement.style.color = 'pink';
  }

  // @HostListener('mouseover') 
  // onHover(){
  //   console.log('mouse over');

  //    this.renderer.setStyle(
  //     this.elementRef.nativeElement,
  //     'backgroundColor',
  //     'yellow',

  //    )
  // }

  // @HostListener('mouseout')
  // hoverOut(){
  //   console.log('mouse out');

  //   this.renderer.removeStyle(
  //     this.elementRef.nativeElement,
  //     'backgroundColor',
  //   )
  // }

  @HostListener('mouseenter')
  mouseEnter() {
    console.log('mouse Enter');

    this.renderer.addClass(
      this.elementRef.nativeElement, 'highlight'
    )
  }

  @HostListener('mouseleave')
  mouseLeave() {
    console.log('mouse Leave');

    this.renderer.removeClass(
      this.elementRef.nativeElement, 'highlight'
    )
  }


  // @HostBinding('style.backgroundColor') 'bgcolor':string = 'red'
  // @HostListener('click' , ['$event']) 
  // onClick(){
  //   this.bgcolor= 'violet'
  // }

  // @HostBinding('class.active')
  // isActive=false

  // @HostListener('click' ,['$event'])
  // onclickActive(){
  //   console.log(this.isActive);

  //   this.isActive=!this.isActive
  // }

  // @HostBinding('attr.disabled')
  // disabled: string | null = null

  // @HostListener('click', ['$event'])
  // onclick() {
  //   console.log(this.disabled);

  //   this.disabled = this.disabled === null ? '' : null
  // }

  @Input()
  isDisbled:string|null=null;

  @HostBinding('attr.disabled')
  get disabled(){
    return this.isDisbled;
  }
}

