import React from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Character from './components/Character/Character';
import No404 from './components/No404';
import Select_location from './components/Map/Select_location';
import Bag from './components/Bag/Bag';
import Select_list from './components/Character/Select_list';
import Note_list from './components/Note/Note_list';
import Result from './components/Result/Result';
/*
Раздаю компонентам только те массивы данных и методы, которые им необходимы
Так как страницы выбора оружия, костюмов и артефактов выглядят одинаково,
их рисует одна компонента - Select_list
Многие компоненты принимают пропсы, которые напрямую им не нужны,
но они необходимы тем компонентам, которые они будут вызывать
*/
function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
        <Route exact path="/" render={() => <Menu />} />
        <Route exact path="/character" render={() => <Character />} />
        <Route path="/character/gun_select" render={() => <Select_list item='guns' slot='gun' guns={props.storage.data.character.guns} fun={props.storage.countAmmo} />} />
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
        <Route exact path="/bag" render={() => <Bag bag={props.storage.data.bag.list} save={props.storage.data.bag.save} change={props.storage.changeBag} fun={props.storage.countAmmo} />} />
        <Route exact path="/note" render={() => <Note_list notes={props.storage.data.notes} add={props.storage.addNote} context={props.storage} />} />
        <Route path='/result'
            render = { () =>
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((loc) => {
                return (window.location + '').slice(-2) == `/${loc}` ? <Result location={loc} locations={props.storage.data.locations} bag={props.storage.data.character.bag} /> : ''
              })} />
        </div>
    </BrowserRouter>
  );
}

export default App;
