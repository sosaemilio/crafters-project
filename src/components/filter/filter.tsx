"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDownComponent from "../dropdown/dropdown";
import { Button } from "react-bootstrap";

function Filter() {
	return (
		<div className="filter">
			<div className="filter-title">
				<h3>CRAFTED BY US, FOR YOU</h3>
			</div>
			<div className="filter-desc d-flex justify-content-between align-items-center">
				<p>09 Productos</p>
				<Button variant="" className="d-flex gap-2 bg-secondary-subtle">
					<i className="bi bi-funnel-fill"></i>
					<p>filter</p>
				</Button>
			</div>
			<div className="filter-body d-flex justify-content-between align-items-center">
				<DropDownComponent name="Sort" />
				<div className="icon-group d-flex justify-content-between align-items-center gap-4">
					<DropDownComponent name="Category" />
					<DropDownComponent name="Brand" />
					<DropDownComponent name="Color" />
					<DropDownComponent name="Size" />
				</div>
			</div>
		</div>
	);
}

export default Filter;
