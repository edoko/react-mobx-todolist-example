import { observable, action } from "mobx";
import uuid from "uuid";

export default class TodoStore {
  @observable
  todos = [
    {
      id: uuid(),
      text: "가나다라마바사아자차카타파하",
      completed: false
    }
  ];

  @action
  add(text) {
    this.todos.push({
      text,
      id: uuid(),
      completed: false
    });
  }

  @action
  remove(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
