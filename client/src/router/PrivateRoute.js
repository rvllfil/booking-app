import { connect } from 'react-redux'
import { Redirect, Route, useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners'

const PrivateRoute = ({ 
  comp: Component,
  auth: { user, isLoading }, 
  ...rest 
}) => {
  const [isMember, setIsMember] = useState(true)
  const history = useHistory()
  useEffect(() => {
    try {
      if (!isLoading && user.role === 'member') {
        setIsMember(true)
      } else if (!isLoading && user.role !== 'member') {
        setIsMember(false)
      }
    } catch (e) {
      setIsMember(false)
    }
    if(!isMember) {
      history.push('/login')
    }
  }, [user, isLoading, isMember, history])
  return (
    <>
      { isLoading ?
        <div className='flex h-screen items-center justify-center w-full'> 
          <BounceLoader color='#EC4899' loading={isLoading} size={150} /> 
        </div>:
        (<Route
          {...rest}
          render={props =>
            !isLoading && !isMember ? (     
            <Redirect to="/login" />
            ) : (
              <Component {...props} />
            )
          }
        />)
      }
    </>
  )
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)