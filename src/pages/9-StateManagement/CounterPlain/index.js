import React from 'react'

const increment = state => ({ count: state.count + 2 })
const decrement = state => ({ count: state.count - 1 })

class CounterPlain extends React.Component {
  state = { count: 0 }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button type="button" onClick={() => this.setState(increment)}>
          +2
        </button>
        <button type="button" onClick={() => this.setState(decrement)}>
          -
        </button>
      </div>
    )
  }
}

export default CounterPlain
