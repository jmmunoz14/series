import React from 'react';

import { Switch, Route , BrowserRouter } from 'react-router-dom';

import List from './components/List'

import Navbar from './components/Navbar'

import './App.css';

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <BrowserRouter >
      <Switch>
        <Route exact path='/' component={List}/>
        
      </Switch>
      </BrowserRouter >
    </main>
  );
}

export default App;
