import React from 'react';
import { Turn as Hamburger } from 'hamburger-react'
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="p-8 flex fixed items-center justify-between w-screen z-50">
      <div>
        <Link to="/"><Logo className="h-8 w-16 cursor-pointer" alt="Logo. Click to go home."></Logo></Link>
      </div>
      <div>
        <Hamburger color="white" direction="right" toggled={props.isHamburgerOpen} toggle={props.setHamburgerOpen}></Hamburger>
      </div>
    </nav>
  );
};

export default NavBar;