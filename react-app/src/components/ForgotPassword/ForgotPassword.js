import React, { Component } from 'react';
import BackgroundLeft from '../BackgroundLeft';
import ForgotPasswordForm from './ForgotPasswordForm';
import {
  RegisterPageContainer,
  RegisterPageWrap,
  RegisterRightWrap,
  RegisterFormWrap,
  RegisterTitle,
  RegisterTitleSub,
} from '../RegisterPage/RegisterPage.style';

class ForgotPassword extends Component {
  render() {
    return (
      <RegisterPageContainer>
        <RegisterPageWrap>
          <BackgroundLeft />

          <RegisterRightWrap>
            <RegisterTitle>Forgot your password ?</RegisterTitle>
            <RegisterTitleSub>Enter your email to reset password</RegisterTitleSub>

            <RegisterFormWrap>
              <ForgotPasswordForm />
            </RegisterFormWrap>
          </RegisterRightWrap>
        </RegisterPageWrap>
      </RegisterPageContainer>
    );
  }
}

export default ForgotPassword;