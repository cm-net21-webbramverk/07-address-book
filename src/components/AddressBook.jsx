import { useState } from 'react'
import ViewContact from './ViewContact'
import ContactForm from './ContactForm'

const AddressBook = () => {
	const [contacts, setContacts] = useState([
		{ id: 100, name: 'Will Smith', method: 'Telefon', contactInfo: '112' },
		{ id: 200, name: 'Chris Rock', method: 'Fysisk', contactInfo: 'handskakning' },
		{ id: 576, name: 'Jaina Smith', method: 'Telefon', contactInfo: '012-3456789' },
	])

	const addContact = (newContact) => {
		// TODO: hitta på id - största id + 1
		
		// uppdatera objekt
		newContact.id = 577  // ok eftersom newContact inte är en state-variabel

		setContacts([ ...contacts, newContact ])
	}

	return (
		<div className="">
			<h1> Mina kontakter </h1>

			<ul className="contact-list">
				{contacts.map(contact => (
					<ViewContact key={contact.id} contact={contact} />
				))}
			</ul>

			<ContactForm addContact={addContact} />
		</div>
	)
}

export default AddressBook
