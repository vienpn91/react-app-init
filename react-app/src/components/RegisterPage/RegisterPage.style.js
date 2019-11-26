import styled from 'styled-components';

export const RegisterPageContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export const RegisterPageWrap = styled.div`
  display: flex;
  height: 100%;
`;

export const RegisterRightWrap = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegisterFormWrap = styled.div`
  width: calc(100% - 10em);
  .ant-form-item {
    margin-bottom: 10px;
  }
  .ant-form-item-label {
    line-height: 28px;
    font-weight: 600;
    label{
      &:after {
        content: none;
      }
    }
  }
  .submit-button {
    margin-top: 3em;
    text-align: center;
    button {
      background-color: #384141;
      border-color: #384141;
      height: 40px;
      font-weight: bold;
    }
  }
`;

export const RegisterTitle = styled.div`
  font-size: 2em;
  margin-bottom: .325em;
`;

export const RegisterTitleSub = styled.div`
  color: #9b9b9b;
  margin-bottom: 3em;
`;

export const RegisterTitleText = styled.div`
  font-weight: 600;
  margin-bottom: 3em;
`;

export const RegisterDescription = styled.div`
  width: calc(100% - 10em);
  margin-top: 2em;
  text-align: center;
  color: #9b9b9b;
  span {
    font-weight: 600;
    margin: 0 5px;
    color: #4895ab;
  }
`;

export const RegisterAction = styled.div`
  display: flex;
  flex-direction: column;
  .login-form-button {
    background-color: #7bc867;
    border-color: #7bc867;
    font-weight: bold;
    height: 36px;
    &:hover {
      background-color: #7bc867;
      border-color: #7bc867;
    }
  }
  > span {
    margin-top: 1em;
    a {
      margin-left: 5px;
      font-weight: 600;
      color: #4895ab;
    }
  }
`;

export const RegisterForgot = styled.a`
  font-weight: 600;
  color: #4895ab;
  margin-left: auto;
  line-height: 40px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;