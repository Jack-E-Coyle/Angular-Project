import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  toDoList: Todo[] = [];

  message: string = "Error retrieving todos";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }

  getToDos() {
  this.apiService.getPosts().subscribe({
    next: (value: Todo[])=> this.toDoList = value,
    complete: () => console.log(this.toDoList),
    error: (mess) => this.message = mess
  })
  }
}
