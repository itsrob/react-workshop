import React from 'react'

const InputKeyLogger = props => (
  <div onKeyPress={(e) => console.log(e.which)}>
    <label htmlFor="input-key-logger">Make me log key code on type</label>
    <div>
      <input type="text" id="input-key-logger" />
    </div>
  </div>
)

export default InputKeyLogger
