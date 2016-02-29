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
  }

  render(){
    return(
      <div className="whatever">
        <form onSubmit={this.createTodo.bind(this)}>
          <div className="row">
            <input type="text" className="form-control" ref="newTitle"/>
          </div>
          <div>
            <button type="submit" classname="btn btn-primary">Message</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
