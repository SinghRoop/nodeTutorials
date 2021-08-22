const mongoose = require("mongoose");

// connect database to mongoose or creating database
mongoose
  .connect("mongodb://localhost:27017/channel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is successfull..");
  })
  .catch((err) => console.log(err));


// Creating Schema
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating Models or creating collection

const Playlist = new mongoose.model("Playlist", playlistSchema)