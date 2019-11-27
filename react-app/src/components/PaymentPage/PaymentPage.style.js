import styled from 'styled-components';

export const PaymentPageContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export const PaymnetHeaderWrap = styled.div`
  position: fixed;
  top: 0em;
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: ${props => props.theme.colorStyled.ColorWhite};
  box-shadow: 0px 0px 4px 2px ${props => props.theme.colorStyled.ColorBorder};
  p {
    margin-bottom: 0em;
    span {
      font-weight: bold;
    }
  }
`;

export const PaymentContenWrap = styled.div`
  display: flex;
  padding-top: 3em;
  max-width: 960px;
  margin: 5em auto 0em;
  width: calc(100% - 2em);
`;

export const PaymentFormContainer = styled.div`
  flex: 0 0 50%;
  height: calc(100vh - 9em);
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .review-order-button {
    margin-top: 2em;
    button {
      background-color: ${props => props.theme.colorStyled.ColorMidGreen};
      border-color: ${props => props.theme.colorStyled.ColorMidGreen};
      font-size: ${props => props.theme.fontSize.HeadingH6FontSize};
      height: 2.5em;
      font-weight: 600;
      span {
        color: ${props => props.theme.colorStyled.ColorWhite};
      }
    }
  }
`;

export const PaymentFormItem = styled.div`
  padding: 3em 0em 2em;
  border-bottom: 1px solid ${props => props.theme.colorStyled.ColorBorder};
  &:first-child {
    padding-top: 0em;
  }
`;

export const PaymentFormTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  span {
    font-size: ${props => props.theme.fontSize.HeadingH6FontSize};
  }
`;

export const PaymentFormSubTitle = styled.div`
  font-weight: bold;
  i {
    margin-right: 5px;
  }
`;

export const PaymentSubContent = styled.div`
  color: ${props => props.theme.colorStyled.ColorDarkGrey};
  font-size: ${props => props.theme.fontSize.MediumFontSize};
`;