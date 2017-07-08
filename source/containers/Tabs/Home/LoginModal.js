import React, {Component} from 'react';
import Button from 'components/Button';
import {checkIfWorks} from 'redux/actions/UserActions'
import {connect} from 'react-redux'
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';

class LoginModal extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    const {isOpen, toggle, checkIfWorks} = this.props
    const {username, password} = this.state
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sign In</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Username</Label>
              <Input
                name="username"
                placeholder="Enter Username"
                onChange={event => this.setState({username: event.target.value})}
                value={username}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={event => this.setState({password: event.target.value})}
                value={password}
               />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => checkIfWorks(username, password)}>Log In</Button>{' '}
          <button className="buttonload">

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
