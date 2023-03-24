const mongoose = require("mongoose");
const connectString = "mongodb+srv://nguyentinhdn0507:Mrtinhdn0507@shopecommerce.rjylqha.mongodb.net/?retryWrites=true&w=majority";
// const connectString = "mongodb://localhost:27017/shopEcommerce";
class DataBase {
  constructor() {
    this.connect();
  }
  connect(type ='mongodb') {
    if(1===1){
        mongoose.set('debug', true);
        mongoose.set('debug', {color:true});
    }
    mongoose
      .connect(connectString)
      .then((_) => console.log(`Connected to MongoDB Success`))
      .catch((err) => console.log(`Error: ${err}`));
  }
  static getInstance() {
    if(!DataBase.instance){
        DataBase.instance = new DataBase();
    }
    return DataBase.instance;
  }
}
const instanceMongoDB = DataBase.getInstance();
module.exports = instanceMongoDB;
