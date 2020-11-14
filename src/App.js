import React, {useState} from 'react';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Navbar/Sidebar/Sidebar'

import HomePage from './pages/Home'
import About from './pages/About'
import Game from './pages/Game'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/about-us' exact component={About} />
          <Route path='/play-quiz' exact component={Game} />
        </Switch>
      </Router>
  );
}

export default App;