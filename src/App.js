import React, {useState} from 'react';

import Navbar from './pages/components/Navbar/Navbar';
import Sidebar from './pages/components/Navbar/Sidebar/Sidebar'

import HomePage from './pages/HomePage'
import About from './pages/About'
import SelectQuiz from './pages/SelectQuiz'
import PlayQuiz from './pages/PlayQuiz'

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
          <Route path='/play-quiz' exact component={PlayQuiz} />
          <Route path='/select-quiz' exact component={SelectQuiz} />
        </Switch>
      </Router>
  );
}

export default App;