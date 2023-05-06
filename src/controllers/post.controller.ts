import { Request, Response, Router } from "express";
import * as postServices from "../services/post.service";
import { IPost, IPostDocument } from "../models/posts.model";

const getPosts = async (
  req: Request,
  res: Response,
  next: Function
): Promise<void> => {
  try {
    const listPosts = await postServices.getPost();
    res.status(200).json(listPosts);
  } catch (error) {
    return next(error);
  }
};

const createPost = async (
  req: Request,
  res: Response,
  next: Function
): Promise<Response> => {
  try {
    const post: IPost = {
      title: req.body.title,
      message: req.body.message,
      creator: req.body.creator,
      tags: req.body.tags,
      selectedFile: req.body.selectedFile,
      likeCount: req.body.likeCount,
      createdAt: req.body.createdAt,
    };

    const newPost = await postServices.createPost(post);
    return res.status(201).json({ message: "Success", data: newPost });
  } catch (error) {
    return next(error);
  }
};

const post_routes = (route: Router) => {
  route.get("/", getPosts);
  route.post("/", createPost);
};

export default post_routes;
