import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Button from 'components/Button';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import {ButtonGroup} from 'reactstrap';


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      loginModalShown: false,
      signupModalShown: false
    }
    this.toggleLogin = this.toggleLogin.bind(this)
    this.toggleSignup = this.toggleSignup.bind(this)
  }

  render() {
    const {loginModalShown, signupModalShown} = this.state;
    return (
      <div>
        <PageHeading
          title="Welcome!"
        />
        <ButtonGroup style={{marginTop: '1em'}}>
          <Button
            color="warning"
            onClick={this.toggleLogin}
          >
            Log In
          </Button>
          <Button
            color="success"
            onClick={this.toggleSignup}
          >
            Sign Up
          </Button>
        </ButtonGroup>
        <LoginModal isOpen={loginModalShown} toggle={this.toggleLogin} />
        <SignupModal isOpen={signupModalShown} toggle={this.toggleSignup} />
      </div>
    )
  }

  toggleLogin() {
    this.setState({loginModalShown: !this.state.loginModalShown})
  }

  toggleSignup() {
    this.setState({signupModalShown: !this.state.signupModalShown})
  }
}
