import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Character from './components/Character/Character';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Route exact path="/" component={Menu} />
     <Route path="/character" component={Character} />
    </div>
    </BrowserRouter>
  );
}

export default App;
