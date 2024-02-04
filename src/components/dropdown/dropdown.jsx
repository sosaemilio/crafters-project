import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropDownComponent({ name, items }) {
	return (
		<DropdownButton id="dropdown-basic-button" variant="" title={name}>
			{items.map((item, index) => (
				<Dropdown.Item key={index} href="#/action-1">
					{item}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
}

export default DropDownComponent;
