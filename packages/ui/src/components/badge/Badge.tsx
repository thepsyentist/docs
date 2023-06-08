import React, { CSSProperties, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { styleToken } from '../../core';

type Props = {
  color?: string;
  backgroundColor?: string;
  style?: CSSProperties;
};

export const Badge = ({ children, color, backgroundColor, style }: PropsWithChildren<Props>) => {
  return (
    <Container color={color} backgroundColor={backgroundColor} style={style}>
      {children}
    </Container>
  );
};

const Container = styled.span<Pick<Props, 'color' | 'backgroundColor'>>`
  display: flex;
  color: ${(props) => props.color || styleToken.color.black};
  background-color: ${(props) => props.backgroundColor || styleToken.color.gray200};
  align-items: center;
  line-height: 1;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;
