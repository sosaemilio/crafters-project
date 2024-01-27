import Image from "next/image";
import styles from "./page.module.css";
import Filter from "@/components/filter/filter";

export default function Home() {
	return (
		<main>
			<h1>Hello from Home </h1>
			<Filter />
		</main>
	);
}
