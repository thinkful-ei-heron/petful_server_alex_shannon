const { queues, autoQueue } = require('../QueueGen');

const adminService = {
  resetData(){
    let currNode = queues.catQueue;
    while(currNode.first !== null) {
      currNode.dequeue();
    }
    console.log('finished resetting cats');
    currNode = queues.dogQueue;
    while(currNode.first !== null) {
      currNode.dequeue();
    }
    console.log('finished resetting dogs');
    currNode = queues.userQueue;
    while(currNode.first !== null) {
      currNode.dequeue();
    }
    console.log('finished resetting data');
    autoQueue();
    autoQueue();
  }
  
};

module.exports = adminService;