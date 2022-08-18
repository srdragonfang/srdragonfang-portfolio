import React from 'react';
// icons
import { AiOutlineExport } from 'react-icons/ai';
import { ImCloudDownload } from 'react-icons/im';

const ProjectPlus = () => {
	return (
		<div className='project__info'>
			<div className='project__list--col'>
				<h2>
					get more <span>projects</span> at
				</h2>
				<div className='project__list--buttons'>
					<a
						href='https://github.com/srdragonfang/'
						target='_blank'
						rel='noreferrer'
						className='btn-effect-1 section-item-download'
					>
						<p className='item-show'>github</p>
						<AiOutlineExport className='item-hide' size={30} />
					</a>
					<a
						href='https://codepen.io/srdragonfang/'
						target='_blank'
						rel='noreferrer'
						className='btn-effect-1 section-item-download'
					>
						<p className='item-show'>codepen</p>
						<AiOutlineExport className='item-hide' size={30} />
					</a>
				</div>
			</div>
			<div className='project__list--col'>
				<h2>
					get <span>Curriculum Vitae</span> at
				</h2>
				<div className='project__list--buttons'>
					<a
						href='#about-id'
						className='btn-effect-1 section-item-download'
					>
						<ImCloudDownload size={30} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectPlus;
