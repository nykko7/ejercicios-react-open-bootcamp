import React from 'react';
import PropTypes from 'prop-types';

import { Contact as ContactClass } from '../../models/contact.class';

const Contact = ({ contact, toggleConnection, removeContact }) => {
	return (
		<tr>
			<td>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div
						style={{
							backgroundColor: contact.isConnected ? 'green' : 'red',
							borderRadius: '50%',
							height: '15px',
							width: '15px',
							border: 'white 1px solid',
						}}
					></div>
				</div>
			</td>
			<th>
				<span>
					{contact.firstName} {contact.lastName}
				</span>
			</th>
			<td>
				<span>{contact.email}</span>
			</td>
			<td>
				<button
					onClick={() => toggleConnection(contact)}
					style={{
						fontWeight: 'bold',
						backgroundColor: contact.isConnected ? 'red' : 'green',
						width: '100px',
						marginRight: '5px',
					}}
				>
					{contact.isConnected ? 'Desconectar' : 'Conectar'}
				</button>
				<button
					onClick={() => removeContact(contact)}
					style={{
						fontWeight: 'bold',
						backgroundColor: 'tomato',
						width: '70px',
					}}
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
};
Contact.propTypes = {
	contact: PropTypes.instanceOf(ContactClass).isRequired,
	toggleConnection: PropTypes.func.isRequired,
	removeContact: PropTypes.func.isRequired,
};

export default Contact;
