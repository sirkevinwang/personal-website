import ContactCover from '../assets/images/contact.jpg';
import { SocialIcon } from 'react-social-icons';
import { textColor } from 'tailwindcss/defaultTheme';

const Contact = () => {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="p-8">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="text-white font-bold text-6xl">Contact</h2>
        <div className="my-2 h-5 bg-yellow-400 w-60"></div>
        <div className="grid grid-flow-col justify-items-center">
          <SocialIcon className="h-40" fgColor="#ffffff" url="http://linkedin.com/in/yunxiaowang" />
          <SocialIcon className="h-40" fgColor="#ffffff" bgColor="1e1e1e" url="https://github.com/sirkevinwang" />
          <SocialIcon className="h-40" fgColor="#ffffff" url="mailto:kevin.wang11@outlook.com" />
          <SocialIcon className="h-40" fgColor="#ffffff" url="https://www.facebook.com/wang.kevin.5264/" />
          <SocialIcon className="h-40" fgColor="#ffffff" url="https://twitter.com/wangyunxiao1" />
          <SocialIcon className="h-40" fgColor="#ffffff" bgColor="#C13584" url="https://instagram.com/kevinwang11?r=nametag" />
          <SocialIcon className="h-40" fgColor="#ffffff" url="https://www.youtube.com/channel/UCADdWxyxjhyvbKngYUFol_Q?view_as=subscriber" />
          <SocialIcon className="h-40" fgColor="#ffffff" bgColor="#FFFC00" url="https://www.snapchat.com/add/kevin_wang1" />
        </div>
      </div>
      <div className="hidden lg:block">
        <img className="object-cover h-full" alt="Kevin posing as signalman on USS Midway" src={ContactCover}></img>
      </div>
    </div>
  );
};

export default Contact;