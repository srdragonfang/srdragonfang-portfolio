import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../layouts/Banner'
import Introduce from '../layouts/Introduce'
import Project from '../layouts/Project'
import ProjectPlus from '../layouts/ProjectPlus'
import Skill from '../layouts/Skill'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <Banner />
        <Navbar />
        <Introduce />
        <Skill />
        <Project />
        <ProjectPlus />
    </div>
  )
}

export default Portfolio