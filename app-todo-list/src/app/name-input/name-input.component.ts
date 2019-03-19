import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IPerson } from "../interfaces";

@Component({
  selector: "app-name-input",
  templateUrl: "./name-input.component.html",
  styleUrls: ["./name-input.component.css"]
})
export class NameInputComponent implements OnInit {
  @Input() name = "";
  @Input() people: IPerson[] = [];
  @Output() nameChange = new EventEmitter<string>();
  @Output() nameEntered = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  enterName() {
    this.nameChange.emit(this.name);
    this.nameEntered.emit();
  }
}
