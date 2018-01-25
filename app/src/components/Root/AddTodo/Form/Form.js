import React, { Component } from "react";

import s from "./Form.scss";

export default class Form extends Component {
  handleEnter = evt => {
    if (evt.which === 13 && evt.target.value.trim() !== "") {
      const value = evt.target.value.trim();
      evt.target.value = "";
      this.props.onSubmit(value);
    }
  };

  render() {
    return <input autoFocus className={s.input} onKeyDown={this.handleEnter} type="text" />;
  }
}
