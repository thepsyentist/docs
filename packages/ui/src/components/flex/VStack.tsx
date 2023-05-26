import React, { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = HTMLAttributes<HTMLDivElement>;

const VStack = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <Container {...props}>{children}</Container>;
};

export default VStack;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
