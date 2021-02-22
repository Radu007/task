import React from 'react';
import './App.css';

import 'normalize.css'

import Header from './Components/Header/Header'
import SocialNav from './Components/SocialNav/SocialNav'
import MainScreen from './Screens/MainScreen/MainScreen';

function App() {
  return (
    <div className="app">
     <Header />
		 <SocialNav />
		 <MainScreen />
    </div>
  );
}

export default App;
