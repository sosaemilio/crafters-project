import Image from "next/image";
import styles from "./page.module.css";
// import NavBar from "@/components/navbar/navbar";
import NavbarComponent from "@/components/navbar/navbar";
import HeroBanner from "@/components/hero-banner/hero-banner";
import Filter from "@/components/filter/filter";
import ProductGridLayout from "@/components/products-grid/productGridLayout";

export default function Home() {
	return (
		<div className="container-xxl">
			{/* <NavBar></NavBar> */}
			<NavbarComponent />
			<HeroBanner></HeroBanner>
			<Filter></Filter>
			<ProductGridLayout></ProductGridLayout>
		</div>
	);
}
