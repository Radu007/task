import React from 'react';
import './App.css';

import 'normalize.css'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

import Header from './Components/Header/Header'
import SocialNav from './Components/SocialNav/SocialNav'
import MainScreen from './Screens/MainScreen/MainScreen';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
		 <SocialNav />
     <div className="app-main-screen">
			 <Header />
		 <Router>
			 <Switch>
				 <Route component={MainScreen} path='/' />
			 </Switch>
		 </Router>
		 
		 </div>
		 <Footer />
    </div>
  );
}

export default App;
