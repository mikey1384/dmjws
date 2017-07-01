import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Button from 'components/Button';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import LoginCover from 'components/Cover2';
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
        <LoginCover
          text="DMJW's Account"

        />
         <ButtonGroup style={{marginTop: '1em'}}>
           <Button
             color="warning"
             onClick={this.toggleLogin}
           >
             Sign In to DMJW's internet
           </Button>
           <Button
             color="success"
             onClick={this.toggleSignup}
           >
             Don't have a account yet? Sign Up
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
