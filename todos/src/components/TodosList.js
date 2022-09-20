/* eslint-disable */
import React from 'react';
import TodoItem from './TodoItem';

class Todoslist extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>TodosList component</h1>
        <ul>
          {this.props.todos.map((todo) => (

            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              handleDelete={this.props.deleteTodoProps}
              setUpdate={this.props.setUpdate}
            />
          ))}
        </ul>

      </div>
    );
  }
}

export default Todoslist;
