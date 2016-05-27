var fs = require('fs')
var buffer = fs.readFileSync(process.argv[2])
var str = buffer.toString();
var arr = str.split('\n')
console.log(arr.length -1)
