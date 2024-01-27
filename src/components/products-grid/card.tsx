import Image from "next/image";
import styles from "./card.module.css";

export default function Card({img, title, price}: {img: string, title: string, price: string}) {
    return (
      <div className={styles.card}>
        <div className={styles.card}>
            <Image
                src={img}
                width={400}
                height={400}
                alt="Screenshots of the dashboard project showing desktop version"
            />
        </div>
        <h3>{title}</h3>
        <div className={styles.cardBottom}>
            <p>{`$ ${price}`}</p>
            <Image
                src="/products/vector.png"
                width={20}
                height={18}
                alt="favorite product"
            />
        </div>
      </div>
    );
  }
  