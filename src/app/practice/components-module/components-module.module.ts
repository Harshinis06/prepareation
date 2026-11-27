import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BindingsComponent } from '../bindings/bindings.component';
import { ValidatorsDirective } from '../../shared/validators.directive';
import { DirectivesComponent } from '../directives/directives.component';
import { TemplateRenderingComponent } from '../template-rendering/template-rendering.component';
import { ConstrolflowCustomdirectiveComponent } from '../constrolflow-customdirective/constrolflow-customdirective.component';
import { PipesComponent } from '../pipes/pipes.component';



@NgModule({
  imports: [
    CommonModule,
    BindingsComponent,
    PipesComponent,ValidatorsDirective,DirectivesComponent,
    TemplateRenderingComponent,ConstrolflowCustomdirectiveComponent,FormsModule
  ],
  exports: [
    BindingsComponent,
    ValidatorsDirective,
    DirectivesComponent,
    TemplateRenderingComponent,
    ConstrolflowCustomdirectiveComponent,
    PipesComponent
  ]
})
export class ComponentsModuleModule { }
