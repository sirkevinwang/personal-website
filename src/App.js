import React from 'react';

import {
  BrowserRouter as Router
} from "react-router-dom";
import { BreakpointProvider } from 'react-socks';

import Routes from './components/Routes';
import NavBar from './components/NavBar';
import Menu from './pages/Menu';
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
      <BreakpointProvider>
        <Router>
          <NavBar isHamburgerOpen={this.state.isMenuOpen} setHamburgerOpen={toggleMenu} closeMenu={closeMenu}></NavBar>
          <div className="bg-black font-sans h-full">
            <Menu isMenuOpen={this.state.isMenuOpen} toggleMenu={toggleMenu}></Menu>
            <Routes db={db}></Routes>
          </div>
        </Router>
      </BreakpointProvider>
    );
  }
}

export default App;
