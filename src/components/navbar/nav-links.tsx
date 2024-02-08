import { Nav } from "react-bootstrap";
const links = [
	{ id: 1, name: "Home", href: "/" },
	{ id: 2, name: "Products", href: "/products" },
	{ id: 3, name: "About Us", href: "/about" },
];

export default function NavLinks() {
	return (
		<>
			{links.map((link) => {
				return (
					<Nav.Link key={link.id} href={link.href}>
						{link.name}
					</Nav.Link>
				);
			})}
		</>
	);
}
