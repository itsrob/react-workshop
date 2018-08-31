import React from 'react'

const ViewportWidthProvider = Component => {
  class ViewportWidth extends React.Component {

    constructor(props){
      super(props)

      this.state = {'width': window.innerWidth}
    }

    componentDidMount() {
      window.addEventListener("resize", this.updateSize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateSize);

    }

    updateSize = () => {
      this.setState({'width': window.innerWidth})
    }


    render() {
      return (
        // Replace `viewportWidth` prop value with the actual viewportWidth
        <Component {...this.props} viewportWidth={this.state.width} />
      )
    }
  }

  return ViewportWidth
}

export default ViewportWidthProvider
