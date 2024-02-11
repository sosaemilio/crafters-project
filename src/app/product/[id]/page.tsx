import { connectDB } from "@/lib/connection";
import Product from "@/models/Products";

import ProductPage from "@/components/ProductPage/ProductPage";
import NewReviews from "@/components/reviews/NewReviews";
import Reviews from "@/components/reviews/Reviews";

export default async function Page({ params }: { params: { id: string } }) {
    connectDB();
	const productData = await Product.findById(params.id);

    return (
        <div>
            <ProductPage 
                image={productData.image} 
                productName={productData.product} 
                category={productData.category} 
                price={productData.price} 
                seller={productData.seller}
            />
            <div className="p-4">
                <NewReviews/>
                <h1 className="text-secondary p-3 my-0">
                    Other Reviews
                </h1>
				{/* {products.map(product => (<Reviews product={product} key={product._id}/>))} */}
                {/* <Reviews /> */}
            </div> 
           
        </div>
    )
};
