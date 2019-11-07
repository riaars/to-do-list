import React, {Component} from 'react';
import TodoInput from '../src/component/TodoInput/TodoInput';
import TodoList from '../src/component/TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/component/header/Header';
import uuid from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    item_notes: '',
    category: '',
    editItem: false,
  };

  handleChange = e => {
    this.setState({
      item: e.target.value,
    });
  };

  handleChangeNotes = e => {
    this.setState({
      item_notes: e.target.value,
    });
  };

  handleChangeCategory = e => {
    this.setState({
      category: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      notes: this.state.item_notes,
      category: this.state.category,
    };

    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      item: '',
      item_notes: '',
      category: '',
      id: uuid(),
      editItem: false,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      item_notes: selectedItem.notes,
      category: selectedItem.category,
      editItem: true,
      id: id,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="space"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h2>Create a Schedule</h2>
              <TodoInput
                item={this.state.item}
                item_notes={this.state.item_notes}
                handleChange={this.handleChange}
                handleChangeNotes={this.handleChangeNotes}
                handleChangeCategory={this.handleChangeCategory}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
            </div>

            <div className="col-lg-8 col-md-6 col-sm-12">
              <h2>My Todo List</h2>
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
