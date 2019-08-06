import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Navbar />
      <Route exact path ='/' component={Home} />
      <Route exact path ='/components/About' component={About} />
      <Route exact path ='/components/Contact' component={Contact} />
      <Route exact path ='/components/Hobbies' component={Hobbies} />
      <Route exact path ='/components/Portfolio' component={Portfolio} />
      <Route exact path ='/components/Skills' component={Skills} />
      <Route component={NoMatch} />
  </Switch>
)

export default App;
