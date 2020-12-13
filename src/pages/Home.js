import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Breakpoint } from 'react-socks';
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';
import CoverVideo from '../components/CoverVideo';
import ProjectGrid from '../components/ProjectGrid';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import CoverArgus from '../assets/images/covers/cover-argus.png';
import CoverPolaris from '../assets/images/covers/cover-polaris.png';
import CoverBoostedTouch from '../assets/images/covers/cover-boosted-touch.png';
import VidArgus from '../assets/videos/vid-argus.mp4';
import VidPolaris from '../assets/videos/vid-polaris.mp4';
import VidBoostedTouch from '../assets/videos/vid-boosted-touch.mp4';

import AngleDownIcon from '../assets/images/angledown.png';

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar, A11y]);

const Home = () => {
  // projects data
  const data = {
    "1": {
      name: "Polaris",
      link: "/projects/polaris",
      img: CoverPolaris,
      vid: VidPolaris
    },
    "2": {
      name: "Project Argus",
      link: "/projects/project-argus",
      img: CoverArgus,
      vid: VidArgus
    },
    "3": {
      name: "Boosted Touch",
      link: "/projects/boosted-touch",
      img: CoverBoostedTouch,
      vid: VidBoostedTouch
    }
  }
  // set up swiper
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
      <Breakpoint medium up>
        {/* Image Gallery */}
        <Swiper {...params}>
          <SwiperSlide>
            <div className="h-full flex justify-center items-center">
              <div><h2 className="text-center text-white font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"><span className="un">Don't</span> do the right thing.</h2></div>
            </div>
          </SwiperSlide>
          {Object.keys(data).map((k, i) =>
            <SwiperSlide key={k}>
              {({ isActive }) => (
                <CoverVideo vid-id={i} link={data[k].link} vid={data[k].vid} name={data[k].name} shouldPlay={isActive}></CoverVideo>
              )}
            </SwiperSlide>
          )}
        </Swiper>
        <div className="swiper-button-next text-yellow-500 pr-8"></div>
        <div className="swiper-button-prev text-yellow-500 pl-8"></div>
      </Breakpoint>
      <Breakpoint small down>
        <div className="vh-100 w-full items-center justify-center table">
          <h2 className="table-cell align-middle text-center text-white font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"><span className="un">Don't</span> do the right thing.</h2>
        </div>
        <div className="bottom-0 items-center absolute w-full px-4 md:px-8 text-center">
          <img alt="Angled down button" className="h-16 ml-auto mr-auto" src={AngleDownIcon}></img>
        </div>
        <ProjectGrid></ProjectGrid>
      </Breakpoint>
    </>
  );
};

export default Home;