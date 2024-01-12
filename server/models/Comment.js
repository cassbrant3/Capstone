import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  msg: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  title: {
    type: String,
    required: true,
    enum: [
      "twisted-love",
      "twisted-games",
      "twisted-hate",
      "twisted-lies",
      "king-of-wrath"
    ]
  }
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
