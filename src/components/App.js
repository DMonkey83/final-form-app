import React from 'react'

import MyForm from './MyForm'

const App = props => {
  return (
    <div>
      <MyForm updateValues={props.updateValues} />
    </div>
  )
}

export default App
