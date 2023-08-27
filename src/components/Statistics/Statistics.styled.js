import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;
