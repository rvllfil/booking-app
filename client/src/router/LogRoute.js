import { connect } from 'react-redux'
import { Redirect, Route, useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners'

const LogRoute = ({ 
  comp: Component,
  auth: { user, isLoading }, 
  ...rest 
}) => {
  const [status, setStatus] = useState('')
  const history = useHistory()
  useEffect(() => {
    try {
      if (!isLoading && user.role === 'member') {
        setStatus('member')
      } else if (!isLoading && user.role === 'admin') {
        setStatus('admin')
      }
    } catch (e) {
      setStatus('')
    }
    if (status === 'admin') {
      history.push('/admin')
    } else if (status === 'member') {
      history.push('/home')
    } 
  }, [user, isLoading, status, history])
  return (
    <>
      { isLoading ?
        <div className='flex h-screen items-center justify-center w-full'> 
          <BounceLoader color='#EC4899' loading={isLoading} size={150} /> 
        </div>:
        (<Route
          {...rest}
          render={props =>
            !isLoading && !status ? (     
              <Component {...props} />
            ) : (  
              !isLoading && status === 'admin' ? <Redirect to='/admin'/> :
              !isLoading && status === 'member'? <Redirect to='/home'/> :
              <div></div>
            )
          }
        />)
      }
    </>
  )
}

LogRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(LogRoute)