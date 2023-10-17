import React from 'react';
import { SectionWrap, SectionContainer, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionContainer>
    </SectionWrap>
  );
};

export default Section;
