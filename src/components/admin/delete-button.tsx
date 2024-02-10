import styles from "./admin.module.css";

export default function DeleteButton({ content }: {content: string}) {
  return (
    <button className={styles.deleteButton}>
        {content}
    </button>
  );
}
