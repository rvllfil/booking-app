import { connect } from 'react-redux'
import { Redirect, Route, useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners'

const AdminRoute = ({ 
  comp: Component,
  auth: { user, isLoading }, 
  ...rest 
}) => {
  const [isAdmin, setIsAdmin] = useState(true)
  const history = useHistory()
  useEffect(() => {
    try {
      if (!isLoading && user.role === 'admin') {
        setIsAdmin(true)
      } else if (!isLoading && user.role !== 'admin') {
        setIsAdmin(false)
      }
    } catch (e) {
      setIsAdmin(false)
    }
    if(!isAdmin) {
      history.push('/login')
    }
  }, [user, isLoading, isAdmin, history])
  return (
    <>
      { isLoading ?
        <div className='flex h-screen items-center justify-center w-full'> 
          <BounceLoader color='#EC4899' loading={isLoading} size={150} /> 
        </div>:
        (<Route
          {...rest}
          render={props =>
            !isLoading && !isAdmin ? (     
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

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AdminRoute)