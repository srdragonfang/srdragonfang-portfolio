import React from 'react';
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';
import Opening from '../components/Opening';
// import Banner from '../layouts/Banner';
import Introduce from '../layouts/Introduce';
import Project from '../layouts/Project';
import ProjectPlus from '../layouts/ProjectPlus';
import Skill from '../layouts/Skill';
import Footer from './Footer';

const Portfolio = () => {

	return (
		<div className='portfolio'>
            <Opening />
			<Navbar />
			<Introduce />
			<Skill />
			<Project />
			<ProjectPlus />
			<NavbarMobile />
			<Footer />
		</div>
	);
};

export default Portfolio;
