import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  // ...existing code...
  status: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending",
  },
  // ...existing code...
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
