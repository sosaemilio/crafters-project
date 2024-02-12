import Button from "react-bootstrap/Button";

function ButtonComp({ name, color }) {
	return <Button variant={color}>{name}</Button>;
}

export default ButtonComp;
