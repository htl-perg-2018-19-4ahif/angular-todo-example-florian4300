import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface ITodoItem {
  id: number;
  assignedTo?: string;
  description: string;
  done?: boolean
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  
  todos : ITodoItem[] = [];
  showOnlyAssignedToMe = true;
  showOnlyUndone = true;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  async getAllTodos(){
    const todos = await this.httpClient.get <ITodoItem[]>('http://localhost:8080/api/todos').toPromise();
    if(this.showOnlyUndone && this.showOnlyAssignedToMe){
      this.todos = todos.filter(function(todo: ITodoItem){
        return todo.assignedTo === "me" && !todo.done;
      });
    }else if(this.showOnlyUndone){
      this.todos = todos.filter(function(todo: ITodoItem){
        return !todo.done;
      });
    }else if (this.showOnlyAssignedToMe){
      this.todos = todos.filter(function(todo: ITodoItem){
        return todo.assignedTo === "me";
      });
    }else{
      this.todos = todos;
    }
  }
  async addTodo(){
    await this.httpClient.post('http://localhost:8080/api/todos',
    {
      "description": "Shopping"
    }).toPromise();
  }
  
  /*onTodoChange(){
    this.ontodosChange.emit(this.todos);
  }*/
}
