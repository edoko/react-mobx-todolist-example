import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
export default class TodoList extends Component {
  render() {
    const store = this.props.store;
    const todo = this.props.todo;

    return (
      <div className="TodoList">
        <span
          style={
            todo.completed
              ? {
                  textDecoration: "line-through",
                  color: "#ccc",
                  fontWeight: "bold"
                }
              : { fontWeight: "bold" }
          }
          onClick={() =>
            todo.completed === false
              ? (todo.completed = true)
              : (todo.completed = false)
          }
        >
          {todo.text}
        </span>
        <br />
        <button onClick={() => store.remove(todo.id)}>삭제</button>
      </div>
    );
  }
}
