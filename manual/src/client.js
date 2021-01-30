import React from "react";
import { hydrate } from "react-dom";
import App from "./app";

hydrate(
  <App gists={window.data.gists || []} />,
  document.getElementById("app")
);
