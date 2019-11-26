import React, { Component } from 'react';
import BackgroundLeft from '../BackgroundLeft';
import RegisterForm from './RegisterForm';
import {
  RegisterPageContainer,
  RegisterPageWrap,
  RegisterRightWrap,
  RegisterFormWrap,
  RegisterTitle,
  RegisterTitleSub,
  RegisterDescription,
} from './RegisterPage.style';

class RegisterPage extends Component {
  render() {
    return (
      <RegisterPageContainer>
        <RegisterPageWrap>
          <BackgroundLeft />

          <RegisterRightWrap>
            <RegisterTitle>Start your free, 30 days trial</RegisterTitle>
            <RegisterTitleSub>No credit card required</RegisterTitleSub>

            <RegisterFormWrap>
              <RegisterForm />
            </RegisterFormWrap>

            <RegisterDescription>
              By clicking 'Create Account', i agree SiteVibes
              <span>Terms of Service</span>
              and acknowledge its
              <span>Privacy Policy</span>
            </RegisterDescription>
          </RegisterRightWrap>
        </RegisterPageWrap>
      </RegisterPageContainer>
    );
  }
}

export default RegisterPage;