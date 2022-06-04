import React, { useState } from 'react';
import { Contact as ContactClass } from '../../models/contact.class';
import Contact from '../pure/contact';
import ContactForm from '../pure/contact_form';

const ContactList = () => {
	const defaultContact = new ContactClass(
		'Susan',
		'Guchito',
		'susan_gucho@gmail.com',
		false,
	);
	const defaultContact2 = new ContactClass(
		'Susan1',
		'Guchito1',
		'susan_gucho2@gmail.com',
		true,
	);
	const defaultContact3 = new ContactClass(
		'Susan2',
		'Guchito2',
		'susan_gucho3@gmail.com',
		false,
	);
	const defaultContact4 = new ContactClass(
		'Susan3',
		'Guchito3',
		'susan_gucho3@gmail.com',
		false,
	);
	const defaultContact5 = new ContactClass(
		'Susan4',
		'Guchito4',
		'susan_gucho4@gmail.com',
		false,
	);

	const [contacts, setContacts] = useState([
		defaultContact,
		defaultContact2,
		defaultContact3,
		defaultContact4,
		defaultContact5,
	]);

	const toggleConnection = (contact) => {
		const tempContacts = [...contacts];
		const index = contacts.indexOf(contact);
		tempContacts[index].isConnected = !tempContacts[index].isConnected;
		setContacts([...contacts]);
	};

	function removeContact(contact) {
		console.log('Remove this contact:', contact);
		const index = contacts.indexOf(contact);
		const tempContacts = [...contacts];
		tempContacts.splice(index, 1);
		setContacts(tempContacts);
	}

	function addContact(contact) {
		console.log('Added this contact:', contact);
		const tempContacts = [...contacts];
		tempContacts.push(contact);
		setContacts(tempContacts);
	}

	return (
		<div>
			<div>
				<h1>Contactos: </h1>
			</div>
			{contacts.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Status</th>
							<th>Name</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* TODO: Aplicar un for/map para renderizar la lista */}
						{contacts.map((contact, index) => (
							<Contact
								key={index}
								contact={contact}
								toggleConnection={toggleConnection}
								removeContact={removeContact}
							/>
						))}
					</tbody>
				</table>
			) : (
				<div>No hay contactos</div>
			)}
			<ContactForm add={addContact} />
		</div>
	);
};

export default ContactList;
