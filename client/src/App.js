import { Provider } from 'react-redux';
import Router from './router' 
import store from './redux/store'
import { loadUser } from './redux/auth/authActions'
import { useEffect } from 'react';


function App() {
  const dep = store.dispatch(loadUser())
  useEffect(() => {
    return () => {
      store.dispatch(loadUser())
    }
  }, [dep])
  
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
