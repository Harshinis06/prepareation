import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CustomstructuralDirDirective } from './customstructural-dir.directive';
import { PermissionCustomDirDirective } from './permission-custom-dir.directive';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-constrolflow-customdirective',
  standalone: true,
  imports: [NgFor,CustomstructuralDirDirective,PermissionCustomDirDirective,FormsModule],
  templateUrl: './constrolflow-customdirective.component.html',
  styleUrl: './constrolflow-customdirective.component.scss'
})
export class ConstrolflowCustomdirectiveComponent {
  isAdmin: boolean = false;
  isEmployee: boolean = false;
  isGuest: boolean = false;

  // admin() {
  //   this.isEmployee=false
  //   this.isGuest=false
  //  return this.isAdmin = true
  //   console.log(this.isAdmin);

  // }
  // employee() {
  //   this.isAdmin=false
  //   this.isGuest=false
  //   return this.isEmployee = true
  //   console.log(this.isEmployee);

  // }
  // guest() {
  //   this.isEmployee=false
  //   this.isAdmin=false
  //  return this.isGuest = true
  // }
  role: string = ''

  admin() {
    return this.role = 'admin'
  }

  employee() {
    return this.role = 'employee'
  }

  guest() {
    return this.role = 'guest'
  }

  employees = [
    { id: 1, name: 'Harshini' },
    { id: 2, name: 'Bharath' },
    { id: 3, name: 'Arun' }
  ]

  trackBy(index:number,employees:any){
    return employees.id
  }

    isVisible:boolean=false

    showOff(){
      this.isVisible=!this.isVisible
    }

    currentUserRole='employee'

    currentUser(event:Event){
      const value=event.target as HTMLInputElement
      console.log(value.value);
      this.currentUserRole=value.value
    }
  }
