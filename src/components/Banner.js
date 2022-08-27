import React from 'react';
import myVideo from './myVideo.mp4';

function Banner() {
	return (
		<div className='banner'>
			<video autoPlay loop muted>
				<source src={myVideo} type='video/mp4'></source>
			</video>
			<div className='banner__right'>
				<h1>PORTFOLIO</h1>
				<p>S.R Dragonfang</p>
			</div>
		</div>
	);
}

export default Banner;
