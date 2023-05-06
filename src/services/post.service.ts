import { Post, IPost, IPostDocument } from "../models/posts.model";

export const getPost = async (): Promise<IPostDocument[]> => {
  try {
    const posts = await Post.find();
    return posts as IPostDocument[];
  } catch (error) {
    throw new Error(`User not found ${error}`);
  }
};

export const getPostById = async (id: string): Promise<IPostDocument> => {
  try {
    const post = await Post.findById(id);
    if (!post) throw new Error("Post not found"); // Throw an error if the user is not found
    return post;
  } catch (error) {
    throw new Error(`Retrieving user failed: ${error}`);
  }
};

export const createPost = async (post: IPost): Promise<IPostDocument> => {
  try {
    const newPost = new Post(post);
    const savedPost = await newPost.save();
    return savedPost;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not create post ${error}`);
  }
};

export const deletePost = async (id: string): Promise<IPostDocument> => {
  try {
    const post = await Post.findById(id);
    if (!post) throw new Error("post not found"); // Throw an error if the user is not found
    return post;
  } catch (error) {
    throw new Error(`Delete failed ${error}`);
  }
};
