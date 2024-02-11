import { connectDB } from "@/lib/connection";
import Product from "@/models/Products";

import styles from "@/components/products-grid/card.module.css";
import HeroBanner from "@/components/hero-banner/hero-banner";
import Filter from "@/components/filter/filter";
import Card from "@/components/products-grid/card";

async function loadProducts() {
	connectDB();
	const products = await Product.find()
	return products
}

async function Home() {
	const products = await loadProducts()
	
	return (
		<div className="container-xxl p-5">
			<HeroBanner/>
			<Filter/>
			<main className={styles.cardsGrid}>
				{products.map(product => (<Card product={product} key={product._id}/>))}
			</main>
		</div>
	);
}
export default Home