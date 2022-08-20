import React from 'react';

const Introduce = () => {
	return (
		<div className='section introduce' id='introduce-id'>
			<div className='section__title'>
				<div className='section__title--square'></div>
				<h1>Introduce</h1>
				<div className='section__title--line'></div>
			</div>
			<div className='introduce__container'>
				<div className='introduce__content'>
					<p>
						Hi. I'm S.R Dragonfang, who <span>loves</span> to write
						and is a Front-end Developer.
					</p>
					<p>
						I love <span>creating and expressing ideas</span>{' '}
						through words and symbols.
					</p>
					<p>
						I started pursuing this career about a year ago through
						self-study and keep trying to improve my skills. In the
						process, I have created a number of personal projects
						and hope that you will enjoy it. I would also be happy
						to receive your comments.
					</p>
					<p>
						Thank you for taking the time to visit my "Portfolio".
					</p>
					<p>Wish you a good day.</p>
				</div>
			</div>
		</div>
	);
};

export default Introduce;
