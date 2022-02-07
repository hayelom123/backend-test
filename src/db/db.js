const mongoose = require("mongoose");

  mongoose.connect('mongodb://localhost:27017/myapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true,
    })
    .then(() => {
      console.log("connected to data base");
    })
    .catch((er) => {
      console.log("something went Wrong: database connectionfailed",er);
    });