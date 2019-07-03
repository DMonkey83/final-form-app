import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as a from '../actions'
import App from '../components/App'

const mapStatePostsToProps = state => {
  return {
    message: state.message
  }
}

const mapDispatchPostsToProps = dispatch => {
  return bindActionCreators(a, dispatch)
}

export default connect(
  mapStatePostsToProps,
  mapDispatchPostsToProps
)(App)
