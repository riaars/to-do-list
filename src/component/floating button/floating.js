import React, {Component} from 'react';
import {Container, Button, Link} from 'react-floating-action-button';

const AddIcon = () => {
  return (
    <Container>
      <Button
        tooltip="Create New Schedule"
        icon="fas fa-plus"
        rotate={true}
        onClick={() => alert('Pop Up overlay')}
      />
    </Container>
  );
};

export default AddIcon;
