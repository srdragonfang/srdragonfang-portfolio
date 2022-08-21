import React from 'react';
import DataResume from '../data/dataResume.json'
const Introduce = () => {
    let introduceContents = DataResume.portfolio.introduce.map((item, index) => {
        return (
            <p key={index}>{item.content}</p>
        )
    })
     

    return (
		<div className='section introduce' id='introduce-id'>
			<div className='section__title'>
				<div className='section__title--square'></div>
				<h1>Introduce</h1>
				<div className='section__title--line'></div>
			</div>
			<div className='introduce__container'>
				<div className='introduce__content'>
                    {introduceContents}
				</div>
			</div>
		</div>
	);
};

export default Introduce;
