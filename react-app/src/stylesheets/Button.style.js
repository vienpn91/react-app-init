import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  border: none;
  border-radius: .325em;
  padding: .5em 1.5em;
  color: ${props => props.theme.colorStyled.ColorWhite};
  background-color: ${props => props.theme.colorStyled.ColorBgSide};
  outline: none;
`;

export const GroupAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.25em;
`;