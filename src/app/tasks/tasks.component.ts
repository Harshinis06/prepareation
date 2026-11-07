import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from './tasks.service';
import { Subscription } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { reverseSrting } from './customPipe';
import { Form, FormBuilder, FormGroup, FormsModule, NgForm, NgModel, } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, reverseSrting, NgIf,FormsModule],
  providers: [TasksService],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  sub!: Subscription;
  constructor(private task: TasksService, private fb: FormBuilder) { }
  @Input() title: string = '';

  value = 'reverse string';
  users: any;
  user: any;
  searchValue: string = '';
  listValues: string = ''

  @Output() emitteedValue: EventEmitter<string> = new EventEmitter();

  @Output() passData: EventEmitter<string> = new EventEmitter();

  passValues: string = 'value from child';


  search(event: Event) {
    const inputValue = event.target as HTMLInputElement;
    this.searchValue = inputValue.value;
    this.emitteedValue.emit(this.searchValue)
  }

  passDataToParent() {
    this.passData.emit(this.passValues)
  }

  ngOnInit() {
  }


  getUsers() {
    this.sub = this.task.getUseres().subscribe({
      next: (res) => {
        this.users = res;
        this.user = this.users
        console.log(res);
      }
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // searchList(event: Event) {
  //   const inputValue = event.target as HTMLInputElement;
  //   this.listValues = inputValue.value;
  //   this.user = this.users.filter((item: any) => item.name.toLowerCase().includes(this.listValues.toLocaleLowerCase()))

  //   if (this.listValues == '') {
  //     this.user = this.users
  //   }
  // }

submitTemplateForm(data:NgForm){
 console.log(data);
 console.log(data.value);
 
}

}
