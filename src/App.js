import React from 'react';
import TodoModel from './models/TodoModel';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './assets/stylesheets/components.scss';

class App extends React.Component {
  constructor(){
    super();

    this.todos = new TodoModel();
      }

    render() {
        return (
            <div className="channel">
              <TodoList model={this.todos} />
              <TodoForm model={this.todos} />
            </div>
        );
    }
}

export default App;
