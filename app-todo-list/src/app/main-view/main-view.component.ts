import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ITodoItem } from "../interfaces";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.css"]
})
export class MainViewComponent implements OnInit {
  @Input() name = "";
  @Output() todosChange = new EventEmitter();
  todos: ITodoItem[] = [];

  @Output() addChange = new EventEmitter();
  showOnlyAssignedToMe = false;
  showOnlyUndone = false;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getAllTodosAndUpdate();
  }
  async getAllTodosAndUpdate() {
    const todos = await this.httpClient
      .get<ITodoItem[]>("http://localhost:8080/api/todos")
      .toPromise();
    this.todos = todos;
    this.onTodoChange();
  }
  async addTodo() {
    this.addChange.emit();
  }
  get filteredTodos() {
    let todos = [];
    if (this.showOnlyUndone && this.showOnlyAssignedToMe) {
      todos = this.todos.filter((todo: ITodoItem) => {
        return todo.assignedTo === this.name && !todo.done;
      });
    } else if (this.showOnlyUndone) {
      todos = this.todos.filter((todo: ITodoItem) => {
        return !todo.done;
      });
    } else if (this.showOnlyAssignedToMe) {
      todos = this.todos.filter((todo: ITodoItem) => {
        return todo.assignedTo === this.name;
      });
    } else {
      todos = this.todos;
    }
    return todos;
  }
  onTodoChange() {
    this.todosChange.emit(this.filteredTodos);
  }
}
