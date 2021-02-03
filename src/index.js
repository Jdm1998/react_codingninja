import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//
import App from './App';
//import cartItem from './cartItem';

import firebase from 'firebase/app';
import 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyDd7UlQguG1Uz9yzpE8rCK-p43HAcdQWVM",
    authDomain: "cart-f9e8b.firebaseapp.com",
    projectId: "cart-f9e8b",
    storageBucket: "cart-f9e8b.appspot.com",
    messagingSenderId: "435998343362",
    appId: "1:435998343362:web:aeb338f0584ffdcad03b5b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);