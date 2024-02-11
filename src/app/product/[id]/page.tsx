import { connectDB } from "@/lib/connection";
import Product from "@/models/Products";
import Review from "@/models/Reviews";
import ProductPage from "@/components/ProductPage/ProductPage";
import NewReview from "@/components/reviews/NewReviews";
import Reviews from "@/components/reviews/Reviews";

export default async function Page({ params }: { params: { id: string } }) {
    connectDB();

	const productData = await Product.findById(params.id);
    const reviewData = await Review.find({productId: params.id});
    console.log(reviewData);
    const reviewHTML: any[] = [];

    reviewData.map((reviewJson)=> {
        reviewHTML.push( 
        <Reviews
            reviewContent={reviewJson.review}
        />)
    });

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
                <NewReview productId={params.id}/>
                <h3 className="text-secondary p-3 my-0">
                    Other Reviews
                </h3>
                {reviewHTML}
            </div> 
           
        </div>
    )
};
