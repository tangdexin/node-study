let fs = require('fs');

fs.readFile('input.txt',function(err,data){
    if (err){
        return console.error(err);
    }
    console.log('异步读取：' + data);
})
console.log('finished!');