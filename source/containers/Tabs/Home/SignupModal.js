import React, {Component} from 'react';
import Button from 'components/Button';
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {signup} from 'redux/actions';

class SignupModal extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    const {isOpen, toggle, signup} = this.props;
    const {username, password} = this.state;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Username</Label>
              <Input
                name="username"
                placeholder="Enter Username"
                value={username}
                onChange={event => this.setState({username: event.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={event => this.setState({password: event.target.value})} />
                <Label>Check Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={event => this.setState({password: event.target.value})} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => signup({username, password})}>Sign Up</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default connect(
  null,
  {signup}
)(SignupModal);
