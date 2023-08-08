import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const DocumentGrid = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 16px;
`;
