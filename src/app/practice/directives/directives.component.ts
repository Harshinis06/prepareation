import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, SelectControlValueAccessor } from '@angular/forms';
import { HighliteCustomDirDirective } from './highlite-custom-dir.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, NgClass, NgSwitch, NgSwitchCase, NgStyle ,HighliteCustomDirDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  value: boolean = true;
  inputValue: string = '';
  showInputValue: string = '';

  submit() {
    this.showInputValue = this.inputValue
  }
  @Input()
  employeeName: string = '';

  stateValue = '';

  employeeAge: number = 0;
  employees = [
    {
      name: 'employee1',
      age: 12,
      status: 'working'
    },
    {
      name: 'employee2',
      age: 13,
      status: 'off'
    },
    {
      name: 'employee3',
      age: 14,
      status: 'WFH'
    }
  ]

  increment() {
    this.employeeAge++;
  }
  decrement() {
    this.employeeAge--;
  }

  transaction = [
    {
      id: 1,
      amount: '40k',
      status: 'Success'
    },
    {
      id: 2,
      amount: '20k',
      status: 'Pending'
    },
    {
      id: 3,
      amount: '50k',
      status: 'Failed'
    },
  ]

  selectedValue(event: Event) {
    const value = event.target as HTMLSelectElement
    console.log(value);
    this.stateValue = value.value
    console.log(this.stateValue);
    //  switch (this.stateValue) {
    //   case 'Success':
    //     this.colorValue = 'green';
    //     break;
    //   case 'Failed':
    //     this.colorValue = 'Red';
    //     break;
    //   case 'Pending':
    //     this.colorValue = 'yellow';
    //     break;
    // }
    // console.log(this.colorValue);
    
  }

  colorValue: string = ''
  getColor(stateValue:string): string{
   //const option = this.stateValue
    switch (stateValue) {
      case 'Success':
        return 'green';
      case 'Failed':
        return 'Red';
      case 'Pending':
        return 'yellow';
    }
    return 'transperant'
  }

  clickOn(){
    console.log('showing');
    
  }

  clickking(){
    console.log('clicking');
    
  }

  isDissbled:string| null=null;

  toggle(){
    console.log(this.isDissbled);
    
    this.isDissbled=this.isDissbled  == null ? '': this.isDissbled==''? null :''
  }

}

