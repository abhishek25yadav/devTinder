const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://abhishek91189355_db_user:Abhi1998@namastenode.keoqizg.mongodb.net/"
  );
};

module.exports = connectDB;