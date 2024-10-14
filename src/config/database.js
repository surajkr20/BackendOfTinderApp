const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://suraj71308kumar:Suraj7860@cluster1.zzbaj.mongodb.net/"
  );
};


connectDB()
  .then(() => {
    console.log("connection established successfully.....");
})
  .catch((err) => {
    console.error("connection can not established");
});
