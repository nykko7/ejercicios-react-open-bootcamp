import React from 'react';
import PropTypes from 'prop-types';

import { Contact } from '../../models/contact.class';

const ComponenteB = ({ contact, toggleConnection }) => {
	return (
		<div>
			<h2>Nombre: {contact.firstName}</h2>
			<h3>Apellido: {contact.lastName}</h3>
			<h4>Email: {contact.email}</h4>
			<h5>Contacto {contact.isConnected ? 'En Linea' : 'No Disponible'}</h5>
			<button onClick={toggleConnection}>
				{contact.isConnected ? 'Desconectar' : 'Conectar'}
			</button>
		</div>
	);
};
ComponenteB.propTypes = {
	contact: PropTypes.instanceOf(Contact),
};

export default ComponenteB;
