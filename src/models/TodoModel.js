import BaseModel from './BaseModel';

class TodoModel extends BaseModel {
  defaults(){
    return{
      title: "new todo",
      completed: false
    };
  }

  constructor(){
    super('todo');
  }


}

export default TodoModel;
