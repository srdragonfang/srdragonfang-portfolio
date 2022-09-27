import React from 'react';

const Quote = ({ quote, author }) => {
	return (
		<div className='section__quote'>
			<div className='section__quote--container'>
				<p>"{quote}"</p>
				<span>{author}</span>
			</div>
		</div>
	);
};

export default Quote;
