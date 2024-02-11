import style from "./admin.module.css";
import { createProduct } from "@/lib/action";

export default function NewProductForm() {
    return(
    <form className={style.newProductForm} action={createProduct}>
    {/* Product Name  */}
      <label htmlFor="product">
        Product
      </label>
      <input 
        id="product" 
        name="product" 
        type="text"
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
    
    {/* Price  */}
      <label htmlFor="price">
        Price
      </label>
      <input
        id="price"
        name="price"
        type="number"
        step="0.01"
        placeholder="Enter USD amount"
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        required
      />
      {/* Category */}
      <label htmlFor="category">
        Category
      </label>
      <input 
        id="category" 
        name="category" 
        type="text"
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
      {/* Seller Name */}
      <label htmlFor="seller">
        Seller Name
      </label>
      <input 
        id="seller" 
        name="seller" 
        type="text"
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
      <input type="submit" value="Send Request"/>
    </form>);
}