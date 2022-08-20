import React from 'react';
import Typed from 'react-typed';
const Opening = () => {
	return (
		<section className='opening'>
			<Typed
				strings={[
                    'HI',
					'BOUJOUR',
					'こんにちは',
					'XIN CHAO',
					'ID: PORTFOLIO',
                    'CODE: S.R DRAGONFANG'
				]}
				typeSpeed={100}
				backSpeed={10}
				loop
			/>

		</section>
	);
};

export default Opening;

