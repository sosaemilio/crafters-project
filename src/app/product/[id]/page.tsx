import { connectDB } from "@/lib/connection";
import Product from "@/models/Products";

import ProductPage from "@/components/ProductPage/ProductPage";
import NewReviews from "@/components/Reviews/NewReviews";
import Reviews from "@/components/Reviews/Reviews";


async function loadProducts() {
	connectDB();
	const products = await Product.find()
	return products
}

export default async function ProductDetailsPage() {
    const products = await loadProducts()

    return (
        <div>
            <ProductPage/>
            <div className="p-4">
                <NewReviews/>
                <h1 className="text-secondary p-3 my-0">
                    Other Reviews
                </h1>
				{products.map(product => (<Reviews product={product} key={product._id}/>))}
                {/* <Reviews /> */}
            </div>
        </div>
    )
};
