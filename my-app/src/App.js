import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Character from './components/Character/Character';
import No404 from './components/No404';
import Select_location from './components/Map/Select_location';
import Bag from './components/Bag/Bag';
import Select_list from './components/Character/Select_list';

function App(props) {
console.log(props.on)
  return (
    <BrowserRouter>
        <div className="App">
        <Route exact path="/" render={() => <Menu />} />
        <Route exact path="/character" render={() => <Character />} />
        <Route path="/character/gun_select" render={() => <Select_list item='guns' slot='gun' guns={props.storage.data.character.guns} />} />
        <Route path="/character/suit_select" render={() => <Select_list item='suits' slot='suit' suits={props.storage.data.character.suits} />} />
        <Route path='/character/artefacts_select'
            render = { () =>
            (window.location + '').slice(-2) == '/1' ? <Select_list item='artefacts' slot = 'art1' artefacts={props.storage.data.character.artefacts} /> :
            (window.location + '').slice(-2) == '/2' ? <Select_list item='artefacts' slot = 'art2' artefacts={props.storage.data.character.artefacts} /> :
            (window.location + '').slice(-2) == '/3' ? <Select_list item='artefacts' slot = 'art3' artefacts={props.storage.data.character.artefacts} /> :
            (window.location + '').slice(-2) == '/4' ? <Select_list item='artefacts' slot = 'art4' artefacts={props.storage.data.character.artefacts} /> :
            (window.location + '').slice(-2) == '/5' ? <Select_list item='artefacts' slot = 'art5' artefacts={props.storage.data.character.artefacts} /> :
            <No404 />} />
        <Route exact path="/map" render={() => <Select_location locations={props.storage.data.locations} />} />
        <Route exact path="/bag" render={() => <Bag bag={props.storage.data.bag} />} />
        </div>
    </BrowserRouter>
  );
}

export default App;
