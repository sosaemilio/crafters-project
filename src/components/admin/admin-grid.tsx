import ProductRow from "./product-item";
import styles from "./admin.module.css";
import { connectDB } from "@/lib/connection";
import Product from "@/models/Products";

export default async function AdminGrid() {
    // Connects to MongoDB
    connectDB();

    //Retrieve the data
	const products = await Product.find({});
    const productCards: any[] = [];
    products.map((product)=> {
        productCards.push( 
        <ProductRow 
            key={product._id} 
            img={product.image} 
            productName={product.product} 
            price={product.price} 
            category={product.category}
            seller={product.seller}
            objectId={product._id.toString()}
        />)
    });


    return (
        <div className={styles.bodyAdminGrid}>
            <div className={styles.adminGrid}>
                <div><p>Product Name</p></div>
                <div><p>Price </p></div>
                <div><p>Category</p></div>
                <div><p>Seller</p></div>
                {/* <div><p>Delete</p></div> */}
            </div>
            {productCards}
        </div>

    )
}