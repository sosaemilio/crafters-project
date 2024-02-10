import styles from "./admin.module.css";
import Button from "./button";

export default function ProductItem( ) {
    /*{ img, productName, price, description}: { img: string, productName: string, price: string, description: string}*/
  return (
    <div className={styles.productItem}>
        <div><p>$Poduct 1</p></div>
        <div><p>8000</p></div>
        <div><p>Lorem Ipsum Lorem</p></div>
        <div><Button content="Delete"/></div>
    </div>
  );
}
