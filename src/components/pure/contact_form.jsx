import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactForm = ({ add }) => {
	const firstNameRef = useRef('');
	const lastNameRef = useRef('');
	const emailRef = useRef('');

	const [isConnected, setIsConnected] = useState(false);

	function addContact(e) {
		e.preventDefault();
		const newContact = new Contact(
			firstNameRef.current.value,
			lastNameRef.current.value,
			emailRef.current.value,
			isConnected,
		);
		add(newContact);
	}

	function handleChange(event) {
		const value = event.target.value === 'true';
		setIsConnected(value);
	}

	return (
		<form onSubmit={addContact}>
			<div>
				<input
					ref={firstNameRef}
					id='inputFirstName'
					type='text'
					required
					autoFocus
					placeholder='First name'
				/>
				<input
					ref={lastNameRef}
					id='inputLastName'
					type='text'
					required
					placeholder='Last name'
				/>
				<input
					ref={emailRef}
					id='inputEmail'
					type='email'
					required
					placeholder='Email'
				/>
				<select value={isConnected} id='selectStatus' onChange={handleChange}>
					<option value={true}>Conectado</option>
					<option value={false}>Desconectado</option>
				</select>
			</div>
			<button type='submit'>Add</button>
		</form>
	);
};

ContactForm.propTypes = {
	add: PropTypes.func.isRequired,
};

export default ContactForm;
