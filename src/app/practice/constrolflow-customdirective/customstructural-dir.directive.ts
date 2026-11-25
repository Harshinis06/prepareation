import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomstructuralDir]',
  standalone: true
})
export class CustomstructuralDirDirective {

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) { }
  hasValue: boolean = false;


  // @Input() set appCustomstructuralDir(condition: boolean) {
  //   if (condition && !this.hasValue) {
  //     // const ref=this.templateRef.createEmbeddedView
  //     // this.viewContainerRef.insert(ref)
  //     this.viewContainerRef.createEmbeddedView(this.templateRef)
  //     console.log(this.hasValue);
      
  //     this.hasValue=true
  //     console.log(this.hasValue);
      
  //   }
  //   else {
  //     console.log(condition);
  //     this.viewContainerRef.createEmbeddedView(this.ref);
      
  //     //this.viewContainerRef.clear()
  //     this.hasValue=false
  //   }
  // }

  @Input() appCustomstructuralDir: boolean = false

  @Input() appCustomstructuralDirElse!:TemplateRef<unknown>

  ngOnChanges() {
      this.viewContainerRef.clear()
    if (this.appCustomstructuralDir) {
      console.log(this.appCustomstructuralDir);

      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
    else{
      console.log(this.appCustomstructuralDirElse);
    
     this.viewContainerRef.createEmbeddedView(this.appCustomstructuralDirElse)
      
    }
  }


}
