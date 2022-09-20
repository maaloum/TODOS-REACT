/* eslint-disable */
import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

 completedStyle = {
   fontStyle: 'italic',
   color: '#595959',
   opacity: 0.4,
   textDecoration: 'line-through',
 }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button onClick={() => this.props.handleDelete(this.props.todo.id)}>
          Delete
        </button>
        <span style={this.props.todo.completed ? this.completedStyle : null}>
          {this.props.todo.title}
        </span>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          ...
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={this.props.todo.title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, this.props.todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
