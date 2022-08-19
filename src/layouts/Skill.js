import React from 'react';
import { SkillsData } from './SkillsData';
const Skill = () => {
	return (
		<div className='skills' id='skills-id'>
			<h1>SKILLS</h1>
			<div className='skills__container'>
				<div className='skills__container--list'>
					{SkillsData.map((item, index) => {
						return (
							<div className='card' key={index}>
								<h3 className='title'>{item.title}</h3>
								<div className='card__bottom'>
									<div className='card__icon'>
										{item.icon}
									</div>
                                    <div className='bar'>
                                    <div
                                        className='filledbar'
                                        style={{ width: item.percent }}
                                    ></div>
                                </div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skill;
