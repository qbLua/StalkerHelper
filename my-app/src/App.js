import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Character from './components/Character/Character';
import Gun_select from './components/Character/Gun/Gun_select';
import Suit_select from './components/Character/Suit/Suit_select';
import Artefacts_select from './components/Character/Artefacts/Artefacts_select';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Route exact path="/" component={Menu} />
     <Route exact path="/character" component={Character} />
     <Route path="/character/gun_select" component={Gun_select} />
     <Route path="/character/suit_select" component={Suit_select} />
     <Route path="/character/artefacts_select" component={Artefacts_select} />
    </div>
    </BrowserRouter>
  );
}

export default App;
