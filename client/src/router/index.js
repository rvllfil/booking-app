import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
          <Home />
        </Route>
        <Route exact path='/grooming'>
          <Grooming />
        </Route>
        <Route exact path='/bedah'>
          <Bedah />
        </Route>
        <Route exact path='/pemeriksaan'>
          <Pemeriksaan />
        </Route>
        <Route exact path='/rawat-inap'>
          <RawatInap />
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}

export default Router
