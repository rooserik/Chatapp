import React from 'react';

class TodoList extends React.Component {
  constructor(){
    super();

    this.state={
      todos: []
    };
  }

  componentDidMount() {
    this.todos = this.props.model;

    this.todos.subscribe(this.updateList.bind(this));
  }

  updateList(){
    this.setState({
      todos: this.todos.resources
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="list">
        <ul>
          {this.state.todos.map((todo) => {
            return(
              <li key={todo._id}>
                    {todo.title}
              </li>
                );
              })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
