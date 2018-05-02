import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import AboutMain from './AboutMain';

function App() {
  return (
    <div id="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={AboutMain} />
      </Switch>
    </div>
  )
}

export default App;
