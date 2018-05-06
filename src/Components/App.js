import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import AboutMain from './About/AboutMain';
import ContactMain from './ContactMain';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div id="App">
      <Header />
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
