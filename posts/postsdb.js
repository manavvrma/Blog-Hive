const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const mongoURI = "mongodb+srv://manavvrma17:VHrPxxX9GtxVxgOJ@cluster0.ejmuytt.mongodb.net/?retryWrites=true&w=majority";

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

const postSchema = new mongoose.Schema({
  id:{
    type:String,
    required:true    
}, 
title:{
    type:String,
    required:true
},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
