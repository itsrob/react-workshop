const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state , count:  applyIfValid(state.count, action.input)} 
    case 'RESET':
      return { count: 0 } 
    default:
      return state
  }
}

function applyIfValid(oldValue, input){
  const newValue = oldValue + parseInt(input)
  return (newValue > -25) && (newValue < 25) ? newValue : oldValue
}

export default counterReducer
