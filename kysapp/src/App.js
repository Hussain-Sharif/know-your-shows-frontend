import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary'
import Login from './components/Login'
import Signup from './components/Signup'
// import Home from './components/Home'
// import Favorites from './components/Favorites'
// import Remainders from './components/Remainders'
// import NotFound from './components/NotFound'

import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>
         <Route exact path="/signup" component={Signup}/>
          {/* <Route exact path="/all" element={<Home/>}/>
          <Route exact path="/favorites" element={<Favorites/>}/>
          <Route exact path="/remainders" element={<Remainders/>}/>
          <Route  path="/not-found" element={<NotFound/>}/> */}

        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
