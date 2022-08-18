import React from 'react';
import { GiSnakeSpiral } from 'react-icons/gi';
// react-router-dom
import { Link } from 'react-router-dom';
const Loading = () => {
	return (
		<div className='loading'>
            <h1>PORTFOLIO</h1>
            <h1>S.R Dragonfang</h1>
			<div className='loading--icon'>
				<Link to='/portfolio'>
					<div className='loading__symbol'>
						<div className='loading__symbol--square'>
							<div className='loading__symbol--cycle'>
								<GiSnakeSpiral color='#daa520' size={60} />
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Loading;