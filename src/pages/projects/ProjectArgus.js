import React from 'react';
import Fade from 'react-reveal/Fade';
import CoverArgus from '../../assets/images/covers/cover-argus.png';
import AngleDownIcon from '../../assets/images/angledown.png';

// Project Assets
import MLImage from '../../assets/images/projects/argus/ml.png';
import PhoneStopImage from '../../assets/images/projects/argus/phone-stop.png';
import PhoneGoImage from '../../assets/images/projects/argus/phone-go.png';

const ProjectArgus = (props) => {
  return (
    <div className="w-full text-white">
      <section className="w-full items-center justify-center">
        <img src={CoverArgus} alt="Argus app recognizes pedestrian crossing signals" className="w-full vh-100 object-cover opacity-75"></img>
        <div className="vh-100 w-screen z-30 absolute p-4 md:p-8 top-0 left-0 flex justify-left items-center">
          <div className="">
            <Fade bottom cascade>
              <div>
                <h2 className="font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4">Project Argus</h2>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">An iOS app that helps the visually-impared cross the streets using machine learning.</p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="bottom-0 items-center absolute w-full px-4 md:px-8 text-center">
          <img alt="Angled down button" className="h-16 ml-auto mr-auto" src={AngleDownIcon}></img>
        </div>
      </section>

      <section className="w-full items-center justify-center mt-16 md:mt-32">
        <Fade bottom cascade>
          <div className="px-8 md:px-32">
            <h2 className="text-base md:text-xl lg:text-2xl xl:text-3xl">The app uses the camera to detect pedestrian crossing signals and tells the user to stop or go at intersections.</h2>
          </div>
        </Fade>
      </section>

      <section className="w-full items-center justify-center mt-16 md:mt-32">
        <div className="grid grid-cols-2 px-8 md:px-32 py-8">
          <Fade cascade>
            <img src={PhoneStopImage} className="h-64 md:h-128" alt="Phone telling user to stop at an intersection"></img>
            <img src={PhoneGoImage} className="h-64 md:h-128" alt="Phone telling user to go at an intersection"></img>


          </Fade>
        </div>
      </section>

      <section className="w-full items-center justify-center flex mt-16 md:mt-32">
        <Fade bottom cascade>
          <div className="px-8 md:px-32">
            <h2 className="text-base md:text-xl lg:text-2xl xl:text-3xl">To make this possible, we trained a single shot detector to classify pedestrian crossing signals.</h2>
          </div>
        </Fade>
      </section>

      <section className="w-full items-center justify-center mt-16 md:mt-32">
        <div className="grid grid-cols-2 px-8 md:px-32 p-4 md:p-8">
          <Fade bottom cascade>
            <div>
              <h5 className="argus-gradient-text font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-0 md:mb-2">2,500</h5>
              <span className="text-base md:text-xl lg:text-2xl xl:text-3xl">Images Trained</span>
            </div>
            <div>
              <h5 className="argus-gradient-text font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-0 md:mb-2">80.5%</h5>
              <span className="text-base md:text-xl lg:text-2xl xl:text-3xl">Accuracy, 80% Split</span>
            </div>
          </Fade>
        </div>
        <Fade>
          <div>
            <img className="object-cover h-full w-full" alt="Tron grid background" src={MLImage}></img>
          </div>
        </Fade>
      </section>

      <section className="w-full">
        <iframe className="w-full vh-100" title="Project Argus promo video" src="https://www.youtube.com/embed/k3oClrSdcgE?modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </section>
    </div>
  )
}

export default ProjectArgus;
