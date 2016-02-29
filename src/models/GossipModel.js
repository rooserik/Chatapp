import BaseModel from './BaseModel';

class GossipModel extends BaseModel {
  defaults(){
    return{
      title: "new gossip",
      completed: false
    };
  }

  constructor(){
    super('gossip');
  }


}

export default GossipModel;
