import styled from 'styled-components';

export const SectionSt = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(5)};
`;
