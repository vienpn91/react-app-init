import React, { Component } from 'react';
import LoginForm from './LoginForm';
import BackgroundLeft from '../BackgroundLeft';
import {
  RegisterPageContainer,
  RegisterPageWrap,
  RegisterRightWrap,
  RegisterFormWrap,
  RegisterTitle,
  RegisterTitleText,
} from '../RegisterPage/RegisterPage.style';

class LoginPage extends Component {
  render() {
    return (
      <RegisterPageContainer>
        <RegisterPageWrap>
          <BackgroundLeft />

          <RegisterRightWrap>
            <RegisterTitle>SiteVibes</RegisterTitle>
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