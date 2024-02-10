import Product from "./product-item";
import styles from "./admin.module.css";

export default function AdminGrid() {

    return(
        <div className={styles.bodyAdminGrid}>
            <div className={styles.adminGrid}>
                <div><p>Product Name</p></div>
                <div><p>Price </p></div>
                <div><p>Description</p></div>
                <div><p>Delete</p></div>
            </div>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>

    )
}