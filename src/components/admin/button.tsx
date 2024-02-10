import styles from "./admin.module.css";

export default function Button({ content }: {content: string}) {
  return (
    <button className={styles.button}>
        {content}
    </button>
  );
}
