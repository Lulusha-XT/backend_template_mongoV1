import express from "express";
import postRoutes from "./apis/posts.route";

const router: express.Router = express.Router();

router.get("/", (req, res) => {
  res.send("this works!");
});

router.use("/posts", postRoutes);

export default router;
