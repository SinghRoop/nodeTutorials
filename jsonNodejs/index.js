const fs = require("fs");

const bioData = {
  name: "roop",
  age: 24,
  channel: "youtube",
};

// convert object to json
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// fs.writeFile("json1.json", jsonData, () => {
//   console.log("done");
// });

fs.readFile("json1.json", "utf8", (err, data) => {
  const orgData = JSON.parse(data);
  console.log(orgData);
});

// convert json to object
// const objData = JSON.parse(jsonData);
// console.log(objData.channel);
