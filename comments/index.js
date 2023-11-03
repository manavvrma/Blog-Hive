const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const Comment = require("./commentsdb");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/posts/:id/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.id });
    res.send(comments);
  } catch (error) {
    res.status(500).send({ error: "Error fetching comments from the database" });
  }
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comment = new Comment({
    commentId,
    postId: req.params.id,
    content,
  });

  try {
    await comment.save();

    await axios.post("http://event-bus:4005/events", {
      type: "CommentCreated",
      data: {
        commentId,
        content,
        postId: req.params.id,
      },
    });

    res.status(201).send(comment);
  } catch (error) {
    res.status(500).send({ error: "Error creating comment or sending event" });
  }
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);
  res.send({});
});

app.listen(4001, () => {
  console.log("listening at port 4001");
});
