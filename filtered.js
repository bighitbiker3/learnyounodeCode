var fs = require('fs');
var path = require('path')
var file = process.argv[2];
var extension = process.argv[3]

fs.readdir(file, function(err, list){
  if(err) throw err;
  list.forEach(function(item){
    // console.log(path.extname(item).replace('.', ''));
    // console.log(extension)
    if(path.extname(item).replace('.', '') === extension){
      console.log(item)
    }
  })
})
