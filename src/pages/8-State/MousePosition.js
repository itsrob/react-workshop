import React from 'react'

class MousePosition extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      mouseX: 'N/A',
      mouseY: 'N/A'
  }

    window.addEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = (event) => {
    this.setState(
      {
        mouseX: event.clientX,
        mouseY: event.clientY
      }
    )
  }
  render() {
    return (
      // Adjust this to log the current mouse position on screen.
      // Hint: window.addEventListener('mousemove', …)
      // Hint: event.clientX, event.clientY
      <p>Mouse is currently at position {this.state.mouseX}:{this.state.mouseY}.</p>
    )
  }
}

export default MousePosition
