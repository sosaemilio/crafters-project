"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDownComponent from "../dropdown/dropdown";
import { Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./Filter.module.css";

function Filter() {
	const [showFilter, setShowFilter] = useState(false);

	const toggleFilter = () => {
		setShowFilter(!showFilter);
	};

	return (
		<div className="filter">
			<div className="filter-title">
				<h3>CRAFTED BY US, FOR YOU</h3>
			</div>
			<div className="filter-desc d-flex justify-content-between align-items-center">
				<p>09 Productos</p>
				<Button variant="" className="d-flex gap-2 bg-secondary-subtle" onClick={toggleFilter}>
					<i className="bi bi-funnel-fill"></i>
					<p>filter</p>
				</Button>
			</div>
			{showFilter && (
				<div
					className={`filter-body ${
						showFilter ? styles.expanded : ""
					} d-flex justify-content-between align-items-center mt-4`}
				>
					<DropDownComponent name="Ordenar" />
					<div className="icon-group d-flex justify-content-between align-items-center gap-4">
						<DropDownComponent name="Categoría" />
						<DropDownComponent name="Marca" />
						<DropDownComponent name="Color" />
						<DropDownComponent name="Tamaño" />
					</div>
				</div>
			)}
		</div>
	);
}

export default Filter;
