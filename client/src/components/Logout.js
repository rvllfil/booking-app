import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { logout } from '../redux/auth/authActions'
const Logout = ({sty, logout}) => {
  const history = useHistory()
  const click = () => {
    logout(history)
  }
  return (
    <div className={`${sty} flex flex-row items-center`} onClick={click}>
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
      <div className='ml-3'>Logout</div> 
    </div>
  )
}

export default connect(null,{
  logout
})(Logout)
