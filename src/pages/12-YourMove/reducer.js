const INITIAL_STATE = {
  messages: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      let newMessages = state.messages.slice();
      newMessages.push(action.message)
      return {...state, messages: newMessages}

    default:
      return state
  }
}

export default reducer
