import React from 'react';
import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react';

const NavBar = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <nav className="p-4">
      <img></img>
      <Hamburger toggled={isHamburgerOpen} toggle={setHamburgerOpen}></Hamburger>
    </nav>
  );
};

export default NavBar;