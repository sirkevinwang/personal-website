import React, { useState } from "react";

import CoverImage from './CoverImage';

import CoverArgus from '../assets/images/covers/cover-argus.png';
import CoverPolaris from '../assets/images/covers/cover-polaris.png';
import CoverBoostedTouch from '../assets/images/covers/cover-boosted-touch.png';
import VidArgus from '../assets/videos/vid-argus.mp4';
import VidPolaris from '../assets/videos/vid-polaris.mp4';
import VidBoostedTouch from '../assets/videos/vid-boosted-touch.mp4';


const ProjectGrid = (props) => {
  const data = {
    "1": {
      name: "Project Argus",
      img: CoverArgus,
      vid: VidArgus
    },
    "2": {
      name: "Polaris",
      img: CoverPolaris,
      vid: VidPolaris
    },
    "3": {
      name: "Boosted Touch",
      img: CoverBoostedTouch,
      vid: VidBoostedTouch
    }
}
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      { Object.keys(data).map( (k) =>
          <CoverImage key={k} vid={data[k].vid} img={data[k].img} alt={data[k].name} name={data[k].name}></CoverImage>
      )}
    </div>
  );
};

export default ProjectGrid;