import { useSpring, animated } from 'react-spring';

const Menu = (props) => {
  const menuFade = useSpring({ opacity: props.isMenuOpen ? 1 : 0, from: { opacity: 0 }, config: { duration: 225 } })
  return (
    <animated.div style={menuFade} className="bg-yellow-400 h-screen w-screen text-center fixed flex">
      <div className="m-auto font-extrabold text-5xl text-white">
        <ul>
          <li className="py-8"><a className="cursor-pointer hover:text-black">Projects</a></li>
          <li className="py-8"><a className="cursor-pointer hover:text-black">About</a></li>
          <li className="py-8"><a className="cursor-pointer hover:text-black">Contact</a></li>
          <li className="py-8"><a className="cursor-pointer hover:text-black">Kevin's List</a></li>
        </ul>
      </div>
    </animated.div>
  );
};

export default Menu;