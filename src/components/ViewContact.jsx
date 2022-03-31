
const ViewContact = ({ contact: {name, method, contactInfo} }) => (
	<li>
		<div> Namn </div>
		<div> {name} </div>
		<div> {method} </div>
		<div> {contactInfo} </div>
	</li>
)

export default ViewContact
