const EventEmitter = require('events');

class School extends EventEmitter{

    startPeriod(){
        console.log('class started');
        
        //raise an event when bell ring
        //raise an event
        this.emit('bellRing', {name: 'zisan', reason: 'not married'});
}

}

module.exports = School;