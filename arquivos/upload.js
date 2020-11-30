const fs = require("fs");

fs.createReadStream("../assets/FOTO").pipe(
  fs.createWriteStream("./assets/FOTO").on("finish", console.log("img write"))
);

// fs.readFile("../assets/FOTO", (error, buffer) => {
//   fs.writeFile("./assets/FOTO", buffer, (error) => {});
// });
