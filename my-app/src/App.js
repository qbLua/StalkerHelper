import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Character from './components/Character/Character';
import Select from './components/Character/Select';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Route exact path="/" component={Menu} />
     <Route exact path="/character" component={Character} />
     <Route path="/character/gun_select" component={Select} />
    </div>
    </BrowserRouter>
  );
}

export default App;
