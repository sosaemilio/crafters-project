"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDownComponent from "../dropdown/dropdown";
import { Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./Filter.module.css";

function Filter() {
	const [showFilter, setShowFilter] = useState(false);
	let arrSort = ["Most Popular", "Best Rating", "Newest"];
	let arrCategory = ["Category 1", "Category 2", "Category 3"];
	let arrBrand = ["Brand 1", "Brand 2", "Brande 3"];
	let arrColor = ["Color 1", "Color 2", "Color 3"];
	let arrSize = ["Size 1", "Size 2", "Size 3"];

	const toggleFilter = () => {
		setShowFilter(!showFilter);
	};

	return (
		<div className="filter mt-5">
			<div className="filter-title">
				<h3>CRAFTED BY US, FOR YOU</h3>
			</div>
			<div className="filter-desc mt-4 d-md-flex justify-content-between align-items-center">
				<p>09 Productos</p>
				<Button variant="" className="d-flex gap-2 mt-3 m-md-0 bg-secondary-subtle" onClick={toggleFilter}>
					<i className="bi bi-funnel-fill"></i>
					<p>filter</p>
				</Button>
			</div>
			{showFilter && (
				<div
					className={`filter-body ${
						showFilter ? styles.expanded : ""
					} d-md-flex justify-content-between align-items-center mt-4`}
				>
					<DropDownComponent name="Sort" items={arrSort} />
					<div className="icon-group d-sm-flex justify-content-start justify-content-md-between  align-items-center gap-4">
						<DropDownComponent items={arrCategory} name="Category" />
						<DropDownComponent items={arrBrand} name="Brand" />
						<DropDownComponent items={arrColor} name="Color" />
						<DropDownComponent items={arrSize} name="Size" />
					</div>
				</div>
			)}
		</div>
	);
}

export default Filter;
