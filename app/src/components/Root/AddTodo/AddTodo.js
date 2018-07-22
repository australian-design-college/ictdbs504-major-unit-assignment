import React, { Component } from "react";

import { addTodo } from "@root/api/todos";

import Form from "./Form";

export default class AddTodo extends Component {
  handleSubmit = async value => {
    await addTodo(value);
    this.props.onAddTodo(value);
  };

  render() {
    return <Form onSubmit={this.handleSubmit} />;
  }
}
