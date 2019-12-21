const { queues, autoQueue } = require('../QueueGen');

const adminService = {
  resetData(){
    if(queues.catQueue && queues.dogQueue && queues.userQueue) {
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
    
  }
  
};

module.exports = adminService;