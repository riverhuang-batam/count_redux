import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from './action'


class App extends Component{

  
  render(){

  return (
    <div className="App">
      <h1>{this.props.counter >= 10 ? `overlimit ${this.props.counter}`: this.props.counter}</h1>
      {this.props.islogged ? "you already login" : "you haven't login yet"}
      <button onClick={this.props.increment}>+</button>
      <button onClick={this.props.decrement}>-</button>
    </div>
    
  );
}
}
const mapStateToProps = (state) =>{
  return{
    counter: state.counter,
    islogged: state.islogged
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
