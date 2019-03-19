import { Component, OnInit } from "@angular/core";
import { ITodoItem, IPerson } from "./interfaces";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  curName = "";
  curTodos: ITodoItem[] = [];
  temp: ITodoItem;
  add = false;
  main = false;
  output = false;
  curPeople: IPerson[] = [];

  constructor(private httpClient: HttpClient) {}
  showAddComponent(todo: ITodoItem | undefined) {
    if (todo) {
      this.temp = todo;
      this.curTodos.push(todo);
    }

    this.add = true;
    this.main = false;
    this.output = false;
  }
  ngOnInit() {
    this.getPeople();
  }
  showMainComponent() {
    this.main = true;
    this.output = true;
    this.add = false;
  }
  updateTodos(todos: ITodoItem[]) {
    this.curTodos = todos;
  }
  async getPeople() {
    const people = await this.httpClient
      .get<IPerson[]>("http://localhost:8080/api/people")
      .toPromise();
    this.curPeople = people;
  }
  async deleteTodo(todo: ITodoItem) {
    await this.httpClient
      .delete<IPerson[]>("http://localhost:8080/api/todos/" + todo.id)
      .toPromise();
    this.curTodos.splice(this.curTodos.indexOf(todo), 1);
  }
}
