import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      seconds: props.seconds ? props.seconds : 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.increment, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  increment = () => {
    this.setState({
      seconds: this.state.seconds + 1
    })
  }

  pluraliseSeconds = () => {
    return this.state.seconds === 1 ? 'second' : 'seconds'
  }

  render() {
    return (
      <p>
        <span role="img" aria-label="hand waving">
          👋🏻
        </span>{' '}
        I have been rendered for {this.state.seconds} {this.pluraliseSeconds()}.
      </p>
    )
  }
}

export default Timer
