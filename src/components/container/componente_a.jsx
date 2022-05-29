import React from 'react';
import ComponenteB from '../pure/componente_b';
import { Contact } from '../../models/contact.class';

const ComponenteA = () => {
	const defaultContact = new Contact(
		'Susan',
		'Guchito',
		'susan_gucho@gmail.com',
		false,
	);

	return (
		<div>
			<ComponenteB contact={defaultContact} />
		</div>
	);
};

export default ComponenteA;
