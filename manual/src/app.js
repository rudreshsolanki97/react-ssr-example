import React from "react";
import { array } from "prop-types";

const App = ({ gists }) => {
  return (
    <ul>
      {gists.map(({ description, id }) => (
        <li key={id}>{description}</li>
      ))}
    </ul>
  );
};

App.propTypes = {
  gists: array,
};

export default App;
