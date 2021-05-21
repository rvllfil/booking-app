import { connect } from 'react-redux'
import { Redirect, Route, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const PrivateRoute = ({  
  comp: Component,
  auth: { isAuthenticated, isLoading }, 
  ...rest 
}) => {
  const history = useHistory()
  useEffect(() => {
    if(!isAuthenticated && !isLoading) {
      history.push('/login')
    }
  }, [isAuthenticated, isLoading, history])
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !isLoading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)