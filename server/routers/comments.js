import { Router } from "express";
import Comment from "../models/Comment.js";

const router = Router();

//Creates a comment route
router.post("/", async (request, response) => {
  try {
    const newComment = new Comment(request.body);

    const data = await newComment.save();

    response.json(data);
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

//Get all comments route
router.get("/", async (request, response) => {
  try {
    const query = request.query;

    const data = await Comment.find(query);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.error);
  }
});

//Delete a comment by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Comment.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

//Update a single comment by ID

router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Comment.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: body.name,
          title: body.title,
          msg: body.msg
        }
      },
      {
        new: true
      }
    );
    response.json(data);
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});
export default router;
