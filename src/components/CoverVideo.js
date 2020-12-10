import React, { useEffect, useRef } from 'react';

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
      <video
        ref={vidRef}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        src={props.video} muted loop playsInline preload="auto"
        className="opacity-50"
      ></video>
      <div className="h-screen w-screen z-30 absolute top-0 left-0 flex justify-center items-center">
        <div className="text-white font-medium text-8xl text-center"><span>{props.name}</span></div>
      </div>
    </div>
  );
};

export default CoverVideo;