import styled, { css } from 'styled-components';

export const NotificationFormWrap = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.colorStyled.ColorWhite};
  color: #222;
`;

export const NotificationFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4em 0em;
  max-width: 960px;
  margin: 0em auto 1em;
  width: calc(100% - 3em);
  button {
    padding: .615em 1em;
    border-radius: 1.5em;
    border: none;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colorStyled.ColorBgSide};
    color: ${props => props.theme.colorStyled.ColorWhite};
    i {
      margin-right: 5px;
    }
  }
`;

export const NotificationFormContent = styled.div`
  background-color: ${props => props.theme.colorStyled.ColorLightBlue};
`;

export const NotificationFormTitle = styled.div`
  margin-right: 1em;
  p {
    font-size: ${props => props.theme.fontSize.XXLargeFontSize};
  }
  span {
    display: block;
    margin-top: .5em;
    color: ${props => props.theme.colorStyled.ColorDarkGrey};
  }
`;

export const NotificationFormSubTitle = styled(NotificationFormTitle)`
  p {
    font-size: ${props => props.theme.fontSize.BaseFontSize};
    font-weight: 600;
    color: #222;
  }
`;

export const NotificationConfigureWrap = styled.div`
  max-width: 960px;
  margin: 0em auto;
  width: calc(100% - 3em);
  padding: 3em 0em;
  .ant-input {
    background-color: #fff !important;
  }
`;

export const NotificationConfigureHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NotificationConfigureItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
`;

export const NotificationConfigureItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(50% - 1em);
  text-align: center;
  min-height: 6em;
  border-radius: .325em;
  margin-bottom: 1em;
  padding: 1.5em 1em 2em;
  cursor: pointer;
  box-shadow: ${props => props.theme.boxShadow.headerTable};
  background-color: ${props => props.theme.colorStyled.ColorWhite};
  transition: all 500ms ease;
  &:hover {
    transform: scale(1.035);
  }
  &:nth-child(odd) {
    margin-right: 1em;
  }
  &:nth-child(even) {
    margin-left: 1em;
  }
  i {
    margin-top: .5em;
    font-size: ${props => props.theme.fontSize.XXLargeFontSize};
    font-weight: bold;
    &:hover {
      opacity: 1;
    }
  }
  ${({ active }) => active && css`
    background-color: ${props => props.theme.colorStyled.ColorBgSide};
    color: ${props => props.theme.colorStyled.ColorWhite}; 
  `}
`;