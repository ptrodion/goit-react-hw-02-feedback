import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(4)};
`;

export const Buttons = styled.button`
  display: block;
  min-width: 75px;
  padding: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid transparent;
  outline: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: inherit;

  &:hover {
    background-color: #2980b9;
    color: white;
  }

  &:focus {
    border-color: #3498db;
  }
`;
