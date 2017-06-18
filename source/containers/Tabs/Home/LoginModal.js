import React, {Component} from 'react';
import Button from 'components/Button';
import {checkIfWorks} from 'redux/actions/UserActions'
import {connect} from 'react-redux'
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';

class LoginModal extends Component {
  render() {
    const {isOpen, toggle, checkIfWorks} = this.props
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sign In</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Username</Label>
              <Input name="username" placeholder="Enter Username" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" name="password" placeholder="Enter Password" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => checkIfWorks()}>Log In</Button>{' '}
          <button class="buttonload">

          </button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default connect(
  null,
  {checkIfWorks}
)(LoginModal)
