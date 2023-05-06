const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let gallerySchema = new Schema(
  {
    imgtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
    contentType:{
        
    }
  },
  { timestamps: true }
);

let Post = mongoose.model("post", postSchema);

module.exports = Post;