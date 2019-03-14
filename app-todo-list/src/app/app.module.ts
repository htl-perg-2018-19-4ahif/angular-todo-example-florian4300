import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { InputComponent } from "./input/input.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, InputComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
