// reqire mongoose
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://AbhinavSuraj:Suraj7860@tinderapp.ouvwk.mongodb.net/'
  );
};

connectDB()
  .then(() => {
    console.log("connection established successfully.....");
})
  .catch((err) => {
    console.error("connection can not established");
});

module.exports = connectDB;