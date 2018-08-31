import React from 'react'

class Form extends React.Component {

  constructor(props){
    super(props)

    this.state = {'message': ''}
  }

  render() {
    return (
      <div>
        <label htmlFor="message">What do you want to send? ({280 - this.state.message.length})</label>
        <div>
          <textarea id="message" placeholder="Type in…" onChange={(event) => this.setState({'message': event.target.value})} />
        </div>
        <button type="button" disabled={this.state.message.length > 280} onClick={() => {this.props.addMessage(this.state.message)}} >Send</button>
      </div>
    )
  }
}

export default Form
