'use client';

import styles from "./admin.module.css";
import Product from "@/models/Products";
import { connectDB } from "@/lib/connection";

export default function DeleteButton({ content, objectId }: {content: string, objectId: string}) {
  function deleteProduct(id: string) {
    connectDB();
    //Retrieve the data
    Product.findByIdAndDelete(id, (err: any, docs: any) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Removed User:", docs);
    }
    });
  }

  return (
    <button 
      className={styles.deleteButton} 
      type="button"
      onClick={() => deleteProduct(objectId)}>
        {content}
    </button>
  );
}
