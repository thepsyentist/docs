import React from 'react';
import styled from 'styled-components';

const SeroiLogo = () => (
  <Container>
    <img src="/images/docs-logo.png" alt="Seroi Logo" />
  </Container>
);

export default SeroiLogo;

const Container = styled.div`
  margin-left: -16px;
  font-size: 24px;
  font-weight: 600;
  height: 40px;
  & img {
    height: 100%;
  }
`;
