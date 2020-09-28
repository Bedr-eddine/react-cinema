import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Series from './components/Series';


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/series' component={Series}/>
          <Route exact path='/movies' component={Movies}/>
          <Route component={()=><h3>Error 404: Page not found</h3>}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
