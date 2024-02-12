'use client'

import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export default function Card({ product }) {
    return (
      <div className={styles.card}>
        <div className={styles.card}>
            <Image
              src={product.image}
              width={400}
              height={400}
              alt="Screenshots of the dashboard project showing desktop version"
            />
        </div>
        <Link href={`/product/${product._id}`} className="text-dark text-decoration-none">
            <h3>{product.product}</h3>
        </Link>          
        <div className={styles.cardBottom}>
          <p>{`$ ${product.price}`}</p>
        </div>
      </div>
    );
  }
  