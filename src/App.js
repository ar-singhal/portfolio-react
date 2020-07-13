import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigationbar from './components/Navigationbar';

import Footer from './components/Footer';



import Home from './pages/Home';
import About from './pages/About';
import Contactus from './pages/Contactus';

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Navigationbar />

    <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contactus" exact component={Contactus} />
        </Switch>

    
    <Footer />
    </Router>
     
    </div>
  );
}

export default App;
