import { connectDB } from "@/lib/connection";
import Product from "@/models/Products";

import styles from "@/components/products-grid/card.module.css";
import NavbarComponent from "@/components/navbar/navbar";
import HeroBanner from "@/components/hero-banner/hero-banner";
import Filter from "@/components/filter/filter";
import Card from "@/components/products-grid/card";
import Footer from "@/components/footer/footer";

async function loadProducts() {
	connectDB();
	const products = await Product.find()
	return products
}

async function Home() {
	const products = await loadProducts()
	
	return (
		<div className="container-xxl">
			{/* <NavBar></NavBar> */}
			<NavbarComponent />
			<HeroBanner></HeroBanner>
			<Filter></Filter>
			<main className={styles.cardsGrid}>
				{products.map(product => (<Card product={product} key={product._id}/>))}
			</main>
			<Footer></Footer>
		</div>
	);
}
export default Home