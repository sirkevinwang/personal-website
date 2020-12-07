import React, { useState, useEffect }from 'react';
import { Turn as Hamburger } from 'hamburger-react'
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [scrollState, setScrollState] = useState("nav-top")
  
  useEffect(() => {
    let listener = null
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 60) {
        if (scrollState !== "nav-scrolled") {
          setScrollState("nav-scrolled")
        }
      } else {
        if (scrollState !== "nav-top") {
          setScrollState("nav-top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  return (
    <nav className={"nav p-4 md:p-8 flex fixed items-center justify-between w-screen z-50 " + scrollState}>
      <div>
        <Link to="/" onClick={props.closeMenu}><Logo className="h-7 w-16 md:h-8 cursor-pointer" alt="Logo. Click to go home."></Logo></Link>
      </div>
      <div>
        <Hamburger color="white" direction="right" toggled={props.isHamburgerOpen} toggle={props.setHamburgerOpen}></Hamburger>
      </div>
    </nav>
  );
};

export default NavBar;