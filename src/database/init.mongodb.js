const mongoose = require("mongoose");
require("dotenv").config();
// const connectString = "mongodb+srv://nguyentinhdn0507:Mrtinhdn0507@shopecommerce.rjylqha.mongodb.net/?retryWrites=true&w=majority";
const connectString = process.env.URL_MONGODB;
class DataBase {
  constructor() {
    this.connect();
  }
  async connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    try {
      await mongoose.connect(connectString);
      console.log(`Connected to MongoDB Success`);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }
}
const instanceMongoDB = DataBase.getInstance();
module.exports = instanceMongoDB;
