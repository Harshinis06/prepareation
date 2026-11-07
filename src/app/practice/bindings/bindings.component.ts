import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.scss'
})
export class BindingsComponent {
counter: number = 0;
  searchText: string = '';
  ngSearchText: string = "";
  submitText: string = '';
  subInput: any
  
  @Input()
  recivingUserName:string=''

  @Output()
  onChangeValue=new EventEmitter()

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

  Searching(event: Event) {
    const input = event.target as HTMLInputElement
    this.searchText = input.value
  }

  subText(event: Event) {
    this.subInput = event.target as HTMLInputElement

  }
  display() {
    this.submitText = this.subInput.value
  }

  onType(event:Event){
    const input = event.target as HTMLInputElement
    this.recivingUserName=input.value
    console.log(this.recivingUserName);
    
    this.onChangeValue.emit(this.recivingUserName)
  }
}


