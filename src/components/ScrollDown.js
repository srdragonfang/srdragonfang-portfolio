import React from 'react';
import { BsMouse } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
function ScrollDown() {
	const [hide, setHide] = React.useState(false);

	window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {
			setHide(true);
		} else {
			setHide(false);
		}
	});

	return (
		<div className={`scrollDown ${hide && 'scrollHide'}`}>
			<BsMouse className='scrollDown__icon' size={30} color='rgba(0, 255, 0, 0.5)' />
			<AiOutlineDown className='scrollDown__icon' color='rgba(0, 255, 0, 0.5)' />
			<AiOutlineDown className='scrollDown__icon' color='rgba(0, 255, 0, 0.5)' />
			<AiOutlineDown className='scrollDown__icon' color='rgba(0, 255, 0, 0.5)' />
		</div>
	);
}

export default ScrollDown;
