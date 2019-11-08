import React, {Component} from 'react';
import Modal from '../Modal/Modal'
import { Container, Button, Link } from 'react-floating-action-button';
import TodoInput from '../TodoInput/TodoInput';

class AddIcon extends Component {
    state = { show: false };
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
    render() {
      return (
        <div>
        <Container>
          <Modal show={this.state.show} handleClose={this.hideModal}>
          <TodoInput
                item={this.state.item}
                item_notes={this.state.item_notes}
                handleChange={this.handleChange}
                handleChangeNotes={this.handleChangeNotes}
                handleChangeCategory={this.handleChangeCategory}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
          </Modal>
        </Container>
        <Container>
            <Button
                tooltip="Create New Schedule"
                icon="fas fa-plus"
                rotate={true}
                onClick={this.showModal} />
        </Container>
        </div>
    )
}
}
export default AddIcon;