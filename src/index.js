import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ThemeProvider } from 'styled-components'

import { item } from './styles/styles'
import App from './containers/App'
import rootRedux from './reducers'

const store = createStore(rootRedux, composeWithDevTools(applyMiddleware()))

const theme = {
  item: item
}

ReactDom.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
