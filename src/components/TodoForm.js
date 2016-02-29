import React from 'react';

class TodoForm extends React.Component {
  componentDidMount(){
    this.todos = this.props.model;
  }

  createTodo(event){
    event.preventDefault();
    console.log("Created Todo");
    let newTitle = this.refs.newTitle.value;
    console.log(newTitle);
    this.todos.addResource({
      title: newTitle,
      completed: false
    });

    this.refs.newTitle.value = "";
  }

  render(){
    return(
      <div className="todo">
        <form onSubmit={this.createTodo.bind(this)}>
          <div className="form-group">
            <label>New todo</label>
            <input type="text" ref="newTitle"/>
            <button type="submit">+</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
