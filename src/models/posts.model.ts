import mongoose, { Model, Schema, Document } from "mongoose";

interface IPost {
  title: string;
  message: string;
  creator: string;
  tags: string[];
  selectedFile: string;
  likeCount?: Number;
  createdAt?: Date;
}

interface IPostDocument extends IPost, Document {
  userId: string;
  token: string;
}

const postSchema = new Schema<IPostDocument>(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    creator: { type: String, required: true },
    tags: { type: [String] },
    selectedFile: { type: String },
    likeCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret) => {
        ret.postId = ret._id.toString();
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const Post: Model<IPostDocument> = mongoose.model<IPostDocument>(
  "Post",
  postSchema
);

export { IPost, IPostDocument, Post };
