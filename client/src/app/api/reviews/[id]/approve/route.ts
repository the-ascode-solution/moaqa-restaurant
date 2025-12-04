import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Ensure this route runs in the Node runtime so Mongoose works
export const runtime = "nodejs";

// Use a cached global to avoid multiple connections in dev/hot-reload
const g = global as any;
if (!g._mongooseGlobal) {
  g._mongooseGlobal = { conn: null, promise: null };
}
if (g._mongooseGlobal.conn) return g._mongooseGlobal.conn;

async function connectDB() {
  // initialize and reuse a cached global connection to avoid multiple connects in dev
  const g = global as any;
  if (!g._mongooseGlobal) {
    g._mongooseGlobal = { conn: null, promise: null };
  }
  if (g._mongooseGlobal.conn) return g._mongooseGlobal.conn;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI");

  if (!g._mongooseGlobal.promise) {
    g._mongooseGlobal.promise = mongoose.connect(uri).then((m) => m);
  }

  g._mongooseGlobal.conn = await g._mongooseGlobal.promise;
  return g._mongooseGlobal.conn;
}

export async function POST(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = params?.id;
  if (!id) {
    return NextResponse.json({ message: "Missing review id" }, { status: 400 });
  }

  try {
    await connectDB();

    // correct relative path: from .../app/api/reviews/[id]/approve to src/models/Review
    const mod = await import("../../../../../models/Review");
    const ReviewModel =
      (mod && (mod.default || mod.Review)) || mongoose.models?.Review;
    if (!ReviewModel) {
      return NextResponse.json(
        { message: "Review model not found" },
        { status: 500 }
      );
    }

    const review = await ReviewModel.findById(id);
    if (!review) {
      return NextResponse.json({ message: "Review not found" }, { status: 404 });
    }

    review.status = "approved";
    await review.save();

    // Use toObject when available to get a plain JSON representation
    const result =
      typeof review.toObject === "function"
        ? review.toObject()
        : JSON.parse(JSON.stringify(review));

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    const message =
      process.env.NODE_ENV === "development"
        ? error?.message || "Error approving review"
        : "Error approving review";
    return NextResponse.json({ message }, { status: 500 });
  }
}
