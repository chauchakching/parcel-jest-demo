import React from "react";
import ReactDOM from "react-dom";
import Thing from '/Thing'

class HelloMessage extends React.Component {
  render() {
    return <Thing />;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage />, mountNode);