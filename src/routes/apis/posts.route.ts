import express from "express";
import post_routes from "../../controllers/post.controller";
const postRoutes = express.Router();

post_routes(postRoutes);

export default postRoutes;
