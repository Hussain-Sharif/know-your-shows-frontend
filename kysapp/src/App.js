import React,{Suspense} from 'react'
import { BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary'
import NotFound from './components/NotFound'

const Login=React.lazy(()=>import("./components/Login"))
const Signup=React.lazy(()=>import("./components/Signup"))
const Home=React.lazy(()=>import("./components/Home"))
const LoadingPage=React.lazy(()=>import("./components/LoadingPage"))
// import Likes from './components/Likes'
// import Remainders from './components/Remainders'



function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingPage></LoadingPage>}>
          <Switch>
            <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/likes" component={Likes}/>
            <Route exact path="/remainders" component={Remainders}/> */}
            <Route  path="/not-found" component={NotFound}/>
              <Redirect to="not-found"/>
          </Switch>
         </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
