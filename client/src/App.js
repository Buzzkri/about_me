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
    <>
    <Navbar />
  <Switch>
      <Route exact path ='/' component={Home} />
      <Route exact path ='/about' component={About} />
      <Route exact path ='/contact' component={Contact} />
      <Route exact path ='/hobbies' component={Hobbies} />
      <Route exact path ='/portfolio' component={Portfolio} />
      <Route exact path ='/skills' component={Skills} />
      <Route component={NoMatch} />
  </Switch>
  </>
)

export default App;
