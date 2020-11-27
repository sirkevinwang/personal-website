import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';

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
      <div className="bg-black font-sans">
        <Menu isMenuOpen={this.state.isMenuOpen} ></Menu>
        <NavBar isHamburgerOpen={this.state.isMenuOpen} setHamburgerOpen={toggleMenu}></NavBar>
        <Home></Home>
      </div>
    );
  }
}

export default App;
