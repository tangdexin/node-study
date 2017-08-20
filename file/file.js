let fs = require('fs');

console.log('will onpen files !');

fs.stat('input.txt',function(err,stats){
    if(err){
        return console.log(err);
    }
    console.log(stats);
    console.log('success!');

    console.log('isFile?'+stats.isFile());
    console.log('isDirectory?'+stats.isDirectory());
    
})