import React from 'react';
import myVideo from './myVideo.mp4';

function Banner() {
	return (
		<div className='banner'>
			<video autoPlay loop >
				<source src={myVideo} type='video/mp4'></source>
			</video>
			<div className='banner__right'>
				<h1>S.R Dragonfang</h1>
				<p>PORTFOLIO</p>
			</div>
		</div>
	);
}

export default Banner;
