import React, {Component} from 'react';

class TodoItem extends Component {
  render() {
    const {title, category, notes, handleDelete, handleEdit} = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h3>{title}</h3>
        <div>
          <h6>{category}</h6>
        </div>

        <div>
          <h6>{notes}</h6>
        </div>

        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
