import React, { Component } from "react";

import { getTodos } from "@root/api/todos";

import AddTodo from "./AddTodo";
import s from "./Root.scss";
import Todos from "./Todos";

export default class Root extends Component {
  state = { todos: [] };

  async componentDidMount() {
    this.setState({
      todos: await getTodos()
    });
  }

  handleAddTodo = value => {
    this.setState({
      todos: [...this.state.todos, value]
    });
  };

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}
