import React, { Component } from "react";
class HelloClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <div className="border shadow text-center p-5 m-5">
          <h4>Class Component</h4>

          <h1>Counter : {this.state.counter}</h1>
          <button className="btn btn-success" onClick={this.increment}>
            Increment
          </button>
        </div>
      </>
    );
  }
}
export default HelloClass;
