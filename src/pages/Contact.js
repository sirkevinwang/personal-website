import ContactCover from '../assets/images/contact.jpg';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  return (
    <div className="vh-100 lg:grid lg:grid-cols-2">
      <div className="p-4 md:p-8">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="text-left text-white font-bold text-4xl xl:text-5xl 2xl:text-6xl"><span className="border-b-8 md:border-b-12 lg:border-b-12 border-yellow-500">Contact</span></h2>
        <div className="block pt-12 lg:hidden lg:py-0">
          <img alt="Kevin posing as signalman on USS Midway." src={ContactCover}></img>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-6 pt-12 gap-10 justify-items-center z-0">
          <SocialIcon fgColor="#ffffff" style={{height: 80, width: 80}} url="http://linkedin.com/in/yunxiaowang" />
          <SocialIcon fgColor="#ffffff" style={{height: 80, width: 80}} bgColor="4d4d4d" url="https://github.com/sirkevinwang" />
          <SocialIcon fgColor="#ffffff" style={{height: 80, width: 80}} url="mailto:kevin.wang11@outlook.com" />
          <SocialIcon fgColor="#ffffff" style={{height: 80, width: 80}} url="https://www.facebook.com/wang.kevin.5264/" />
          <SocialIcon fgColor="#ffffff" style={{height: 80, width: 80}} url="https://twitter.com/wangyunxiao1" />
          <SocialIcon fgColor="#ffffff" style={{height: 80, width: 80}} bgColor="#C13584" url="https://instagram.com/kevinwang11?r=nametag" />
          <SocialIcon fgColor="#ffffff" style={{height: 80, width: 80}} url="https://www.youtube.com/channel/UCADdWxyxjhyvbKngYUFol_Q?view_as=subscriber" />
          <SocialIcon fgColor="#ffffff" style={{height: 80, width: 80}} bgColor="#FFFC00" url="https://www.snapchat.com/add/kevin_wang1" />
          <SocialIcon fgColor="#ffffff" style={{height: 80, width: 80}} url="https://open.spotify.com/user/wangyunxiao?si=mjAwgpC8Q0Kumg_QM1_w9g" />
        </div>
      </div>
      <div className="hidden lg:block">
        <img className="object-cover h-screen" alt="Kevin posing as signalman on USS Midway." src={ContactCover}></img>
      </div>
    </div>
  );
};

export default Contact;