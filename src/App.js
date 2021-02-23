import React from 'react';
import './App.css';

import 'normalize.css'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

import Header from './Components/Header/Header'
import SocialNav from './Components/SocialNav/SocialNav'
import MainScreen from './Screens/MainScreen/MainScreen';

function App() {
  return (
    <div className="app">
     <Header />
		 <SocialNav />
		 <Router>
			 <Switch>
				 <Route component={MainScreen} path='/' />
			 </Switch>
		 </Router>
    </div>
  );
}

export default App;
