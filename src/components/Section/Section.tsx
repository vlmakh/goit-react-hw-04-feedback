import React from 'react';
import { Container, Title } from './Section.styled';
import { SectionType } from '../types';

export default function Section({ title, children }: SectionType) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
