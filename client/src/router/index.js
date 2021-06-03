import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from '../pages/About'
import Bedah from '../pages/Bedah'
import Grooming from '../pages/Grooming'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Pemeriksaan from '../pages/Pemeriksaan'
import RawatInap from '../pages/RawatInap'
import Register from '../pages/Register'
import Profil from '../pages/Profil'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'
import LogRoute from './LogRoute'
import HomeAdmin from '../pages/admin/HomeAdmin'
import PengajuanDetail from '../pages/PengajuanDetail'
import JanjiTemu from '../pages/JanjiTemu'
import BedahAdmin from '../pages/admin/BedahAdmin'
import RawatInapAdmin from '../pages/admin/RawatInapAdmin'
import GroomingAdmin from '../pages/admin/GroomingAdmin'
import PVisitAdmin from '../pages/admin/PVisitAdmin'
import PKlinikAdmin from '../pages/admin/PKlinikAdmin'
import Members from '../pages/admin/Members'

const Router = ({isAuthenticated}) => {
  return (
    <Switch>
      <Route exact path='/'>
        { isAuthenticated ?
        <Redirect to='/home' /> :
        <Redirect to='/login' /> }
      </Route>
      <LogRoute exact path='/login' comp={Login}/>
        
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
      <PrivateRoute exact path='/janji-temu' comp={JanjiTemu} />
      

      <AdminRoute exact path='/admin' comp={HomeAdmin}/>
      <AdminRoute exact path='/admin/bedah' comp={BedahAdmin}/>
      <AdminRoute exact path='/admin/rawat-inap' comp={RawatInapAdmin}/>
      <AdminRoute exact path='/admin/grooming' comp={GroomingAdmin}/>
      <AdminRoute exact path='/admin/pemeriksaan-visit' comp={PVisitAdmin}/>
      <AdminRoute exact path='/admin/pemeriksaan-klinik' comp={PKlinikAdmin}/>
      <AdminRoute exact path='/admin/members' comp={Members}/>

      <AdminRoute path='/pengajuan/:slug/:id' comp={PengajuanDetail}/>

    </Switch>
  )
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Router)
