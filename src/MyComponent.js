import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/action/counterActions";

function MyComponent(props) {
  return (
    <div>
      <h1>Counter: {props.count}</h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
