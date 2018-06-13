import React, { Component } from "react";
import { observer } from "mobx-react";

import TodoList from "./TodoList";

@observer
export default class TodoMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleClick = () => {
    const store = this.props.store;
    store.add(this.state.text);
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const store = this.props.store;
    return (
      <div className="TodoView">
        <h1>할일목록 with Mobx</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={e => this.handleClick(e)}>추가</button>
        <div>
          {store.todos.map((todo, i) => (
            <TodoList key={i} store={store} todo={todo} />
          ))}
        </div>
      </div>
    );
  }
}
