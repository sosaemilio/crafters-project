"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import styles from "./page.module.css";
import Link from "next/link";

function Login() {
	return (
		<div className="login-signup m-4">
			<div className="login-container row">
				<div className="login-img d-none d-md-block">
					<Image src="/login/login_img.jpg" alt="" width={2000} height={300} />
				</div>
				<div className="login-form">
					<h3 className="text-center mt-4">Get&#39;s started</h3>
					<Form className="d-flex flex-column  my-5">
						<Row className="mb-3">
							<Form.Group className="mb-3 mb-md-0" as={Col} xs={12} md={6} controlId="username">
								<Form.Label>First Name</Form.Label>
								<Form.Control type="text" placeholder="David" />
							</Form.Group>

							<Form.Group as={Col} xs={12} md={6} controlId="userlastname">
								<Form.Label>Last Name</Form.Label>
								<Form.Control type="text" placeholder="Clerk" />
							</Form.Group>
						</Row>

						<Form.Group className="mb-3" controlId="usermail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" placeholder="example@domain.com" name="usermail" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formGridAddress2">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Enter password here" />
						</Form.Group>

						<Form.Group className="mb-3" id="formGridCheckbox">
							<Form.Check
								className={styles.formCheckbox}
								type="checkbox"
								label="I agree to Terms of Service & Privacy Policy"
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
					<div className="Login-google d-flex justify-content-center ">
						<Button variant="outline-secondary" className="d-flex align-items-center justify-content-center">
							<FcGoogle className="me-2" size={24} /> Register with Google
						</Button>
					</div>
					<div className="my-5 d-flex gap-2 justify-content-center align-items-center">
						<p>Already a member?</p>
						<Link href="#">Sign in</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
