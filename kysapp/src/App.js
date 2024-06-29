import { BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
// import Likes from './components/Likes'
// import Remainders from './components/Remainders'
import NotFound from './components/NotFound'

import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>
         <Route exact path="/signup" component={Signup}/>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/likes" component={Likes}/>
          <Route exact path="/remainders" component={Remainders}/> */}
          <Route  path="/not-found" component={NotFound}/>
            <Redirect to="not-found"/>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
