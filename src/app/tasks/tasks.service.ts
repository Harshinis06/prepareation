import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http:HttpClient
  ) { }

  url='https://jsonplaceholder.typicode.com/users';
  getUseres(){
   return this.http.get(this.url)
  }
}
