export const loadBooks = () => {
  return {
    type: 'LOAD_MESSAGE',
    message: 'hello'
  }
}

export const updateValues = values => {
  return {
    type: 'UPDATE_VALUES',
    values
  }
}
