import React from 'react';
import imgBg from '../assets/design/Dior.png';
const IntroduceMain = () => {
	return (
		<div
			className='introducer'
			style={{
				backgroundImage: `url(${imgBg})`,
				backgroundSize: 'cover',

				backgroundRepeat: 'no-repeat',
			}}
		></div>
	);
};

export default IntroduceMain;
