import React, { Component } from "react";

import s from "./Todos.scss";

export default class Todos extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div>
        <h1>My Todos</h1>
        {todos.map((todo, index) => (
          <span className={s.todo} key={index}>
            {todo}
          </span>
        ))}
      </div>
    );
  }
}
