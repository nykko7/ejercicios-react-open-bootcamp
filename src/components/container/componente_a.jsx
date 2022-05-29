import React, { useState } from 'react';
import ComponenteB from '../pure/componente_b';
import { Contact } from '../../models/contact.class';

const ComponenteA = () => {
	const defaultContact = new Contact(
		'Susan',
		'Guchito',
		'susan_gucho@gmail.com',
		false,
	);
	const [contact, setContact] = useState(defaultContact);

	const toggleConnection = () => {
		setContact({
			...contact,
			isConnected: !contact.isConnected,
		});
	};

	return (
		<div>
			<ComponenteB contact={contact} toggleConnection={toggleConnection} />
		</div>
	);
};

export default ComponenteA;
