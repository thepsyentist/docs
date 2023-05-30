import React, { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = HTMLAttributes<HTMLDivElement>;

export const HStack = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <Container {...props}>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
