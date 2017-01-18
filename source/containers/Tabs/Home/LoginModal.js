import React from 'react';
import Button from 'components/Button';
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';

export default function LoginModal({isOpen, toggle}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Log In</ModalHeader>
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
        <Button color="primary" onClick={toggle}>Log In</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}
