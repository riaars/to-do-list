import React, {Component} from 'react';

class TodoInput extends Component {
  render() {
    const {
      item,
      item_notes,
      category,
      handleChange,
      handleChangeNotes,
      handleChangeCategory,
      handleSubmit,
      editItem,
    } = this.props;
    return (
      <div className="my-3">
        <form onSubmit={handleSubmit}>
          <div className="text-capitalize text-left"> Add Task Title</div>
          <div className="input-group">
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
              required
            />
          </div>

          <div>Choose Category</div>
          <select
            className="form-control"
            id="sel1"
            name="sellist1"
            value={category}
            onChange={handleChangeCategory}>
            <option>No category</option>
            <option>To do</option>
            <option>Event </option>
            <option>Appointment</option>
            <option>School</option>
          </select>
          {/* <div className="input-group">
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add category"
              value={category}
              onChange={handleChangeCategory}
            />
          </div> */}

          <div>Add Notes</div>
          <div className="input-group">
            <textarea
              type="text"
              className="form-control text-capitalize"
              placeholder="add notes"
              value={item_notes}
              rows="5"
              required
              onChange={handleChangeNotes}> </textarea>
          </div>

          <button type="submit" className={ editItem ? 'btn btn-block btn-success mt-3' : 'btn btn-block btn-primary mt-3'}>
            {editItem ? 'Edit Item' : 'Add Item'}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
