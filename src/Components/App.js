import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import AboutMain from './AboutMain';
import ContactMain from './ContactMain';
import Footer from './Footer';

function App() {
  return (
    <div id="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={AboutMain} />
        <Route path='/contact' component={ContactMain} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
