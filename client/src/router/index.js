import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import BedahAdmin from '../pages/admin/BedahAdmin'
import Bedah from '../pages/Bedah'
import Grooming from '../pages/Grooming'
import Home from '../pages/Home'
import Pemeriksaan from '../pages/Pemeriksaan'
import RawatInap from '../pages/RawatInap'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Navbar/>
          <Home />
        </Route>
        <Route path='/home'>
          <Navbar/>
          <Home />
        </Route>
        <Route exact path='/grooming'>
          <Navbar backButton={true}/>
          <Grooming />
        </Route>
        <Route exact path='/bedah'>
          <Navbar backButton={true}/>
          <Bedah />
        </Route>
        <Route exact path='/pemeriksaan'>
          <Navbar backButton={true}/>
          <Pemeriksaan />
        </Route>
        <Route exact path='/rawat-inap'>
          <Navbar backButton={true}/>
          <RawatInap />
        </Route>
        <Route exact path='/tentang'>
          <Navbar />
          <About />
        </Route>


        <Route exact path='/admin'>
          <BedahAdmin />
          
        </Route>

        
      </Switch>
    </BrowserRouter>
  )
}

export default Router
