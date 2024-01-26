import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropDownComponent({ name }) {
	return (
		<DropdownButton id="dropdown-basic-button" variant="" title={name}>
			<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
			<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
			<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
		</DropdownButton>
	);
}

export default DropDownComponent;
