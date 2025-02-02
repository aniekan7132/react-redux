import { useDispatch, useSelector } from 'react-redux';

import { couterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state  => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(couterActions.increment())
    // dispatch({ type: "increment"})
  }

  const increaseHandler  = () => {
    dispatch(couterActions.increase(10)) // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
    // dispatch({ type: "increase", amount: 5})
  }

  const decrementHandler = () => {
    dispatch(couterActions.decrement())
    // dispatch({ type: "decrement"})
  }
  const toggleCounterHandler = () => {
    dispatch(couterActions.toggleCounter())
    // dispatch({ type: "toggle"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

 export default Counter;

// // Class base component
// import { Component } from "react";
// import { useDispatch, useSelector, connect } from "react-redux";

// import classes from "./Counter.module.css";

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
