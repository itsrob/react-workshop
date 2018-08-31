import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter, resetCounter} from './actions'

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render (){

    return (
    <div>
      <div>{this.props.count}</div>
      <button onClick={() => this.props.incrementCounter(2)}>+2</button>
      <button onClick={() => this.props.incrementCounter(-1)}>-</button>
      <button onClick={this.props.resetCounter}>RESET</button>
      <input onChange={(e) => this.setState({'input': e.target.value})}></input>
      <button onClick={() => this.props.incrementCounter(this.state.input || 0)}>+ INPUT</button>
      <button onClick={() => this.props.incrementCounter(this.state.input ? (this.state.input * (-1)) : 0)}>- INPUT</button>
    </div>
  )
}
}



const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: (i) => dispatch(incrementCounter(i)),
  resetCounter: () => dispatch(resetCounter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
