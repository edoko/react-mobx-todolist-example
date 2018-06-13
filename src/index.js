import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoMain from "./components/TodoMain";
import TodoStore from "./stores/TodoStore";

const store = new TodoStore();

ReactDOM.render(<TodoMain store={store} />, document.getElementById("root"));
