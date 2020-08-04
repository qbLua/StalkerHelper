import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { player } from './components/Logics/Logics';
import firebase from "firebase";
import storage from './redux/Storage.js';
player.set_null();

const firebaseConfig = {
  apiKey: "AIzaSyCZztZvJbQKXGjDr0f1eOe-CsLBor07CP8",
  authDomain: "stalkerhelper-fcdec.firebaseapp.com",
  databaseURL: "https://stalkerhelper-fcdec.firebaseio.com",
  projectId: "stalkerhelper-fcdec",
  storageBucket: "stalkerhelper-fcdec.appspot.com",
  messagingSenderId: "512741900383",
  appId: "1:512741900383:web:a4c11622b7c4a32d96dbea"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App storage={storage} on={2}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
