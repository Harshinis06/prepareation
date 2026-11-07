import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NgIf } from '@angular/common';
import { PracticeComponent } from './practice/practice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TasksComponent,NgIf,PracticeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'prepareation';
  // serachValue:string='';

  // getSearchValue(event:string){
  //   this.serachValue=event;
  // }

  // valueFormChild:string='';

  // getData(event:string){
  //   this.valueFormChild=event;
  //   console.log(event);
  // }

  
}
