const bcrypt = require("bcrypt");
let pswrd = bcrypt.hashSync("123456", 9);
console.log(pswrd);
