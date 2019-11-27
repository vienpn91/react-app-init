import React, { Component } from 'react';
import LoginForm from './LoginForm';
import BackgroundLeft from '../BackgroundLeft';
import {
  RegisterPageContainer,
  RegisterPageWrap,
  RegisterRightWrap,
  RegisterFormWrap,
  RegisterLogo,
  RegisterTitleText,
} from '../RegisterPage/RegisterPage.style';

class LoginPage extends Component {
  render() {
    return (
      <RegisterPageContainer>
        <RegisterPageWrap>
          <BackgroundLeft />

          <RegisterRightWrap>
            <RegisterLogo>
              <img src="./images/site-vibes-logo.png" alt="logo-login" />
            </RegisterLogo>
            <RegisterTitleText>Welcome back, good to see you again!</RegisterTitleText>

            <RegisterFormWrap>
              <LoginForm />
            </RegisterFormWrap>
          </RegisterRightWrap>
        </RegisterPageWrap>
      </RegisterPageContainer>
    );
  }
}

export default LoginPage;