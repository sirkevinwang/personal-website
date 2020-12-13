import React, { useEffect, useRef } from 'react';
import LazyLoad from 'react-lazy-load';
import {
  Link
} from "react-router-dom";

const CoverVideo = (props) => {
  const vidRef = useRef(null);

  // high performance video playback toggling
  useEffect(() => {
    if (props.shouldPlay) {
      if (vidRef.current != null) {
        vidRef.current.play();
      }
    } else {
      if (vidRef.current != null) {
        vidRef.current.pause();
      }
    }
  }, [props.shouldPlay])

  return (
    <div className="swiper-slide w-screen h-screen relative">
      <LazyLoad width='100%' height='100%'>
      <video
        ref={vidRef}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        src={props.vid} muted loop playsInline preload="auto"
        className="opacity-75"
      ></video>
      </LazyLoad>
  
      <div className="h-screen w-screen z-30 absolute top-0 left-0 flex justify-center items-center">
        <Link to={props.link}>
          <div className="text-white font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center">
            <span>{props.name}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CoverVideo;