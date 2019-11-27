import styled from 'styled-components';

export const PaymentInfoContainer = styled.div`
  flex: 0 0 50%;
`;

export const PaymentInfoWrap = styled.div`
  margin-left: 3em;
  box-shadow: ${props => props.theme.boxShadow.boxModal};
`;

export const PaymentInfoHeaderWrap = styled.div`
  padding: 2em;
  background-color: ${props => props.theme.colorStyled.ColorPurple};
  .bill-method {
    > div {
      background-color: transparent;
      border: none;
      box-shadow: none !important; 
      > div {
        margin: 0;
        > div {
          color: ${props => props.theme.colorStyled.ColorWhite};
        }
      }
      > span {
        color: ${props => props.theme.colorStyled.ColorWhite};
      }
    }
  }
`;

export const PaymentInfoTitle = styled.div`
  color: ${props => props.theme.colorStyled.ColorWhite};
  font-size: ${props => props.theme.fontSize.HeadingH5FontSize};
  font-weight: bold;
`;

export const PaymentInfoDetailWrap = styled.div`
  padding: 2em;
`;

export const PaymentInfoMathWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5em;
  border-bottom: 1px dashed ${props => props.theme.colorStyled.ColorBorder};
`;

export const PaymentInfoMath = styled.div`
  display: flex;
  align-items: center;
  span {
    margin: 0 5px 2px;
    font-weight: 600;
  }
`;

export const PaymentInfoMathTotal = styled.div``;

export const PaymentText = styled.div``;

export const PaymentInfoDescription = styled.div`
  padding-bottom: 1.5em;
  border-bottom: 1px dashed ${props => props.theme.colorStyled.ColorBorder};  
`;

export const PaymentInfoCredit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5em 0em .75em;
`;

export const PaymentDescription = styled.div`
  font-size: ${props => props.theme.fontSize.MediumFontSize};
  color: ${props => props.theme.colorStyled.ColorDarkGrey};
  line-height: 16px;
  span {
    font-weight: bold;
  }
`;

export const PaymentInfoTax = styled(PaymentInfoMathWrap)`
  margin-top: 1.5em;
`;

export const PaymentInfoTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5em;
  span {
    font-size: ${props => props.theme.fontSize.HeadingH6FontSize};
    font-weight: bold;
  }
`;