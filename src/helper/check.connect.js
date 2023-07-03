const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
// count connect
const SECONDS = 5000;
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections::: ${numConnection}`);
};
// check overload connect
const checkOverloadConnect = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCore= os.cpus().length
    const memoryUsage = process.memoryUsage().rss
  }, SECONDS); // monitor every 5 seconds
};
module.exports = { countConnect, checkOverloadConnect };
