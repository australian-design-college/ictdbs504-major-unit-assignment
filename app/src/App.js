import React from "react";
import ReactDOM from "react-dom";

import "./App.scss";

// sets up axios configuration
import "./init";

// looks for src/components/Root/index.js
import Root from "components/Root";

ReactDOM.render(<Root />, document.getElementById("reactRoot"));
