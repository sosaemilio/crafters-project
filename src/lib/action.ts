'use server';

import { z } from 'zod';
import { connectDB } from './connection';
import Product from "@/models/Products"
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
const FormSchema = z.object({
  id: z.string(),
  product: z.string(),
  price: z.string(),
  seller: z.string(),
  category: z.string()
});

const CreateProduct = FormSchema.omit({ id: true});

export async function createProduct(formData: FormData) {
    const {product, price, category, seller} = CreateProduct.parse({
        product: formData.get('product'),
        price: formData.get('price'),
        category: formData.get('category'),
        seller: formData.get('seller'),
    });

    connectDB();

    var new_product = new Product({
        "product": product,
        "price": price,
        "image": "https://loremflickr.com/640/480/business",
        "category": category,
        "seller": seller,
        "id": "100"
    })

    new_product.save();

    revalidatePath('/admin');
    redirect('/admin');
}