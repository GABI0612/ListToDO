import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.css']
})
export class TodoInputAddItemsComponent {
  @Output() public emitItemTaskList = new EventEmitter<string>();

  public itemTaskList: string = "";

  public submitItemTaskList(){
    this.itemTaskList = this.itemTaskList.trim();
    if(this.itemTaskList) {
      this.emitItemTaskList.emit(this.itemTaskList);
      this.itemTaskList = "";
    }
  }

}
