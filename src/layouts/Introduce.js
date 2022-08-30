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
				<div className='introduce__container--left'>
					<p>
						Hi. I'm <span>S.R Dragonfang</span>, who is a <span>Front-end Developer</span>
						based in <span>Viet Nam</span>!
					</p>
					<p>
						I love creating and expressing ideas through words and
						symbols.
					</p>
					<p>
						I started pursuing this career about a year ago through
						self-study and keep trying to improve my skills. In the
						process, I have created a number of personal projects
						and hope that you will enjoy it. I would also be happy
						to receive your comments.
					</p>
					<p>
						When not online, I <span>loves</span> to reading <span>non-fiction novel</span>,
						<span>writting</span>.
					</p>
					<p>Thank you for taking the time to visit my Portfolio.</p>
					<p>Wish you a good day.</p>
				</div>
				<div className='introduce__container--right'></div>
			</div>
		</div>
	);
};

export default Introduce;
