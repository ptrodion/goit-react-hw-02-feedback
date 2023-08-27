import { SectionSt } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionSt>
      {title && <h1>{title}</h1>}
      {children}
    </SectionSt>
  );
};
