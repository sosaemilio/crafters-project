import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
	product: {
		type: String,
		required: [true, "product name is required"],
		trim: true,
	},
	price: {
		type: String,
		required: [true, "product name is required"],
		trim: true,
	},
	image: {
		type: String,
		required: [true, "product name is required"],
		trim: true,
	},
	category: {
		type: String,
		required: [true, "product name is required"],
		trim: true,
	},
	seller: {
		type: String,
		required: [true, "product name is required"],
		trim: true,
	},
	id: {
		type: String,
		required: [true, "product name is required"],
		trim: true,
	},
});

export default models.Product || model("Product", ProductSchema);
