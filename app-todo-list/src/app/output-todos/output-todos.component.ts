import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { ITodoItem } from "../interfaces";
@Component({
  selector: "app-output-todos",
  templateUrl: "./output-todos.component.html",
  styleUrls: ["./output-todos.component.css"]
})
export class OutputTodosComponent implements OnInit {
  @Input() todos: ITodoItem[] = [];
  @Output() addChange = new EventEmitter();
  @Output() deleteTodoChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  editTodo(todo) {
    this.addChange.emit(todo);
  }
  deleteTodo(todo) {
    this.deleteTodoChange.emit(todo);
  }
}
