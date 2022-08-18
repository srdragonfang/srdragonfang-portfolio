import React from 'react';

const Credit = () => {
    const today = new Date()
	return (
		<div className='credit'>
			<p>
				Sokunmaru Group | &copy;
				{today.getFullYear()}
			</p>
			<p>S.R Dragonfang</p>
		</div>
	);
};

export default Credit;
