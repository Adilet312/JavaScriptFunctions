
// please complete the implementation
class EventEmitter {
    constructor(){
      this._events = {}
    }
    subscribe(eventName, callback) {
        
      (this._events[eventName] = this._events[eventName] || []).push(callback);
        return{
        release: () =>  {
          const index = this._events[eventName].indexOf(callback);
          return this._events[eventName].splice(index,1);
        }
      }
    }
    
    emit(eventName, ...args) {
      const eventList = this._events[eventName];
      if(eventList){
        eventList.forEach((callback) => callback(...args))
      }
    }
  }

  
const emitter = new EventEmitter()
// const sub1  = emitter.subscribe('event1', callback1);
// const sub2 = emitter.subscribe('event2', callback2);

// same callback could subscribe 
// on same event multiple times
const sub3 = emitter.subscribe('event1', callback1);
emitter.emit('event1', 1, 2);
//sub1.release()
sub3.release()