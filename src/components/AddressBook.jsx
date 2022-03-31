import { useState } from 'react'
import ViewContact from './ViewContact'

const AddressBook = () => {
	const [contacts, setContacts] = useState([
		{
			id: 100, name: 'Will Smith', method: 'Telefon', contactInfo: '112'
		},
		{
			id: 200, name: 'Chris Rock', method: 'Fysisk', contactInfo: 'handskakning'
		},
		{
			id: 576, name: 'Jaina Smith', method: 'Telefon', contactInfo: '012-3456789'
		},
	])

	return (
		<div className="">
			<h1> Mina kontakter </h1>

			<ul className="contact-list">
				{contacts.map(contact => (
					<ViewContact key={contact.id} contact={contact} />
				))}
			</ul>
		</div>
	)
}

export default AddressBook
