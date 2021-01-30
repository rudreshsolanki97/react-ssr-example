import React from "react";
import fetch from "isomorphic-fetch";

import { array } from "prop-types";

class App extends React.Component {
  static async getInitialProps() {
    const gist = await fetch("https://api.github.com/users/gaearon/gists");
    const gistJson = await gist.json();
    return {
      gists: gistJson,
    };
  }

  render() {
    return (
      <ul>
        {this.props.gists.map(({ description, id }) => (
          <li key={id}>{description}</li>
        ))}
      </ul>
    );
  }
}

App.propTypes = {
  gists: array,
};

export default App;
