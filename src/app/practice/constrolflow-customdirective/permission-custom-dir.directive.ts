import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermissionCustomDir]',
  standalone: true
})
export class PermissionCustomDirDirective {

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() appPermissionCustomDir !:string[]
  @Input() appPermissionCustomDirElse !: TemplateRef<unknown>;
  @Input() appPermissionCustomDirUserRole !:string
  ngOnChanges() {
    this.viewContainerRef.clear()
    console.log(this.appPermissionCustomDir);
    console.log(this.appPermissionCustomDirUserRole);
    
    // switch (this.appPermissionCustomDirUserRole) {
    //   case 'admin':
    //     this.viewContainerRef.createEmbeddedView(this.templateRef)
    //     break;
    //   case 'employee':
    //     this.viewContainerRef.createEmbeddedView(this.templateRef)
    //     break;
    //   default:
    //     this.viewContainerRef.createEmbeddedView(this.appPermissionCustomDirElse)
    //     break;

    // }

    if(this.appPermissionCustomDir.includes(this.appPermissionCustomDirUserRole)){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
    else if(
      // this.appPermissionCustomDirUserRole=='guests'&&
      this.appPermissionCustomDirElse){
       this.viewContainerRef.createEmbeddedView(this.appPermissionCustomDirElse)
    }
  }

}
