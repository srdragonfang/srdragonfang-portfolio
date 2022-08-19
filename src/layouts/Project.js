import React from 'react';
import { ProjectsData } from './ProjectData';
import { AiOutlineExport } from 'react-icons/ai';
import { GiAtomicSlashes } from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri';

const Project = () => {
	const [state, setState] = React.useState([]);
	const [show, setShow] = React.useState(false);

	const toggleButton = (item) => {
		setState([item]);
		setShow(!show);
	};

	if (show) {
		document.body.classList.add('remove-scroll');
	} else {
		document.body.classList.remove('remove-scroll');
	}
	return (
		<div className='section project' id='projects-id'>
			<div className='project__container'>
				{ProjectsData.map((item, index) => {
					return (
						<div
							className='project__item'
							key={index}
							style={{
								backgroundImage: `url(${item.laptopPath})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center center',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className='project__item--info'>
								<h2 className={item.background}>
									{item.title}
								</h2>
								<div
									className='btn btn__primary btn-effect-1'
									onClick={() => toggleButton(item)}
								>
									<span>
										View Project
									</span>
								</div>
							</div>
						</div>
					);
				})}
				{show &&
					state.map((item, index) => {
						return (
							<div className='project__modal' key={index}>
								<div className='project__modal--bg'>
									<div className='project__bar'>
										<RiCloseLine
											size={27}
											onClick={() => setShow(false)}
										/>
									</div>
									<div className='project__details'>
										<img
											className='project__details--img'
											src={item.mobilePath}
											alt='movieItem__cover'
										/>
										<div className='item__info'>
											<div className='item__info--title'>
												<span className='atomicSlashes'>
													<GiAtomicSlashes
														size={30}
													/>
												</span>
												<p>{item.title}</p>
											</div>
											<div className='item__info--subtitle'>
												{item.subtitle}
											</div>

											<div className='item__info--description'>
												{item.languages}
											</div>
											<p>
												<strong>Responsive:</strong>{' '}
												Suitable for large width devices{' '}
												<strong>
													{item.responsive}
												</strong>
											</p>
											<p>
												<strong>Deploy</strong>:{' '}
												{item.deploy}
											</p>
											<div className='item__info--buttons'>
												<a
													className='btn btn__primary btn-effect-1'
													href={item.previewURL}
													target='_blank'
													rel='noreferrer'
												>
													<span>Preview</span>
													<AiOutlineExport
														size={27}
													/>
												</a>
												<a
													className='btn btn__primary btn-effect-1'
													href={item.sourceURL}
													target='_blank'
													rel='noreferrer'
												>
													<span>Source Code</span>
													<AiOutlineExport
														size={27}
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Project;
