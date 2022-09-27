import React from 'react';
import Contact from './components/Contact';
import Credit from './components/Credit';
// images
import background from '../assets/images/background/banner.png';

const Footer = () => {
	return (
		<div
			className='footer'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(${background})`,
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Contact />
			<Credit />
		</div>
	);
};

export default Footer;
