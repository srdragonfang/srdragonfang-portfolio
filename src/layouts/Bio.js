import React from 'react';

const Bio = () => {
	return (
		<div className='section bio'>
			<h1>Bio</h1>
			<div className='bio__container'>
				<div className='bio__container--section'>
					<strong className='bio__year'>1994</strong>
					Born in VietNam.
				</div>
				<div className='bio__container--section'>
					<strong className='bio__year'>2012</strong>
					Graduted High School
				</div>
				<div className='bio__container--section'>
					<strong className='bio__year'>July, 2021</strong>
					Start Learn HTML & CSS
				</div>
				<div className='bio__container--section'>
					<strong className='bio__year'>March, 2022</strong>
					Start Learn Javascript
				</div>
				<div className='bio__container--section'>
					<strong className='bio__year'>April, 2022</strong>
					Start Learn ReactJS
				</div>
			</div>
		</div>
	);
};

export default Bio;
