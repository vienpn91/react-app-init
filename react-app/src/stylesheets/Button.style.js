import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  border: none;
  border-radius: .325em;
  padding: .5em 1.5em;
  color: ${props => props.theme.colorStyled.ColorWhite};
  background-color: ${props => props.theme.colorStyled.ColorBgSide};
  outline: none;
`;