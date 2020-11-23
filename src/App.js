import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    return (
      <>
      <NavBar></NavBar>
      <Home></Home>
      </>
    );
  }
}

export default App;
