const mongoose = require("mongoose");
const validator = require("validator");

// connect database to mongoose or creating database
mongoose
  .connect("mongodb://localhost:27017/channel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connection is successfull..");
  })
  .catch((err) => console.log(err));

// Creating Schema means structure of document
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // lowercase:true,
    // uppercase:true,
    trim: true,
    minlength: 2,
    maxlength: 8,
  },
  type: {
    type: String,
    enum: ["FrontEnd", "BackEnd", "Database"],
  },
  //Custom Validation
  videos: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Videos should not be negative");
      }
    },
  },
  author: String,
  // using NPM Validate
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating Models or creating collection
const Playlist = new mongoose.model("Playlist", playlistSchema);

// create documents or insert data
const createDocument = async () => {
  try {
    // const jsPlaylist = new Playlist({
    //   name: "JavaScript",
    //   type: "Front End",
    //   videos: 90,
    //   author: "Singh",
    //   active: true,
    // });
    // const mongoPlaylist = new Playlist({
    //   name: "Mongo DB",
    //   type: "Database",
    //   videos: 60,
    //   author: "Singh",
    //   active: true,
    // });
    // const mongoosePlaylist = new Playlist({
    //   name: "Mongoose DB",
    //   type: "Database",
    //   videos: 65,
    //   author: "Singh",
    //   active: true,
    // });
    const expressPlaylist = new Playlist({
      name: "Swift",
      type: "BackEnd",
      videos: 5,
      author: "Singh",
      email: "roop@gmail.in",
      active: true,
    });

    const result = await Playlist.insertMany([
      // jsPlaylist,
      // mongoPlaylist,
      // mongoosePlaylist,
      expressPlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log("Error occured..", err);
  }
};

createDocument();

// Read/find documents  simple

// const getDocument = async () => {
//   try {
//     const result = await Playlist.find({ type: "Front End" })
//       .select({ name: 1 })
//       .limit(1);
//     console.log(result);
//   } catch (ere) {
//     console.log(err);
//   }
// };

// getDocument();

// Read/find documents  using comparison operator
// const getDocument = async () => {
//   try {
//     const result = await Playlist.find({ type: { $in: ["Back End", "Database"] } })
//       .select({ name: 1 })
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDocument();

// Read/find documents  using logical operator
// const getDocument = async () => {
//   try {
//     const result = await Playlist.find({ $and: [{ type: "Front End" }, { author: "Singh" }] })
//       .select({ name: 1 })
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDocument();

// Read/find documents Counting = countDocuments() and Sorting 1 is for asending and -1 for desending order.
const getDocument = async () => {
  try {
    const result = await Playlist.find({
      author: "Singh",
    })
      .select({
        name: 1,
      })
      .sort({
        name: -1,
      });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// getDocument();

// Update One document
// const updateDocument = async (_id) => {

//   try {
//     const result = await Playlist.findByIdAndUpdate({ _id }, {
//       $set: {
//         name: "JavaScript"
//       }
//     },{
//       new: true,     // retuns updated value in console
//       useFindAndModify : false
//     })
//     console.log(result)
//   }
//   catch (err) {
//     console.log(err);
//   }
// }

// updateDocument("61233cd2aa1ef643f00809c7");

// Update Many document
const updateDocument = async () => {
  try {
    const result = await Playlist.updateMany(
      {
        videos: {
          $gte: 5,
        },
      },
      {
        $set: {
          name: "Ruby",
        },
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// updateDocument();

//Delete document in mongo

const deleteDocument = async (_id) => {
  try {
    const result = await Playlist.findByIdAndDelete({
      _id,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// deleteDocument("61233cd2aa1ef643f00809ca")
