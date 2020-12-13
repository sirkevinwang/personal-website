import React from 'react';
import Fade from 'react-reveal/Fade';
import CoverBoostedTouch from '../../assets/images/covers/cover-boosted-touch.png';
import AngleDownIcon from '../../assets/images/angledown.png';


const BoostedTouch = (props) => {
  return (
    <div className="w-full text-white">
      <section className="w-full items-center justify-center">
        <img src={CoverBoostedTouch} alt="Argus app recognizes pedestrian crossing signals" className="w-full vh-100 object-cover opacity-75"></img>
        <div className="vh-100 w-screen z-30 absolute p-4 md:p-8 top-0 left-0 flex justify-left items-center">
          <div className="">
            <Fade bottom cascade>
              <div>
                <h2 className="font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4">Boosted Touch</h2>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Designing a new Boosted Board remote that focuses on utility and comfort.</p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="bottom-0 items-center absolute w-full px-4 md:px-8 text-center">
          <img alt="Angled down button" className="h-16 ml-auto mr-auto" src={AngleDownIcon}></img>
        </div>
      </section>

      <section className="w-full">
        <iframe className="w-full vh-100" title="Boosted Touch project video" src="https://www.youtube.com/embed/dIrvCoU6ioc?modestbranding=1&showinfo=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </section>
    </div>
  )
}

export default BoostedTouch;