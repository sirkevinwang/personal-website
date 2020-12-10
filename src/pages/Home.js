import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';

// Import Swiper styles

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import CoverVideo from '../components/CoverVideo';

import VidPolaris from '../videos/vid-polaris.mp4';
import VidArgus from '../videos/vid-argus.mp4';

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar, A11y]);

const Home = () => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 6e3,   
    },
    effect: "slide",
    loop: !0,
    speed: 500
  }
  return (
    <>
    <Swiper {...params}>
      <SwiperSlide >
        <div className="h-full flex justify-center items-center">
          <div><h2 className="text-center text-white font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"><span className="un">Don't</span> do the right thing.</h2></div>
        </div>
      </SwiperSlide>
          <SwiperSlide>
          {({ isActive }) => (
            <CoverVideo video={VidPolaris} name="Polaris"></CoverVideo>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <CoverVideo video={VidArgus} name="Argus"></CoverVideo>
          )}
        </SwiperSlide>
    </Swiper>
      <div className="swiper-button-next text-yellow-500 pr-8"></div>
      <div className="swiper-button-prev text-yellow-500 pl-8"></div>
    </>
  );
};

export default Home;