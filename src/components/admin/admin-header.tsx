import styles from "./admin.module.css";
import Button from "./button";

export default function AdminHeader() {

    return(
        <div className={styles.adminHeader}>
            <h1>Products</h1>
            <Button content="New Product"/>
        </div>
    )
}