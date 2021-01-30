import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import path from "path";
import App from "./app";
import template from "./template";

import fetch from "isomorphic-fetch";

const app = express();

const mypath = path.resolve(__dirname, "../dist/public");

app.use(express.static(mypath));

app.get("/", (req, res) => {
  fetch("https://api.github.com/users/gaearon/gists")
    .then((res) => res.json())
    .then((gists) => {
      gists = [{ id: 1, description: "This is atest" }];
      const body = renderToString(<App gists={gists} />);
      const html = template(body, { gists });
      res.send(html);
    });
});

app.listen(3000, () => console.log("[*] listening on port 3000"));
