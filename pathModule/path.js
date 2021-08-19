const path = require('path');

// Get Directory
// console.log(path.dirname('D:/jagroop/node/Node_thapa/pathModule/path.js'));

// Get File extension
// console.log(path.extname('D:/jagroop/node/Node_thapa/pathModule/path.js'));

// Get File name
// console.log(path.basename('D:/jagroop/node/Node_thapa/pathModule/path.js'));

// Get all file info
// console.log(path.parse('D:/jagroop/node/Node_thapa/pathModule/path.js'));

//Get single file from parse object
const pathName = path.parse('D:/jagroop/node/Node_thapa/pathModule/path.js');

console.log(pathName.name);