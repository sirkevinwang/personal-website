import React from 'react';
import Fade from 'react-reveal/Fade';
import CoverPolaris from '../../assets/images/covers/cover-polaris.png';
import AngleDownIcon from '../../assets/images/angledown.png';

const Polaris = (props) => {
  return (
    <div className="w-full text-white">
      <section className="w-full items-center justify-center">
        <img src={CoverPolaris} alt="Argus app recognizes pedestrian crossing signals" className="w-full vh-100 object-cover opacity-75"></img>
        <div className="vh-100 w-screen z-30 absolute p-4 md:p-8 top-0 left-0 flex justify-left items-center">
          <div className="">
            <Fade bottom cascade>
              <div>
                <h2 className="font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4">Polaris</h2>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Changing the way students and faculty travel on weekends at Westtown School.</p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="bottom-0 items-center absolute w-full px-4 md:px-8 text-center">
          <img alt="Angled down button" className="h-16 ml-auto mr-auto" src={AngleDownIcon}></img>
        </div>
      </section>

       <section className="w-full">
        <iframe className="w-full vh-100" title="Watch the Polaris Special Event" src="https://www.youtube.com/embed/wyye8XF2AjY?start=271&modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </section>
    </div>
  )
}

export default Polaris;
