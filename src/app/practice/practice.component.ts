import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BindingsComponent } from './bindings/bindings.component';
import { ValidatorsDirective } from '../shared/validators.directive';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateRenderingComponent } from './template-rendering/template-rendering.component';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [FormsModule,BindingsComponent,ValidatorsDirective,DirectivesComponent,
    TemplateRenderingComponent,
  ],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {
  sendinguserName:string = "senderNAme";

  valueGet(event:string){
    console.log(event);
    this.sendinguserName =event;
  }

  
}

