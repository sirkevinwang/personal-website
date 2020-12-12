import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

const CoverImage = (props) => {
  return (
    <div className="w-full h-96 relative cursor-pointer">
      <HoverVideoPlayer
        className="w-full h-full"
        videoClassName="w-full h-full object-cover"
        videoSrc={props.vid}
        pausedOverlay={
          <div className="w-full h-full">
            <img className="w-full h-full object-cover" src={props.img} alt={props.alt}></img>
            <div className="flex top-0 left-0 w-full h-full content-center items-center absolute opacity-100  transition-opacity">
              <div className="w-full text-center">
                <h2 className="text-white font-medium text-3xl md:text-4xl xl:text-5xl">{props.name}</h2>
              </div>
            </div>
          </div>}
        loadingOverlay={
          <img className="w-full h-full object-cover" src={props.img} alt={props.alt}></img>
        }
      />
    </div>
  )
}

export default CoverImage;
