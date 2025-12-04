import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IReview extends Document {
  name: string;
  email: string;
  rating: number;
  text: string;
  createdAt: Date;
  isVisible: boolean;
}

const ReviewSchema = new Schema<IReview>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isVisible: { type: Boolean, default: false }, // default PENDING
});

export default models.Review || model<IReview>("Review", ReviewSchema);
