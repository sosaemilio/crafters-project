'use server';

import { z } from 'zod';
import { connectDB } from './connection';
import Product from "@/models/Products"
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile } from 'fs/promises';
import path from "path"

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
 
const FormSchema = z.object({
  id: z.string(),
  product: z.string(),
  price: z.string(),
  seller: z.string(),
  category: z.string(),
  image: z
  .any()
  .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "Only .jpg, .jpeg, .png and .webp formats are supported."
  )
});

const CreateProduct = FormSchema.omit({ id: true});

export async function createProduct(formData: FormData) {
    const {product, price, category, seller, image} = CreateProduct.parse({
        product: formData.get('product'),
        price: formData.get('price'),
        category: formData.get('category'),
        seller: formData.get('seller'),
        image: formData.get('image')
    });

    const buffer = Buffer.from(await image.arrayBuffer());
    // Replace spaces in the file name with underscores
    const filename = image.name.replaceAll(" ", "_");
    console.log(filename);


    await writeFile(
        path.join(process.cwd(), "public/products/" + filename),
        buffer
    );
    // Connect DB    
    connectDB();

    var new_product = new Product({
        "product": product,
        "price": price,
        "image": "/products/" + filename,
        "category": category,
        "seller": seller,
        "id": "100"
    })

    new_product.save();

    revalidatePath('/admin');
    redirect('/admin');
}