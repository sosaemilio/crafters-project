import styles from "./admin.module.css";
import DeleteButton from "./delete-button";
import Image from "next/image";

export default function ProductItem( ) {
    /*{ img, productName, price, description}: { img: string, productName: string, price: string, description: string}*/
  return (
    <div className={styles.productItem}>
        <div className={styles.productTitle}>
          <Image
                src="/products/placeholder.png"
                width={40}
                height={40}
                alt="Screenshots of the dashboard project showing desktop version"
          />
          <p>$Poduct 1</p>
        </div>
        <div><p>8000</p></div>
        <div><p>Lorem Ipsum Lorem</p></div>
        <div><DeleteButton content="Delete"/></div>
    </div>
  );
}
