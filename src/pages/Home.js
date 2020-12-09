import Swiper from 'react-id-swiper';

import 'swiper/swiper.scss';

import CoverVideo from '../components/CoverVideo';

import VidPolaris from '../videos/vid-polaris.mp4';
import VidArgus from '../videos/vid-argus.mp4';
 

const Home = () => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <div className="vh-100 w-screen items-center justify-center table">
      {/* <h2 className="table-cell align-middle text-center text-white font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"><span className="un">Don't</span> do the right thing.</h2> */}
      <Swiper {...params} className="">
          <CoverVideo video={VidPolaris} name="Polaris"></CoverVideo>
          <CoverVideo video={VidArgus} name="Argus"></CoverVideo>
      </Swiper>
    </div>
  );
};

export default Home;