import styles from "./admin.module.css";

export default function DeleteButton({ content }: {content: string}) {
  return (
    <div className={styles.button}>
      <a href="admin/create">
        {content}
      </a>
    </div>
  );
}
