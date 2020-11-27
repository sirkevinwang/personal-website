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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };
  }
  render() {
    let toggleMenu = () => this.setState({ isMenuOpen: !this.state.isMenuOpen });
    return (
      <Router>
        <div className="bg-black font-sans">
          <Menu isMenuOpen={this.state.isMenuOpen} toggleMenu={toggleMenu}></Menu>
          <NavBar isHamburgerOpen={this.state.isMenuOpen} setHamburgerOpen={toggleMenu}></NavBar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/mylist">
              <MyList />
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
