const initialState = {
  message: '',
  values: {}
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MESSAGE':
      return {
        ...state,
        message: action.message
      }
    case 'UPDATE_VALUES':
      return {
        ...state,
        values: action.values
      }
    default:
      return state
  }
}

export default messageReducer
