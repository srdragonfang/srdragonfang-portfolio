import React from 'react';
import { SkillsData } from './SkillsData';
const Skill = () => {
	const skillList = React.useRef();
	const toggleSkills = () => {
		skillList.current.classList.toggle('view__skills');
    }

	return (
		<div className='section skills' id='skills-id'>
			<div className='section__title'>
				<div className='section__title--cycle'></div>
				<h1>SKILLS</h1>
				<div className='section__title--line'></div>
			</div>
			<div className='skills__container'>
				<div className='skills__container--list' ref={skillList}>
					{SkillsData.map((item, index) => {
						return (
							<div className='card' key={index}>
								<h3 className='card__title'>{item.title}</h3>
								<div className='card__bottom'>
									<div className='card__icon'>
										{item.icon}
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div
					className='card__button'
					onClick={toggleSkills}
				>
					View Skills
				</div>
			</div>
		</div>
	);
};

export default Skill;
