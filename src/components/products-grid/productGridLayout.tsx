'use client'
import Card from "./card";
import styles from "./card.module.css";

export default function ProductGridLayout() {

    const productCards = [];
    for (let i = 0; i < 6; i++) {
        productCards.push( <Card price="23000" title="Prodcuct Prueb" img="/products/placeholder.png"></Card>);
    }

    return(
        <main className={styles.cardsGrid}>
            {productCards}
        </main>
    )
}