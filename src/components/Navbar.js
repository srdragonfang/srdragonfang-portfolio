import React from 'react';
// react-typed
import Typed from 'react-typed';
import { GiHadesSymbol } from 'react-icons/gi';
// react-router-dom
import { Link } from 'react-router-dom';

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
				<li className='brand'>
					<Typed
						strings={['S.R Dragonfang', 'PORTFOLIO']}
						typeSpeed={100}
						backSpeed={10}
						loop
					/>
				</li>
				<li className='logo'>
					<Link to='/'>
						<GiHadesSymbol color='#daa520' size={30} />
					</Link>
				</li>
				<li className='btn-effect-1'>
					<a href='#introduce-id'>Introduce</a>
				</li>
				<li className='btn-effect-1'>
					<a href='#skills-id'>Skills</a>
				</li>
				<li className='btn-effect-1'>
					<a href='#projects-id'>Projects</a>
				</li>
				<li className='btn-effect-1'>
					<a href='#contact-id'>Contact</a>
				</li>
			</ul>
		</nav>
	);
};
// Not a ton of code, but hard to

export default Navbar;
