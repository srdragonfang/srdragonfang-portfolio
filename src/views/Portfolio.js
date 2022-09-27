import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
// import NavbarMobile from '../components/NavbarMobile';
import ScrollDown from './components/ScrollDown';
// import Banner from '../layouts/Banner';
import Introduce from './layouts/Introduce/Introduce';
import Project from './layouts/Project/Project';
import ProjectPlus from './layouts/Project/ProjectPlus';
import Quote from './components/Quote';
import Skill from './layouts/Skill/Skill';
import Footer from './Footer';
const Portfolio = () => {
	// const [visibleSections, setVisibleSections] = React.useState([]);
	// const [scrollIndicatorHidden, setScrollIndicatorHidden] =
	// 	React.useState(false);

	// const opening = React.useRef();
	// const introduce = React.useRef();
	// const skill = React.useRef();
	// const project = React.useRef();
	// const projectplus = React.useRef();
	// const footer = React.useRef();

	// React.useEffect(() => {
	// 	const sections = [
	// 		opening,
	// 		introduce,
	// 		skill,
	// 		project,
	// 		projectplus,
	// 		footer,
	// 	];

	// 	const sectionObserver = new IntersectionObserver(
	// 		(entries, observer) => {
	// 			entries.forEach((entry) => {
	// 				if (entry.isIntersecting) {
	// 					const section = entry.target;
	// 					observer.unobserve(section);
	// 					if (visibleSections.includes(section)) return;
	// 					setVisibleSections((prevSections) => [
	// 						...prevSections,
	// 						section,
	// 					]);
	// 				}
	// 			});
	// 		},
	// 		{ rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
	// 	);

	// 	const indicatorObserver = new IntersectionObserver(
	// 		([entry]) => {
	// 			setScrollIndicatorHidden(!entry.isIntersecting);
	// 		},
	// 		{ rootMargin: '-100% 0px 0px 0px' }
	// 	);

	// 	sections.forEach((section) => {
	// 		sectionObserver.observe(section.current);
	// 	});

	// 	indicatorObserver.observe(introduce.current);

	// 	return () => {
	// 		sectionObserver.disconnect();
	// 		indicatorObserver.disconnect();
	// 	};
	// }, [visibleSections]);
	return (
		<div className='portfolio'>
			<Banner
			// sectionRef={opening}
			// scrollIndicatorHidden={scrollIndicatorHidden}
			/>
			<ScrollDown />
			<Navbar />
			<Introduce
			// sectionRef={introduce}
			// visible={visibleSections.includes(introduce.current)}
			/>
            <Quote quote="For my part I know nothing with any certainty, but the sight of
            the stars make me dream." author="Vincent Willem van Goghs" />
			<Skill
			// sectionRef={skill}
			// visible={visibleSections.includes(skill.current)}
			/>
            <Quote quote="It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done." author="Vincent Willem van Goghs" />
			<Project
			// sectionRef={project}
			// visible={visibleSections.includes(project.current)}
			/>
			<ProjectPlus
			// sectionRef={projectplus}
			// visible={visibleSections.includes(projectplus.current)}
			/>
            <Quote quote="I put my heart and soul into my work, and I have lost my mind in the process." author="Vincent Willem van Goghs" />
			{/* <NavbarMobile /> */}
			<Footer
			// sectionRef={footer}
			// visible={visibleSections.includes(footer.current)}
			/>
		</div>
	);
};

export default Portfolio;
