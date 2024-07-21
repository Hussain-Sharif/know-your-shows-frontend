import React,{Suspense} from 'react'
import { BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary'
import NotFound from './components/NotFound'

const Login=React.lazy(()=>import("./components/Login"))
const Signup=React.lazy(()=>import("./components/Signup"))
const Home=React.lazy(()=>import("./components/Home"))
const LoadingPage=React.lazy(()=>import("./components/LoadingPage"))
const Likes=React.lazy(()=>import("./components/Likes"))
const Remainders=React.lazy(()=>import("./components/Remainders"))
const ProtectedRoute=React.lazy(()=>import("./components/ProtectedRoute.js"))




function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingPage></LoadingPage>}>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <ProtectedRoute exact path="/" component={Home}/>
            <ProtectedRoute exact path="/likes" component={Likes}/>
            <ProtectedRoute exact path="/remainders" component={Remainders}/>
            <Route  path="/not-found" component={NotFound}/>
            <Redirect to="not-found"/>
          </Switch>
         </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
