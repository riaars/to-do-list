import React, {Component} from 'react';
import './TodoList.css';

class TodoItem extends Component {
  render() {
    const {title, category, notes, handleDelete, handleEdit} = this.props;

    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <h3>{title}</h3>
            <div className="subtitle">{notes}</div>
          </div>

          <div className="col-lg-2 col-sm-12 category">
            <button
              className="btn btn-outline-info"
              style={{borderRadius: '20px'}}>
              {category}
            </button>
          </div>

          <div className="todo-icon col-lg-2 col-sm-12">
            <span className="mx-2 text-success" onClick={handleEdit}>
              <i className="fas fa-pen" />
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash" />
            </span>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoItem;
