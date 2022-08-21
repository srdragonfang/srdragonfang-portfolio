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
			<div className='section__title'>
				<div className='section__title--triagle'></div>
				<h1>PROJECTS</h1>
				<div className='section__title--line'></div>
			</div>
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
									<span>View Project</span>
								</div>
							</div>
						</div>
					);
				})}
				{show &&
					state.map((item, index) => {
						return (
							<div className='modal' key={index}>
								<div className='modal__container'>
									<div className='modal__container--bar'>
										<RiCloseLine
											size={27}
											onClick={() => setShow(false)}
										/>
									</div>
									<div className='modal__container--data'>
										<div className='modal__item'>
											<h2>{item.title}</h2>
											<p>{item.subtitle}</p>
											<p>{item.languages}</p>
											<p>
												<strong>Responsive:</strong>
												Suitable for large width devices
												<strong>
													{item.responsive}
												</strong>
											</p>
											<p>
												<strong>Deploy</strong>:
												{item.deploy}
											</p>
											<div className='modal__item--buttons'>
												<a
													href={item.previewURL}
													target='_blank'
													rel='noreferrer'
													className='btn__secondary'
												>
													<span>Preview</span>
													<AiOutlineExport
														size={30}
													/>
												</a>
												<a
													href={item.sourceURL}
													target='_blank'
													rel='noreferrer'
													className='btn__secondary'
												>
													<span>Source Code</span>
													<AiOutlineExport
														size={30}
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
