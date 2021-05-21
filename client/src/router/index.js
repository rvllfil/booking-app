import { connect } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import About from '../pages/About'
import BedahAdmin from '../pages/admin/BedahAdmin'
import Bedah from '../pages/Bedah'
import Grooming from '../pages/Grooming'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Pemeriksaan from '../pages/Pemeriksaan'
import RawatInap from '../pages/RawatInap'
import Register from '../pages/Register'
import Profil from '../pages/Profil'
import PrivateRoute from './PrivateRoute'

const Router = ({isAuthenticated}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          { isAuthenticated ?
          <Redirect to='/home' /> :
          <Redirect to='/login' /> }
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>

        <PrivateRoute path='/home' comp={Home} />
        <PrivateRoute exact path='/grooming' comp={Grooming}/>
        <PrivateRoute exact path='/bedah' comp={Bedah}/>
        <PrivateRoute exact path='/pemeriksaan' comp={Pemeriksaan}/>
        <PrivateRoute exact path='/rawat-inap' comp={RawatInap}/>
        
        <PrivateRoute exact path='/tentang' comp={About}/>
        <PrivateRoute exact path='/profil' comp={Profil}/>

        <Route exact path='/admin'>
          <BedahAdmin />
        </Route>


      </Switch>
    </BrowserRouter>
  )
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,  
})

export default connect(mapStateToProps)(Router)
