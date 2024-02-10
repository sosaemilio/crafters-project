import styles from "./admin.module.css";
import DeleteButton from "./delete-button";

export default function ProductItem({img, productName, price, category, seller, objectId}: {img: string, productName: string, price: string, category: string, seller: string, objectId: string}) {
  return (
    <div className={styles.productItem}>
        <div className={styles.productTitle}>
          <img
                src={img}
                width={40}
                height={40}
                alt={productName}
          />
          <p>{productName}</p>
        </div>
        <div><p>${price}</p></div>
        <div><p>{category}</p></div>
        <div><p>{seller}</p></div>
        {/* <div><DeleteButton content="Delete" objectId="1"/></div> */}
    </div>
  );
}
