import React from 'react';

const Navbar = () => {

	window.addEventListener('scroll', () => {
		if (window.scrollY > 700) {
			document.getElementById('main').classList.add('fixed-nav');
		} else {
			document.getElementById('main').classList.remove('fixed-nav');
		}
	});

    

	return (
		<nav id='main'>
			<ul>
				<li className='logo'>
					<a href='#home'>LOST.</a>
				</li>
				<li>
					<a href='#introduce-id'>Introduce</a>
				</li>
				<li>
					<a href='#skills-id'>Skills</a>
				</li>
				<li>
					<a href='#projects-id'>Projects</a>
				</li>
				<li>
					<a href='#contact-id'>Contact</a>
				</li>
			</ul>
		</nav>
	);
};
// Not a ton of code, but hard to

export default Navbar;
