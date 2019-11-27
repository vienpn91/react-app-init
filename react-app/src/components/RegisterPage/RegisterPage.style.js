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
  .submit-button {
    margin-top: 3em;
    text-align: center;
    button {
      background-color: ${props => props.theme.colorStyled.ColorDarkGreen};
      border-color: ${props => props.theme.colorStyled.ColorDarkGreen};
      height: 40px;
      font-weight: bold;
      span {
        color: ${props => props.theme.colorStyled.ColorWhite};
      }
    }
  }
`;

export const RegisterTitle = styled.div`
  font-size: 2em;
  margin-bottom: .325em;
`;

export const RegisterTitleSub = styled.div`
  color: ${props => props.theme.colorStyled.ColorDarkGrey};
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
  color: ${props => props.theme.colorStyled.ColorDarkGrey};
  span {
    font-weight: 600;
    margin: 0 5px;
    color: ${props => props.theme.colorStyled.ColorMidBlue};
  }
`;

export const RegisterAction = styled.div`
  display: flex;
  flex-direction: column;
  .login-form-button {
    background-color: ${props => props.theme.colorStyled.ColorGreen};
    border-color: ${props => props.theme.colorStyled.ColorGreen};
    font-weight: bold;
    height: 36px;
    span {
      color: ${props => props.theme.colorStyled.ColorWhite}; 
    }
    &:hover {
      background-color: ${props => props.theme.colorStyled.ColorGreen};
      border-color: ${props => props.theme.colorStyled.ColorGreen};
    }
  }
  > span {
    margin-top: 1em;
    a {
      margin-left: 5px;
      font-weight: 600;
      color: ${props => props.theme.colorStyled.ColorMidBlue};
    }
  }
`;

export const RegisterForgot = styled.a`
  font-weight: 600;
  color: ${props => props.theme.colorStyled.ColorMidBlue};
  margin-left: auto;
  line-height: 40px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;