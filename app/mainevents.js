var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data',function(){
    console.log('data received success!');
});
var connectHandler = function connected(){
console.log('connected success!');
eventEmitter.emit('data');
};

eventEmitter.emit('connection');
console.log('finished!')