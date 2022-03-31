import { useState } from 'react'

const ContactForm = ({ addContact }) => {
	const [name, setName] = useState('')
	const [method, setMethod] = useState('')
	const [value, setValue] = useState('')

	const handleClick = () => {
		let newContact = {
			name: name,
			method: method,
			contactInfo: value
		}
		addContact(newContact)
	}

	return (
		<div className="add-contact">
			<input type="text" placeholder="Namn"
				onChange={event => setName(event.target.value)} />
			<input type="text" placeholder="Kontaktmetod"
				onChange={event => setMethod(event.target.value)} />
			<input type="text" placeholder="Värde" 
				onChange={event => setValue(event.target.value)} />
			<button onClick={handleClick}> Lägg till ny kontakt </button>
		</div>
	)
}

export default ContactForm
