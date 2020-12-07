import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import MyList from './pages/MyList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import firebase from "firebase/app";
import { firebaseConfig } from "./secret.firebase";
require("firebase/database");

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };
  }
  render() {
    let toggleMenu = () => this.setState({ isMenuOpen: !this.state.isMenuOpen });
    let closeMenu = () => this.setState({ isMenuOpen: false });
    return (
      <Router>
        <NavBar isHamburgerOpen={this.state.isMenuOpen} setHamburgerOpen={toggleMenu} closeMenu={closeMenu}></NavBar>
        <div className="bg-black font-sans h-full">
          <Menu isMenuOpen={this.state.isMenuOpen} toggleMenu={toggleMenu}></Menu>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/mylist">
              <MyList db={db} />
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
