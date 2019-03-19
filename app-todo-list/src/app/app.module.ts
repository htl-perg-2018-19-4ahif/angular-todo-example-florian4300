import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatIconModule
} from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NameInputComponent } from "./name-input/name-input.component";
import { OutputTodosComponent } from "./output-todos/output-todos.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { MainViewComponent } from "./main-view/main-view.component";
@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    OutputTodosComponent,
    AddTodoComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
