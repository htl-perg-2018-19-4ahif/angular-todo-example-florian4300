import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ITodoItem, IPerson } from "../interfaces";
import { doesNotThrow } from "assert";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"]
})
export class AddTodoComponent implements OnInit {
  @Input() todo: ITodoItem;
  @Input() people: IPerson[];
  @Output() addedTodo = new EventEmitter();
  @Output() backToMain = new EventEmitter();

  done = false;
  description = "";
  assignedTo = "";

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    if (this.todo) {
      this.description = this.todo.description;
      this.assignedTo = this.todo.assignedTo;
      this.done = this.todo.done;
    }
  }
  async addTodo() {
    if (this.todo) {
      await this.httpClient
        .patch<ITodoItem>("http://localhost:8080/api/todos/" + this.todo.id, {
          description: this.description,
          assignedTo: this.assignedTo,
          done: this.done
        })
        .toPromise();
      this.addedTodo.emit();
    } else {
      const todo = await this.httpClient
        .post<ITodoItem>("http://localhost:8080/api/todos", {
          description: this.description,
          assignedTo: this.assignedTo
        })
        .toPromise();

      if (this.done) {
        await this.httpClient
          .patch<ITodoItem>("http://localhost:8080/api/todos/" + todo.id, {
            description: this.description,
            assignedTo: this.assignedTo,
            done: this.done
          })
          .toPromise();
      }
      this.addedTodo.emit();
    }
  }
  backToMainComponent() {
    this.backToMain.emit();
  }
}
