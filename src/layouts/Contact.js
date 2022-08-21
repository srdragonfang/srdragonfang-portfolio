import React from 'react';
import DataResume from '../data/dataResume.json'
const Contact = () => {
    let email =  DataResume.portfolio.contact.email
    console.log(email)
	return (
		<div className='contact' id='contact-id'>
			<p>CONTACT</p>
			<h1 className='email'>{email}</h1>
		</div>
	);
};

export default Contact;
