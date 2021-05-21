import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { logout } from '../redux/auth/authActions'
const Logout = ({sty, logout}) => {
  const history = useHistory()
  const click = () => {
    logout(history)
  }
  return (
    <div className={sty} onClick={click}>
      Logout
    </div>
  )
}

export default connect(null,{
  logout
})(Logout)
