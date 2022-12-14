import React from 'react';
import { IoMdFingerPrint } from 'react-icons/io';
// react-router-dom
import { Link } from 'react-router-dom';
const Loading = () => {
	return (
		<div className='loading'>
			<div className='loading--icon'>
				<Link to='/portfolio'>
					<div className='loading__symbol'>
						<div className='loading__symbol--square'>
							<div className='loading__symbol--cycle'>
								<IoMdFingerPrint color='rgba(0, 255, 0, 0.5)' size={60} />
							</div>
						</div>
						<p>Enter</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Loading;
