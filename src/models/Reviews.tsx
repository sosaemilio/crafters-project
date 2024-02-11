import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema({
	review: {
		type: String,
		required: true,
	},
    productId: {
        type: String,
        required: true,
    },
});

export default models.Review || model("Review", ReviewSchema);
