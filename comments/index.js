const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { randomBytes } = require("crypto");

const mongoURI =
  "mongodb+srv://manavvrma17:7SgNmT821axpRmBU@blog.ukchd6g.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const { Comment } = require("./models/commentsdb.js");

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.get("/posts/:id/comments", async (req, res) => {
  try {
    const postId = req.params.id;
    const comments = await Comment.find({ postId }).exec();
    res.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Could not fetch comments" });
  }
});

app.post("/posts/:id/comments", async (req, res) => {
  try {
    const commentId = randomBytes(4).toString("hex");
    const postId = req.params.id;
    const { content } = req.body;

    const comment = new Comment({ postId, commentId, content });
    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ error: "Could not create comment" });
  }
});

app.listen(4001, () => {
  console.log("listening at port 4001");
});
