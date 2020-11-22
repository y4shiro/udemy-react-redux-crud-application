import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = "Hi, Tom!";
    const dom = <h1>{greeting}</h1>;

    return (
      <React.Fragment>
        {dom}
        <h2>こんにちは</h2>
      </React.Fragment>
    );
  }
}

export default App;
