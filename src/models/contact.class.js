export class Contact {
	// Nombren booleano que nos indicará si la persona está conectada o no.
	firstName = '';
	lastName = '';
	email = '';
	isConnected = false;

	constructor(firstName, lastName, email, isConnected) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.isConnected = isConnected;
	}
}
