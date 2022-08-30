import React from 'react';

const Quote = ({quote, author}) => {
	return (
		<div className='section__quote'>
			<p>
				"{quote}"
			</p>
			<span>{author}</span>
		</div>
	);
};

export default Quote;
