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
	let arrCategory = ["Kids", "Movies", "Sports"];

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
					} d-md-flex align-items-center mt-4`}
				>
					<DropDownComponent name="Sort" items={arrSort} />
					<DropDownComponent items={arrCategory} name="Category" />
				</div>
			)}
		</div>
	);
}

export default Filter;
