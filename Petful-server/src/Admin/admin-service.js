const { queues, autoQueue } = require('../QueueGen');

const adminService = {
  resetData(){
    let currNode = queues.catQueue;
    while(currNode.first !== null) {
      currNode.dequeue();
    }
    currNode = queues.dogQueue;
    while(currNode.first !== null) {
      currNode.dequeue();
    }
    currNode = queues.userQueue;
    while(currNode.first !== null) {
      currNode.dequeue();
    }
    autoQueue();
    autoQueue();
  }
  
};

module.exports = adminService;