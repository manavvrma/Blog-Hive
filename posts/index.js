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

const { Post } = require("./models/postsdb.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// GET route to retrieve all posts
// GET route to retrieve all posts from MongoDB
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find({}).exec();
     // Add this line for debugging
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Could not fetch posts" });
  }
});


// POST route to create a new post
app.post("/posts", async (req, res) => {
  try {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;

    const post = new Post({ id, title });
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Could not create post" });
  }
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
