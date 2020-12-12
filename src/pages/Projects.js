import React from 'react'
import ProjectGrid from '../components/ProjectGrid';
const Projects = (props) => {
  return (
    <ProjectGrid data={props.data}></ProjectGrid>
  )
}

export default Projects;
