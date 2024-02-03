import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from './HeroBanner.module.css';
import { Button } from "react-bootstrap";

export default function HeroBanner() {
	return (
		<div className="">
			<div className="row">
				<div className="col-md-6 d-flex align-items-center">
					<div className="d-flex flex-column gap-3">
						<h1 className="">
							<strong>Products for you</strong>
						</h1>
						<p>Support local products and promoting sustainable consumption!</p>
						<Button variant="dark" size="lg" className="w-70 align-self-start">
							See More
						</Button>
					</div>
				</div>
				<div className="col-md-6 mt-4 m-md-0">
					<div className="row p-0 mx-auto">
						<div className="col p-2">
							<Image
								src="/hero-banner-image-1.png"
								width={200}
								height={300}
								className="img-fluid mx-auto object-fit-cover"
								style={{ height: "100%", width: "100%" }}
								alt="Hero Banner Image 1"
							/>
						</div>
						<div className="col p-2 d-flex flex-column">
							<div className="row" style={{ height: "100%" }}>
								<Image
									src="/hero-banner-image-2.png"
									width={150}
									height={150}
									className="img-fluid mx-auto"
									alt="Hero Banner Image 2"
								/>
							</div>
							<div className="row">
								<Image
									src="/hero-banner-image-3.png"
									width={150}
									height={150}
									className="img-fluid mx-auto mt-3"
									alt="Hero Banner Image 3"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
