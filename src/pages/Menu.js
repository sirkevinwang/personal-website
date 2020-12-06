import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom";
const Menu = (props) => {
  const menuFade = useSpring({ opacity: props.isMenuOpen ? 1 : 0, from: { opacity: 0 }, config: { duration: 225 } })
  return (
    <animated.div style={menuFade} className="bg-yellow-500 h-screen w-screen text-center fixed flex">
      <div className="m-auto font-extrabold text-3xl md:text-4xl lg:text-5xl text-white">
        <ul>
          <li className="py-8"><Link to="/" onClick={props.toggleMenu} className="cursor-pointer hover:text-black">Projects</Link></li>
          <li className="py-8"><Link to="/about" onClick={props.toggleMenu} className="cursor-pointer hover:text-black">About</Link></li>
          <li className="py-8"><Link to="/contact" onClick={props.toggleMenu} className="cursor-pointer hover:text-black">Contact</Link></li>
          <li className="py-8"><Link to="/mylist" onClick={props.toggleMenu} className="cursor-pointer hover:text-black">Kevin's List</Link></li>
        </ul>
      </div>
    </animated.div>
  );
};

export default Menu;