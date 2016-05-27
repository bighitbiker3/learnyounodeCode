var mymodule = require('./filterModule.js');

mymodule(process.argv[2], process.argv[3], function(err, data){
  if (err) throw err;

  data.forEach(function(element){
    console.log(element)
  })
})
